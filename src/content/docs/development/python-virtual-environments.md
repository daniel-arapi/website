---
title: Python Virtual Environments
description: What Python virtual environments are, why they're needed, and how to create and manage them with venv, uv, and pyenv.
---

## What is a virtual environment?

A Python virtual environment is an isolated directory containing its own Python interpreter (or a link to one) and its own set of installed packages, separate from the system Python and from other projects. Activating one changes your shell's `python` and `pip` to point at that isolated copy instead of the global installation.

Each environment has its own `site-packages` directory, so packages installed in one environment are invisible to another, and to the system interpreter.

## Why they're needed

- **Dependency isolation** — Project A can depend on `requests==2.28`, Project B on `requests==2.31`, without conflict. Without isolation, both would fight over the same global `site-packages`.
- **Reproducibility** — A project's dependencies are pinned and recorded (e.g., in `requirements.txt` or `pyproject.toml`), so the same environment can be recreated on another machine or in CI.
- **Avoiding system Python pollution** — Modern OSes (macOS, most Linux distros) ship a Python used by system tools. Installing packages into it with `pip install --global` can break those tools or get wiped out by an OS update. `pip` itself refuses this by default on newer systems ("externally managed environment" error).
- **Clean uninstall** — Deleting a project's environment is just deleting a directory; nothing leaks into other projects or the system.
- **Testing across versions** — Combined with a Python version manager, you can verify a project works on Python 3.10, 3.11, 3.12, etc., without juggling multiple system-wide installs.

## Ways to create a virtual environment

### 1. `venv` (standard library)

Built into Python 3.3+, no extra install required.

```bash
# Create an environment in ./.venv
python3 -m venv .venv

# Activate it
source .venv/bin/activate        # macOS/Linux
.venv\Scripts\activate           # Windows (PowerShell/cmd)

# Install packages as usual
pip install requests

# Deactivate when done
deactivate
```

### 2. `virtualenv` (third-party)

Predates `venv`, still used for extra features (e.g., faster creation, more Python version flexibility) and legacy Python 2 support.

```bash
pip install virtualenv
virtualenv .venv
source .venv/bin/activate
```

### 3. `conda` / `mamba`

Manages both Python versions and non-Python dependencies (C libraries, etc.). Common in data science.

```bash
conda create -n myproject python=3.11
conda activate myproject
```

### 4. `uv` (modern, fast — recommended)

[`uv`](https://docs.astral.sh/uv/) is a Rust-based Python package and project manager from Astral (the makers of Ruff). It replaces `pip`, `venv`, `pip-tools`, and overlaps with `pyenv` for installing Python versions — all in one very fast binary.

### 5. `pyenv` (Python version manager)

[`pyenv`](https://github.com/pyenv/pyenv) doesn't create virtual environments itself — it installs and switches between multiple **Python versions** on one machine. It's typically paired with `venv`, `virtualenv`, or (its plugin) `pyenv-virtualenv` to also manage environments.

## `uv` + `pyenv`: the recommended combo

`uv` can install Python versions on its own, which means many people no longer need `pyenv` at all. But `pyenv` is still useful when you want a single, consistent way to manage system-wide Python versions used by tools outside `uv` (shells, other package managers, etc.), or you're already invested in a `pyenv`-based workflow. The two work fine together: use `pyenv` to install/select the interpreter, and `uv` for everything else — creating environments, installing packages, and managing project dependencies.

### Installing the tools

```bash
# Install pyenv (macOS via Homebrew)
brew install pyenv

# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh
# or: brew install uv
```

Add pyenv's init to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Restart your shell or `source ~/.zshrc` after adding this.

### Managing multiple Python versions with `pyenv`

```bash
# List versions available to install
pyenv install --list | grep " 3\.1"

# Install specific versions
pyenv install 3.11.9
pyenv install 3.12.6

# List versions installed locally
pyenv versions

# Set the global default Python version (used everywhere unless overridden)
pyenv global 3.12.6

# Set a version for just the current directory (writes a .python-version file)
cd ~/projects/myapp
pyenv local 3.11.9

# Set a version for just the current shell session
pyenv shell 3.11.9

# Confirm which version and binary are active
pyenv version
python --version
which python
```

`pyenv` resolves versions in this priority order: `PYENV_VERSION` shell variable → `.python-version` file (searched from the current directory upward) → global default.

### Using `uv` to create environments from a `pyenv`-installed Python

Once `pyenv` has the version installed, point `uv` at it:

```bash
cd ~/projects/myapp
pyenv local 3.11.9

# uv finds the active pyenv Python and creates .venv using it
uv venv --python $(pyenv which python)

# Activate as normal
source .venv/bin/activate

# Or skip activation entirely — uv run uses the project's .venv automatically
uv run python --version
```

### Using `uv` to manage Python versions directly (no `pyenv` needed)

If you don't need `pyenv` for anything else, `uv` can install and pin interpreters itself:

```bash
# List available Python versions uv can install
uv python list

# Install a specific version
uv python install 3.12

# Create a venv pinned to that version
uv venv --python 3.12

# Or let uv manage it per-project via pyproject.toml
uv init myapp
cd myapp
uv add requests          # adds dependency + creates .venv automatically
uv run python main.py    # runs inside the project's venv, no activation needed
```

### `uv` project workflow (typical day-to-day)

```bash
# Start a new project (creates pyproject.toml, .venv, .python-version)
uv init myapp
cd myapp

# Pin the Python version for this project
uv python pin 3.12

# Add/remove dependencies (updates pyproject.toml and uv.lock)
uv add requests fastapi
uv remove requests

# Sync the environment to exactly match the lockfile
uv sync

# Run a command inside the project's environment
uv run pytest
uv run python -m myapp
```

## Verification commands

Use these to confirm which interpreter, environment, and packages are actually active — the most common source of confusion is a shell using a different Python than expected.

```bash
# Which python binary is on PATH right now
which python
which python3

# Full version info
python --version
python -c "import sys; print(sys.version)"

# Is a virtual environment currently active? (non-empty if yes)
echo $VIRTUAL_ENV

# Path to the active interpreter (should point inside .venv if one is active)
python -c "import sys; print(sys.executable)"

# List installed packages in the active environment
pip list
uv pip list

# Check pyenv's resolved version and where it came from
pyenv version
pyenv version-name

# Check uv's own version and the Python versions it manages
uv --version
uv python list

# Confirm a project's lockfile matches its environment
uv sync --check
```

A quick sanity check worth memorizing:

```bash
python -c "import sys; print(sys.executable)"
```

If this path doesn't point inside your project's `.venv`, the environment isn't active (or the wrong one is).

## Summary

| Tool | Manages Python versions | Manages virtual environments | Manages dependencies |
|---|---|---|---|
| `venv` | No | Yes | No (use with `pip`) |
| `virtualenv` | No | Yes | No (use with `pip`) |
| `pyenv` | Yes | No (needs `pyenv-virtualenv` plugin) | No |
| `conda` | Yes | Yes | Yes |
| `uv` | Yes | Yes | Yes |

For new projects, `uv` alone is usually sufficient. Add `pyenv` when you need a version-management workflow shared across tools beyond `uv`.
