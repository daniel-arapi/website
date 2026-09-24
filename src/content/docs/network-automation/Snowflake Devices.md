### Snowflake Device

A **snowflake device** is a network device whose configuration has drifted from the organization's standardized, intended state due to manual, undocumented, or one-off changes.

Common characteristics include:

- **Configuration drift:** The device deviates from established configuration standards.
    
- **Undocumented changes:** Changes are made manually without being recorded in a source of truth or change history.
    
- **Not declaratively defined:** There is no authoritative definition of what the device's configuration should be.
    
- **Not version-controlled:** Configuration changes cannot be reliably tracked, reviewed, or rolled back.
    
- **Not reproducible:** The device cannot be deterministically rebuilt from known inputs.
    
- **No authoritative source of truth:** The device's current state, rather than a centralized system, effectively becomes the source of truth.
    

#### Example

Company policy requires VLAN names to use uppercase:

```text
VLAN 100
 name USERS
```

One device is manually configured as:

```text
VLAN 100
 name users
```

Although the functional difference may be minor, the device has **drifted from the standardized configuration** and become a snowflake.

#### Why Snowflakes Are a Problem

If a snowflake device fails, its intended state may be difficult or impossible to reconstruct because the configuration depends on undocumented device-local changes.

In a well-managed automation model:

```text
Source of Truth
      ↓
Declarative Intended State
      ↓
Automation
      ↓
Device Configuration
```

The device configuration is **derived state**. Given the same source-of-truth data, templates, automation code, and versions, the configuration should be reproducible.

A snowflake breaks this model.

The key principle is:

> **Infrastructure should be reproducible from authoritative, version-controlled inputs rather than dependent on undocumented device-local state.**