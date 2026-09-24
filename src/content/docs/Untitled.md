

```
# macos
# command to install brew

brew update
brew upgrade
```

```
# Install podman on macos
brew install podman
brew install podman-compose
```

![](Pasted%20image%2020260923224313.png)


![](Pasted%20image%2020260923224650.png)



![](Pasted%20image%2020260923224728.png)

![](Pasted%20image%2020260923224917.png)


![](Pasted%20image%2020260923225155.png)


![](Pasted%20image%2020260923225250.png)


```bash
# Verify verison
podman --version
```

```
# Create Podman Machine
```

```bash
# Update Homebrew's package metadata.
# This checks for the latest available package/formula definitions.
brew update

# Upgrade packages that were previously installed through Homebrew.
brew upgrade

# Install the Podman CLI and supporting components.
brew install podman

# Verify that Podman was installed successfully.
podman --version

# Create the Linux virtual machine that Podman will use.
# macOS cannot run Linux containers directly, so Podman runs them
# inside this lightweight Linux VM.
podman machine init

# Start the Podman Linux virtual machine.
# The VM must be running before you can create or run containers.
podman machine start

# Display information about the Podman environment.
# This verifies that the macOS CLI can communicate with the Podman VM.
podman info

# Run a small test container.
# Podman downloads the hello-world image if necessary, creates a
# temporary container, runs it, and prints a confirmation message.
podman run --rm docker.io/library/hello-world

# List currently running containers.
# There probably will not be any after hello-world exits.
podman ps

# List all containers, including containers that have exited.
podman ps -a

# List container images currently downloaded into the Podman VM.
podman images
```

```bash
# Change into the root directory of your Ansible collection project.
# The Containerfile will live alongside pyproject.toml.
cd ansible-network-automation-collections

# Confirm that you are in the correct directory.
# You should see pyproject.toml in this listing.
ls
```