
This roadmap documents my progression as a **Network Automation Engineer**, from networking and software-development fundamentals through Infrastructure as Code, Sources of Truth, CI/CD, observability, containerization, and AI-assisted network operations.

It serves as:

1. A structured learning path ordered by technical dependencies.
2. A public record of technologies and engineering capabilities I have developed.
3. A roadmap toward production-grade network automation in enterprise and data-center environments.

The roadmap incorporates topics from the:

- Cisco 350-901 AUTOCOR
- Cisco CCIE Automation Practical

It extends beyond certification requirements to include technologies and engineering practices commonly encountered in production environments.

A checked capability means I can **explain the concept and independently implement, validate, and troubleshoot it where applicable**.

---

# 1. Network Engineering Foundations

Automation requires understanding the infrastructure being automated.

## Network Fundamentals

- [ ] IPv4 addressing
- [ ] IPv4 subnetting
- [ ] IPv6 fundamentals
- [ ] TCP and UDP
- [ ] DNS
- [ ] DHCP
- [ ] ARP
- [ ] ICMP
- [ ] Routing and switching
- [ ] Control plane
- [ ] Data plane
- [ ] Management plane

## Ethernet and Switching

- [ ] Ethernet fundamentals
- [ ] MAC address tables
- [ ] VLANs
- [ ] Access ports
- [ ] 802.1Q trunks
- [ ] Native VLANs
- [ ] SVIs
- [ ] STP fundamentals
- [ ] LACP / EtherChannel

## Interfaces

- [ ] Configure network interfaces
- [ ] Configure descriptions
- [ ] Configure addressing
- [ ] Enable and disable interfaces
- [ ] Retrieve interface configuration
- [ ] Retrieve operational state
- [ ] Interpret interface counters
- [ ] Troubleshoot interface connectivity

## Routing

- [ ] Understand routing tables
- [ ] Configure static routes
- [ ] Configure OSPF
- [ ] Understand OSPF neighbors
- [ ] Interpret OSPF routes
- [ ] Configure BGP peering
- [ ] Understand BGP neighbor states
- [ ] Interpret BGP routes

## Access Control

- [ ] Standard ACLs
- [ ] Extended ACLs
- [ ] ACE processing
- [ ] Wildcard masks
- [ ] Apply ACLs to interfaces
- [ ] Verify ACL behavior
- [ ] Troubleshoot ACLs

## Network Services

- [ ] NTP
- [ ] SNMP
- [ ] Syslog
- [ ] AAA
- [ ] TACACS+
- [ ] RADIUS
- [ ] SSH
- [ ] DNS
- [ ] DHCP

---

# 2. Linux Systems

## Linux Fundamentals

- [ ] Navigate the Linux filesystem
- [ ] Manage files and directories
- [ ] Understand absolute and relative paths
- [ ] Manage file permissions
- [ ] Understand users and groups
- [ ] Use environment variables
- [ ] Understand `$PATH`
- [ ] Inspect processes
- [ ] Manage services
- [ ] Identify listening ports
- [ ] Use SSH
- [ ] Understand stdin, stdout, and stderr
- [ ] Understand exit codes
- [ ] Use pipes and redirection
- [ ] Inspect system and application logs

## Linux Networking

- [ ] Inspect network interfaces
- [ ] Inspect routing tables
- [ ] Inspect DNS configuration
- [ ] Test TCP connectivity
- [ ] Test HTTP/HTTPS connectivity
- [ ] Identify listening sockets
- [ ] Troubleshoot name resolution
- [ ] Troubleshoot network connectivity

## Remote Administration

- [ ] Configure SSH keys
- [ ] Use SSH agents
- [ ] Use SSH configuration files
- [ ] Use jump hosts / bastion hosts
- [ ] Transfer files securely
- [ ] Understand known-host verification

---

# 3. Git and Version Control

Git should be used throughout every project in this roadmap.

## Git Fundamentals

- [ ] Repositories
- [ ] Working tree
- [ ] Staging area
- [ ] Commits
- [ ] Branches
- [ ] Remotes
- [ ] `HEAD`
- [ ] Tags

## Daily Git Operations

- [ ] `git clone`
- [ ] `git status`
- [ ] `git add`
- [ ] `git commit`
- [ ] `git log`
- [ ] `git diff`
- [ ] `git fetch`
- [ ] `git pull`
- [ ] `git push`
- [ ] `git branch`
- [ ] `git switch`
- [ ] `git checkout`

## Branching

- [ ] Create feature branches
- [ ] Merge branches
- [ ] Understand fast-forward merges
- [ ] Perform fast-forward merges
- [ ] Understand three-way merges
- [ ] Perform three-way merges
- [ ] Perform squash merges
- [ ] Understand merge commits
- [ ] Resolve merge conflicts
- [ ] Delete merged branches

## History Management

- [ ] `git rebase`
- [ ] Interactive rebase
- [ ] Squash commits
- [ ] Reorder commits
- [ ] Amend commits
- [ ] `git cherry-pick`
- [ ] `git reset`
- [ ] `git revert`
- [ ] Understand reset vs revert
- [ ] Recover accidentally changed files

## Collaboration Workflows

- [ ] Feature-branch workflow
- [ ] Pull requests / merge requests
- [ ] Code review
- [ ] Branch protection
- [ ] Required approvals
- [ ] Required CI checks
- [ ] Keep feature branches synchronized with `main`
- [ ] Rebase feature branches
- [ ] Resolve remote/local divergence
- [ ] Maintain clean commit history

## Repository Hygiene

- [ ] `.gitignore`
- [ ] Prevent credentials from entering Git
- [ ] Repository naming conventions
- [ ] README documentation
- [ ] Semantic versioning
- [ ] Git tags
- [ ] Release management
- [ ] CHANGELOG maintenance

---

# 4. Development Environments

## Python Environments

- [ ] Understand system vs project Python
- [ ] Python virtual environments
- [ ] `pip`
- [ ] Dependency files
- [ ] Dependency pinning
- [ ] Dependency conflicts
- [ ] Reproducible Python environments

## Modern Python Tooling

- [ ] `pyenv`
- [ ] `uv`
- [ ] Python version management
- [ ] Dependency locking
- [ ] Reproducible environments

## Containerized Development Environments

- [ ] Understand development containers
- [ ] Build a Docker image for development
- [ ] Create a Dockerfile for an automation development environment
- [ ] Install Python inside the development image
- [ ] Install Ansible inside the development image
- [ ] Install Terraform tooling inside the development image
- [ ] Install Git inside the development image
- [ ] Mount source code into the container
- [ ] Persist development data
- [ ] Forward required ports
- [ ] Pass environment variables
- [ ] Inject development secrets securely
- [ ] Connect the container to external network labs
- [ ] Use VS Code Dev Containers
- [ ] Rebuild reproducible development environments

## IDE and Editor Integration

- [ ] VS Code
- [ ] Remote SSH development
- [ ] Dev Containers
- [ ] Python interpreter selection
- [ ] Integrated Git
- [ ] Integrated terminal
- [ ] Linting integration
- [ ] Formatting integration

---

# 5. Structured Data

## JSON

- [ ] Objects
- [ ] Arrays
- [ ] Data types
- [ ] Nested structures
- [ ] Serialization
- [ ] Deserialization
- [ ] Extract data from complex JSON

## YAML

- [ ] Mappings
- [ ] Sequences
- [ ] Scalars
- [ ] Nested structures
- [ ] Multiline values
- [ ] Anchors and aliases
- [ ] Common YAML syntax problems

## XML

- [ ] Elements
- [ ] Attributes
- [ ] Namespaces
- [ ] XML hierarchies
- [ ] XPath
- [ ] Programmatic XML parsing

## Data Transformation

- [ ] JSON → Python
- [ ] Python → JSON
- [ ] YAML → Python
- [ ] Python → YAML
- [ ] XML → Python
- [ ] Normalize data from multiple sources
- [ ] Transform API responses into automation inputs

---

# 6. Python Development

## Python Fundamentals

- [ ] Variables and data types
- [ ] Lists
- [ ] Tuples
- [ ] Dictionaries
- [ ] Sets
- [ ] Conditionals
- [ ] Loops
- [ ] Functions
- [ ] Arguments
- [ ] Return values
- [ ] Scope

## Application Development

- [ ] Modules
- [ ] Packages
- [ ] Imports
- [ ] Classes
- [ ] Objects
- [ ] Exceptions
- [ ] Context managers
- [ ] Comprehensions
- [ ] Iterators
- [ ] File operations
- [ ] Environment variables

## Python Project Structure

- [ ] Organize Python projects
- [ ] Separate business logic from configuration
- [ ] Separate API clients from application logic
- [ ] Build reusable modules
- [ ] Build reusable packages
- [ ] Configure dependencies
- [ ] Create command entry points

## Type Safety

- [ ] Python type hints
- [ ] Function annotations
- [ ] Static type checking
- [ ] Data validation models

## Logging

- [ ] Python `logging`
- [ ] Log levels
- [ ] Structured logging
- [ ] Avoid sensitive-data leakage
- [ ] Useful exception logging

## Async Programming

- [ ] Synchronous execution
- [ ] Asynchronous execution
- [ ] Blocking vs non-blocking operations
- [ ] `async`
- [ ] `await`
- [ ] Concurrent API requests
- [ ] Troubleshoot async applications

---

# 7. Python Code Quality and Testing

## Code Quality

- [ ] PEP 8
- [ ] Code formatting
- [ ] Linting
- [ ] Static analysis
- [ ] Type checking
- [ ] Docstrings
- [ ] Maintainable function design
- [ ] Avoid unnecessary abstraction

## Common Tooling

- [ ] Ruff
- [ ] Black or equivalent formatter
- [ ] mypy or equivalent type checker
- [ ] pre-commit hooks

## pytest

- [ ] Write pytest tests
- [ ] Assertions
- [ ] Fixtures
- [ ] Parameterized tests
- [ ] Mocking
- [ ] Test exceptions
- [ ] Test invalid input
- [ ] Test API clients
- [ ] Test data transformation
- [ ] Generate test coverage reports

## Testing Strategy

- [ ] Unit tests
- [ ] Integration tests
- [ ] Functional tests
- [ ] Positive tests
- [ ] Negative tests
- [ ] Regression tests

---

# 8. HTTP and REST APIs

## HTTP

- [ ] Client-server architecture
- [ ] HTTP vs HTTPS
- [ ] URLs and URIs
- [ ] Headers
- [ ] Request bodies
- [ ] Response bodies
- [ ] Cookies
- [ ] Sessions

## HTTP Methods

- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] Idempotency

## HTTP Status Codes

- [ ] 2xx
- [ ] 3xx
- [ ] 4xx
- [ ] 5xx
- [ ] Diagnose common HTTP failures

## REST

- [ ] Resources
- [ ] Endpoints
- [ ] CRUD
- [ ] Path parameters
- [ ] Query parameters
- [ ] Headers
- [ ] Payloads

## Python API Consumption

- [ ] GET resources
- [ ] POST resources
- [ ] PUT resources
- [ ] PATCH resources
- [ ] DELETE resources
- [ ] Parse JSON responses
- [ ] Configure timeouts
- [ ] Handle connection errors

## Advanced APIs

- [ ] Pagination
- [ ] Offset pagination
- [ ] Cursor pagination
- [ ] Rate limiting
- [ ] Retry logic
- [ ] Exponential backoff
- [ ] Persistent sessions
- [ ] API versioning

---

# 9. Authentication and API Security

- [ ] Basic Authentication
- [ ] API keys
- [ ] Bearer tokens
- [ ] Session authentication
- [ ] Token expiration
- [ ] Token refresh
- [ ] Persistent authentication

## OAuth2

- [ ] OAuth2 architecture
- [ ] Clients
- [ ] Authorization servers
- [ ] Resource servers
- [ ] Access tokens
- [ ] Refresh tokens
- [ ] Scopes
- [ ] Obtain OAuth2 tokens
- [ ] Authenticate API requests

---

# 10. Building APIs and CLI Applications

## Python REST APIs

- [ ] Build REST APIs using Python
- [ ] Define endpoints
- [ ] Process requests
- [ ] Generate responses
- [ ] Path parameters
- [ ] Query parameters
- [ ] Request validation
- [ ] Response models
- [ ] Error handling
- [ ] Authentication
- [ ] Authorization

## OpenAPI

- [ ] Understand OpenAPI
- [ ] Interpret specifications
- [ ] Define API schemas
- [ ] Generate interactive documentation

## CLI Applications

- [ ] Build Python CLI applications
- [ ] Parse arguments
- [ ] Parse options
- [ ] Validate input
- [ ] Consume APIs
- [ ] Format output
- [ ] Return meaningful errors

---

# 11. GraphQL

- [ ] Understand GraphQL
- [ ] REST vs GraphQL
- [ ] Schemas
- [ ] Queries
- [ ] Mutations
- [ ] Fields
- [ ] Arguments
- [ ] Variables
- [ ] Nested queries
- [ ] Consume unfamiliar GraphQL APIs

---

# 12. Working from Technical Documentation

- [ ] Read unfamiliar API documentation
- [ ] Determine authentication requirements
- [ ] Find required endpoints
- [ ] Determine HTTP methods
- [ ] Determine request schemas
- [ ] Determine response schemas
- [ ] Determine required headers
- [ ] Implement unfamiliar APIs
- [ ] Use unfamiliar Ansible modules
- [ ] Use unfamiliar Terraform providers
- [ ] Interpret unfamiliar YANG modules
- [ ] Work from vendor SDK documentation

---

# 13. Network Data Modeling and YANG

## Data Modeling

- [ ] Schemas
- [ ] Network data models
- [ ] Configuration data
- [ ] Operational data
- [ ] Desired state
- [ ] Observed state

## YANG

- [ ] Modules
- [ ] Containers
- [ ] Lists
- [ ] Leaves
- [ ] Leaf-lists
- [ ] Data types
- [ ] `leafref`
- [ ] `when`
- [ ] `must`

## YANG Interpretation

- [ ] Read YANG models
- [ ] Determine hierarchy
- [ ] Identify configuration data
- [ ] Identify operational data
- [ ] Generate JSON representations
- [ ] Generate YAML representations

---

# 14. NETCONF and RESTCONF

## NETCONF

- [ ] NETCONF architecture
- [ ] RPC
- [ ] RPC replies
- [ ] Capabilities
- [ ] Datastores
- [ ] `<get>`
- [ ] `<get-config>`
- [ ] `<edit-config>`
- [ ] Subtree filtering
- [ ] XPath filtering
- [ ] Create payloads from YANG
- [ ] Configure IOS XE using NETCONF
- [ ] Troubleshoot NETCONF

## RESTCONF

- [ ] RESTCONF architecture
- [ ] RFC 8040 fundamentals
- [ ] RESTCONF and YANG
- [ ] URI structure
- [ ] Headers
- [ ] JSON payloads
- [ ] XML payloads
- [ ] Retrieve configuration
- [ ] Retrieve operational data
- [ ] Modify configuration
- [ ] Generate payloads from YANG
- [ ] Configure IOS XE using RESTCONF
- [ ] Troubleshoot RESTCONF

---

# 15. Source of Truth Architecture

## Source of Truth Concepts

- [ ] Understand Source of Truth
- [ ] Understand Network Source of Truth
- [ ] Understand authoritative data ownership
- [ ] Understand desired state
- [ ] Understand observed state
- [ ] Understand configuration drift
- [ ] Identify conflicting Sources of Truth

## Network Data Domains

- [ ] Sites
- [ ] Locations
- [ ] Devices
- [ ] Device roles
- [ ] Platforms
- [ ] Interfaces
- [ ] IP addresses
- [ ] Prefixes
- [ ] VLANs
- [ ] VRFs
- [ ] Circuits
- [ ] Connections
- [ ] Inventory
- [ ] Configuration context

---

# 16. NetBox

## NetBox Architecture

- [ ] Understand NetBox as a Network Source of Truth
- [ ] Understand NetBox data models
- [ ] Understand NetBox application architecture
- [ ] Understand PostgreSQL dependency
- [ ] Understand Redis dependency
- [ ] Understand worker/background processing
- [ ] Deploy NetBox using containers

## DCIM

- [ ] Sites and locations
- [ ] Racks
- [ ] Devices
- [ ] Device types
- [ ] Device roles
- [ ] Platforms
- [ ] Interfaces
- [ ] Cables
- [ ] Inventory items

## IPAM

- [ ] Prefixes
- [ ] IP addresses
- [ ] VLANs
- [ ] VLAN groups
- [ ] VRFs
- [ ] Route targets
- [ ] Address assignment

## NetBox API

- [ ] Authenticate to the NetBox API
- [ ] Retrieve objects
- [ ] Create objects
- [ ] Modify objects
- [ ] Delete objects
- [ ] Handle pagination
- [ ] Filter API results
- [ ] Use NetBox data in Python
- [ ] Use NetBox data in Ansible
- [ ] Use NetBox data in Terraform

## NetBox Automation

- [ ] Build dynamic inventories
- [ ] Generate configuration from NetBox data
- [ ] Validate network state against NetBox
- [ ] Synchronize discovered device data
- [ ] Identify data drift
- [ ] Define data ownership and synchronization direction

## NetBox Operations

- [ ] Back up NetBox
- [ ] Restore NetBox
- [ ] Upgrade NetBox
- [ ] Manage plugins
- [ ] Understand custom fields
- [ ] Understand custom scripts
- [ ] Manage permissions
- [ ] Understand change logging

---

# 17. Infrahub

## Infrahub Architecture

- [ ] Understand Infrahub as a Source of Truth
- [ ] Understand schema-driven infrastructure data
- [ ] Understand graph-based relationships
- [ ] Understand versioned infrastructure data
- [ ] Understand branches
- [ ] Understand proposed changes

## Schema Modeling

- [ ] Create infrastructure schemas
- [ ] Model devices
- [ ] Model interfaces
- [ ] Model IP addressing
- [ ] Model VLANs
- [ ] Model sites and locations
- [ ] Model relationships between infrastructure objects

## Versioned Infrastructure Data

- [ ] Create data branches
- [ ] Modify infrastructure data on branches
- [ ] Compare changes
- [ ] Review proposed changes
- [ ] Merge infrastructure data changes
- [ ] Understand data conflicts

## Infrahub Automation

- [ ] Query infrastructure data
- [ ] Consume Infrahub APIs
- [ ] Use GraphQL with Infrahub
- [ ] Generate configuration from Infrahub data
- [ ] Integrate Infrahub with automation workflows
- [ ] Validate network state against intended data

## NetBox vs Infrahub

- [ ] Compare data-model approaches
- [ ] Compare change-management models
- [ ] Compare API models
- [ ] Compare operational complexity
- [ ] Compare automation integration
- [ ] Determine appropriate use cases for each

---

# 18. Data Validation and Normalization

Production automation frequently combines data from devices, APIs, Sources of Truth, and user input.

- [ ] Define canonical data structures
- [ ] Normalize vendor-specific data
- [ ] Validate required fields
- [ ] Validate data types
- [ ] Validate allowed values
- [ ] Validate ranges
- [ ] Validate IP addresses and prefixes
- [ ] Validate interface names
- [ ] Validate VLAN identifiers
- [ ] Detect duplicate data
- [ ] Detect conflicting data
- [ ] Handle missing data
- [ ] Compare intended and observed state

---

# 19. Ansible Fundamentals

## Architecture

- [ ] Control nodes
- [ ] Managed devices
- [ ] Inventories
- [ ] Collections
- [ ] Modules
- [ ] Plugins
- [ ] Playbooks
- [ ] Plays
- [ ] Tasks
- [ ] Roles

## Inventory

- [ ] Static inventory
- [ ] Dynamic inventory
- [ ] Host groups
- [ ] Host variables
- [ ] Group variables
- [ ] Inventory plugins

## Variables and Jinja2

- [ ] Variable precedence
- [ ] Registered variables
- [ ] Facts
- [ ] Jinja2 templates
- [ ] Jinja2 filters
- [ ] Conditionals
- [ ] Loops

## Network Connections

- [ ] `network_cli`
- [ ] `httpapi`
- [ ] `netconf`
- [ ] Troubleshoot connection failures

---

# 20. Production Ansible Engineering

## Ansible Roles

- [ ] Design reusable roles
- [ ] `defaults/`
- [ ] `tasks/`
- [ ] `handlers/`
- [ ] `templates/`
- [ ] `vars/`
- [ ] `meta/`
- [ ] Role argument specifications
- [ ] Validate role inputs
- [ ] Keep roles independently testable

## Ansible Collections

- [ ] Understand collection architecture
- [ ] Create a collection
- [ ] Create `galaxy.yml`
- [ ] Organize roles
- [ ] Organize plugins
- [ ] Organize modules
- [ ] Organize documentation
- [ ] Namespace collections
- [ ] Version collections
- [ ] Build collections
- [ ] Install collections
- [ ] Publish collections internally
- [ ] Manage collection dependencies

## Network Automation Design

Implement:

`Validate → Gather → Evaluate → Apply → Verify`

- [ ] Validate user input
- [ ] Gather current device state
- [ ] Determine compliance
- [ ] Determine required changes
- [ ] Apply configuration
- [ ] Verify resulting configuration
- [ ] Verify operational state
- [ ] Return structured results

## Idempotency

- [ ] Understand idempotency
- [ ] Build idempotent roles
- [ ] Detect unnecessary changes
- [ ] Detect configuration drift
- [ ] Verify second-run behavior

## Check Mode and Dry Runs

- [ ] Understand Ansible check mode
- [ ] Design safe preview workflows
- [ ] Distinguish predicted changes from applied changes

## Error Handling

- [ ] Handle unreachable devices
- [ ] Handle failed validation
- [ ] Handle failed configuration
- [ ] Handle failed verification
- [ ] Handle partial failures
- [ ] Produce actionable errors

---

# 21. Ansible Quality and Testing

## ansible-lint

- [ ] Configure `ansible-lint`
- [ ] Resolve linting failures
- [ ] Integrate linting into development workflow
- [ ] Integrate linting into CI

## yamllint

- [ ] Configure `yamllint`
- [ ] Resolve YAML formatting issues
- [ ] Integrate YAML validation into CI

## Role Testing

- [ ] Test input validation
- [ ] Test successful changes
- [ ] Test compliant state
- [ ] Test drift remediation
- [ ] Test invalid input
- [ ] Test failure conditions
- [ ] Test idempotency
- [ ] Test check mode

## Multi-Vendor Architecture

- [ ] Separate platform-specific behavior
- [ ] Normalize vendor output
- [ ] Create common result contracts
- [ ] Avoid unnecessary role dependencies
- [ ] Design reusable vendor abstractions where justified

---

# 22. Terraform

## Fundamentals

- [ ] Providers
- [ ] Resources
- [ ] Data sources
- [ ] Variables
- [ ] Outputs
- [ ] Locals

## Workflow

- [ ] `terraform init`
- [ ] `terraform fmt`
- [ ] `terraform validate`
- [ ] `terraform plan`
- [ ] `terraform apply`
- [ ] `terraform destroy`

## State

- [ ] Understand Terraform state
- [ ] Understand remote state
- [ ] Understand state locking
- [ ] Identify drift
- [ ] Understand state reconciliation
- [ ] Protect sensitive state

## Advanced Configuration

- [ ] `count`
- [ ] `for_each`
- [ ] Resource dependencies
- [ ] Resource graphs
- [ ] Modules
- [ ] Data sources
- [ ] Import existing resources

## Enterprise Workflow

- [ ] Review Terraform plans before deployment
- [ ] Store Terraform code in Git
- [ ] Execute validation through CI
- [ ] Protect production applies
- [ ] Manage state securely

---

# 23. Network Automation Architecture

## Tool Selection

- [ ] Determine when Python is appropriate
- [ ] Determine when Ansible is appropriate
- [ ] Determine when Terraform is appropriate
- [ ] Determine when NETCONF is appropriate
- [ ] Determine when RESTCONF is appropriate
- [ ] Determine when controller APIs are appropriate
- [ ] Determine when custom applications are appropriate

## Architecture Patterns

- [ ] Push-based automation
- [ ] Pull-based automation
- [ ] Event-driven automation
- [ ] Declarative automation
- [ ] Imperative automation
- [ ] Source-of-Truth-driven automation
- [ ] Controller-driven automation

## Desired-State Workflow

Understand:

`Source of Truth → Validate → Render → Deploy → Verify → Observe`

- [ ] Separate intent from implementation
- [ ] Separate configuration generation from deployment
- [ ] Separate validation from remediation
- [ ] Design safe failure behavior

---

# 24. Configuration Generation

- [ ] Generate configuration using Jinja2
- [ ] Generate vendor-specific configuration
- [ ] Build reusable templates
- [ ] Validate template inputs
- [ ] Render configurations offline
- [ ] Compare generated configuration with current state
- [ ] Generate configuration from Source of Truth data
- [ ] Test configuration templates

---

# 25. Configuration Backup and Restore

## Configuration Backups

- [ ] Retrieve running configuration
- [ ] Retrieve startup configuration
- [ ] Store backups securely
- [ ] Timestamp backups
- [ ] Associate backups with device identity
- [ ] Detect configuration changes
- [ ] Store configuration history in Git where appropriate

## Restore

- [ ] Restore known-good configuration
- [ ] Validate configuration before restore
- [ ] Verify state after restore
- [ ] Understand rollback strategies

## Change Comparison

- [ ] Generate configuration diffs
- [ ] Identify intended changes
- [ ] Identify unintended changes
- [ ] Review changes before deployment

---

# 26. Network Discovery and Inventory

- [ ] Discover network devices
- [ ] Gather device facts
- [ ] Gather hardware inventory
- [ ] Gather software versions
- [ ] Gather serial numbers
- [ ] Gather interfaces
- [ ] Gather IP addressing
- [ ] Gather VLANs
- [ ] Gather neighbors using LLDP/CDP
- [ ] Gather routing information
- [ ] Normalize discovered data
- [ ] Compare discovered state with Source of Truth
- [ ] Update inventory safely

---

# 27. Cisco Platform Automation

Develop the ability to work from API and SDK documentation for:

- [ ] Cisco IOS XE
- [ ] Cisco Catalyst Center
- [ ] Cisco ACI
- [ ] Cisco Meraki
- [ ] Cisco NSO
- [ ] Cisco Intersight
- [ ] Cisco FDM
- [ ] AppDynamics
- [ ] Webex

For each applicable platform:

- [ ] Authenticate
- [ ] Retrieve data
- [ ] Create resources
- [ ] Modify resources
- [ ] Delete resources safely
- [ ] Handle pagination
- [ ] Handle errors
- [ ] Integrate with Python automation

---

# 28. Cisco NSO

## Architecture

- [ ] NSO architecture
- [ ] NCS
- [ ] Devices
- [ ] NEDs
- [ ] Services
- [ ] Service models
- [ ] Templates

## Development

- [ ] Use `cisco-ios-cli` NED
- [ ] Create `python-and-template` services
- [ ] Create service templates
- [ ] Create YANG service models
- [ ] Implement service actions
- [ ] Validate operational status

## Operations

- [ ] Inspect NSO logs
- [ ] Diagnose service failures
- [ ] Understand service reconciliation

---

# 29. Network Testing with pyATS and Genie

## pyATS

- [ ] Create testbeds
- [ ] Connect to IOS
- [ ] Connect to IOS XE
- [ ] Connect to NX-OS
- [ ] Troubleshoot testbed connectivity

## Genie

- [ ] Use Genie parsers
- [ ] Convert CLI output into structured data
- [ ] Gather configuration state
- [ ] Gather operational state

## AEtest

- [ ] Build test cases
- [ ] Build setup sections
- [ ] Build test sections
- [ ] Build cleanup sections
- [ ] Execute test jobs
- [ ] Modify existing tests
- [ ] Troubleshoot failed tests

## Change Validation

- [ ] Pre-change validation
- [ ] Post-change validation
- [ ] Compare pre/post state
- [ ] Verify network health
- [ ] Fail automation when validation fails

---

# 30. Network Lab and Simulation

## Cisco Modeling Labs

- [ ] Build CML topologies
- [ ] Deploy IOS XE nodes
- [ ] Configure management connectivity
- [ ] Enable SSH
- [ ] Enable NETCONF
- [ ] Enable RESTCONF
- [ ] Connect Python automation
- [ ] Connect Ansible
- [ ] Connect pyATS

## Containerlab

- [ ] Understand Containerlab architecture
- [ ] Define topologies using YAML
- [ ] Deploy containerized network labs
- [ ] Destroy/rebuild labs
- [ ] Connect automation tooling
- [ ] Use labs in repeatable testing workflows

## Lab Automation

- [ ] Build reproducible lab environments
- [ ] Seed initial configurations
- [ ] Reset environments
- [ ] Create intentionally broken states
- [ ] Use labs for regression testing

---

# 31. CI/CD

## CI/CD Fundamentals

- [ ] Continuous Integration
- [ ] Continuous Delivery
- [ ] Continuous Deployment
- [ ] Pipelines
- [ ] Jobs
- [ ] Stages
- [ ] Runners
- [ ] Artifacts

## GitLab CI/CD

- [ ] Create `.gitlab-ci.yml`
- [ ] Configure runners
- [ ] Pass variables securely
- [ ] Store artifacts
- [ ] Configure pipeline dependencies

## GitHub Actions

- [ ] Understand GitHub Actions workflows
- [ ] Configure triggers
- [ ] Configure jobs
- [ ] Configure runners
- [ ] Configure secrets
- [ ] Run network automation validation

## Network Automation Pipeline

Implement:

`Lint → Test → Build → Prevalidate → Plan → Approve → Deploy → Post-validate`

- [ ] Lint code
- [ ] Validate YAML
- [ ] Run Python tests
- [ ] Validate Ansible
- [ ] Validate Terraform
- [ ] Build artifacts
- [ ] Perform pre-change validation
- [ ] Generate proposed changes
- [ ] Implement approval gates
- [ ] Deploy changes
- [ ] Perform post-change validation
- [ ] Fail safely when validation fails

---

# 32. Docker

## Fundamentals

- [ ] Containers vs VMs
- [ ] Images vs containers
- [ ] Image layers
- [ ] Registries
- [ ] Container lifecycle

## Dockerfiles

- [ ] Build Docker images
- [ ] Select base images
- [ ] `RUN`
- [ ] `COPY`
- [ ] `ADD`
- [ ] `WORKDIR`
- [ ] `ENV`
- [ ] `EXPOSE`
- [ ] `CMD`
- [ ] `ENTRYPOINT`
- [ ] `.dockerignore`
- [ ] Volumes

## Container Networking

- [ ] Bridge networking
- [ ] Container addressing
- [ ] Container DNS
- [ ] Port publishing
- [ ] External connectivity
- [ ] Troubleshoot container networking

## Production Practices

- [ ] Minimize image size
- [ ] Pin dependencies
- [ ] Avoid embedding secrets
- [ ] Run applications as non-root where practical
- [ ] Configure health checks
- [ ] Persist application data appropriately

---

# 33. Docker Compose

- [ ] Compose files
- [ ] Services
- [ ] Networks
- [ ] Volumes
- [ ] Environment variables
- [ ] Secrets
- [ ] Dependencies
- [ ] Health checks
- [ ] Deploy multi-container applications
- [ ] Troubleshoot multi-container applications

Build environments containing components such as:

`Automation App + PostgreSQL + Redis + Worker`

---

# 34. Kubernetes

## Architecture

- [ ] Clusters
- [ ] Control plane
- [ ] Worker nodes
- [ ] Pods

## Workloads

- [ ] Deployments
- [ ] ReplicaSets
- [ ] Services
- [ ] ConfigMaps
- [ ] Secrets
- [ ] Ingress
- [ ] Persistent volumes
- [ ] Namespaces

## Operations

- [ ] Deploy applications
- [ ] Inspect resources
- [ ] Inspect logs
- [ ] Scale workloads
- [ ] Perform rollouts
- [ ] Perform rollbacks
- [ ] Troubleshoot unhealthy pods

## Health

- [ ] Liveness probes
- [ ] Readiness probes
- [ ] Startup probes

## kubectl

- [ ] Deploy resources
- [ ] Inspect resources
- [ ] View logs
- [ ] Execute commands in pods
- [ ] Troubleshoot applications

---

# 35. Secrets Management

## Principles

- [ ] Never hard-code credentials
- [ ] Prevent secrets from entering Git
- [ ] Apply least privilege
- [ ] Understand secret rotation
- [ ] Understand secret lifecycle

## Platforms and Integration

- [ ] Environment-variable injection
- [ ] Ansible secret handling
- [ ] Terraform sensitive data
- [ ] Docker secrets
- [ ] Kubernetes secrets
- [ ] External secret-management architecture

## Enterprise Secret Managers

Understand integration patterns for platforms such as:

- [ ] HashiCorp Vault
- [ ] Delinea Secret Server
- [ ] CyberArk
- [ ] Cloud-native secret managers

## Automation Integration

- [ ] Retrieve credentials at runtime
- [ ] Avoid logging secrets
- [ ] Rotate credentials without code changes
- [ ] Implement machine-to-machine authentication

---

# 36. PKI, TLS, and Certificates

## Cryptography

- [ ] Symmetric encryption
- [ ] Asymmetric encryption
- [ ] Public/private keys
- [ ] Hashing
- [ ] Digital signatures

## PKI

- [ ] Certificates
- [ ] Certificate Authorities
- [ ] Certificate chains
- [ ] Trust stores
- [ ] TLS

## Certificate Lifecycle

- [ ] Generate private keys
- [ ] Create CSRs using OpenSSL
- [ ] Obtain CA-signed certificates
- [ ] Deploy certificates
- [ ] Configure TLS
- [ ] Validate certificates
- [ ] Troubleshoot trust failures
- [ ] Understand certificate expiration and renewal

---

# 37. Logging and Observability

## Logging

- [ ] Log levels
- [ ] Structured logging
- [ ] Centralized logging
- [ ] Syslog integration
- [ ] Webhook integration
- [ ] Correlation identifiers
- [ ] Secure logging

## Metrics

- [ ] Understand application metrics
- [ ] Understand infrastructure metrics
- [ ] Understand network metrics
- [ ] Build useful health indicators

## Observability

Understand the relationship between:

`Logs + Metrics + Traces + Network Telemetry`

- [ ] Diagnose automation from logs
- [ ] Correlate events across systems
- [ ] Detect failed automation
- [ ] Measure automation performance

---

# 38. Model-Driven Telemetry

## Architecture

- [ ] Understand model-driven telemetry
- [ ] Producers
- [ ] Collectors
- [ ] Storage
- [ ] Consumers

## Protocols

- [ ] gNMI
- [ ] gRPC
- [ ] NETCONF telemetry

## Subscriptions

- [ ] YANG-based telemetry paths
- [ ] Periodic subscriptions
- [ ] On-change subscriptions
- [ ] Event-driven subscriptions
- [ ] Dial-in
- [ ] Dial-out
- [ ] Secure telemetry streams

## Operations

- [ ] Verify telemetry transmission
- [ ] Optimize collection frequency
- [ ] Identify network issues
- [ ] Trigger automation from telemetry events

---

# 39. Event-Driven Automation

- [ ] Understand event-driven architecture
- [ ] Understand producers and consumers
- [ ] Webhooks
- [ ] Message queues
- [ ] Event buses
- [ ] Event filtering
- [ ] Trigger automation from events
- [ ] Prevent duplicate event processing
- [ ] Handle failed event processing
- [ ] Design safe event-driven remediation

Example:

`Telemetry/Event → Detection → Automation → Validation → Notification`

---

# 40. Enterprise Automation Services

## Configuration Management

- [ ] Configuration generation
- [ ] Configuration deployment
- [ ] Configuration validation
- [ ] Configuration backup
- [ ] Configuration restore
- [ ] Configuration compliance
- [ ] Configuration drift detection

## Provisioning

- [ ] Device onboarding
- [ ] Interface provisioning
- [ ] VLAN provisioning
- [ ] Routing provisioning
- [ ] ACL provisioning
- [ ] Network-service provisioning

## Lifecycle Management

- [ ] OS/version inventory
- [ ] Firmware/software upgrades
- [ ] Pre-upgrade validation
- [ ] Post-upgrade validation
- [ ] Device replacement workflows
- [ ] Decommissioning workflows

## Compliance

- [ ] Define configuration standards
- [ ] Detect non-compliance
- [ ] Generate compliance reports
- [ ] Remediate configuration drift
- [ ] Preserve audit evidence

---

# 41. Network Automation APIs and Services

Build automation as reusable internal services rather than only standalone scripts.

## Service Architecture

- [ ] Expose automation through REST APIs
- [ ] Separate API layer from automation logic
- [ ] Separate business logic from device drivers
- [ ] Implement authentication
- [ ] Implement authorization
- [ ] Implement input validation
- [ ] Implement job status
- [ ] Implement structured results

## Long-Running Automation

- [ ] Understand synchronous vs asynchronous jobs
- [ ] Understand background workers
- [ ] Understand task queues
- [ ] Track job state
- [ ] Handle retries
- [ ] Handle failed jobs
- [ ] Prevent duplicate execution

---

# 42. Self-Service Network Automation

Understand the architecture:

`User → Portal/API → Validation → Approval → Automation → Network → Verification`

- [ ] Build self-service workflows
- [ ] Define safe user inputs
- [ ] Validate requests
- [ ] Implement RBAC
- [ ] Implement approval workflows
- [ ] Execute automation
- [ ] Return job status
- [ ] Return validation results
- [ ] Maintain audit history

Potential interfaces:

- [ ] Web application
- [ ] Internal API
- [ ] CLI
- [ ] ChatOps
- [ ] ITSM integration

---

# 43. Software and Automation Architecture

## Deployment Models

- [ ] On-premises
- [ ] Hybrid
- [ ] Public cloud

## Maintainability

- [ ] Modular architecture
- [ ] Clear component boundaries
- [ ] Reusable libraries
- [ ] Dependency management
- [ ] Upgrade planning

## Reliability

- [ ] High availability
- [ ] Resiliency
- [ ] Failure domains
- [ ] Graceful degradation
- [ ] Retry strategies

## Performance

- [ ] Scalability
- [ ] Latency
- [ ] API rate limiting
- [ ] Database performance
- [ ] CPU utilization
- [ ] Memory utilization

---

# 44. Secure Software Development

## Input Security

- [ ] Validate input
- [ ] Validate data types
- [ ] Validate ranges
- [ ] Validate allowed values
- [ ] Reject malformed input

## Authentication and Authorization

- [ ] Authentication
- [ ] Authorization
- [ ] RBAC
- [ ] Least privilege

## Secure Coding

- [ ] Apply OWASP practices
- [ ] Secure error handling
- [ ] Secure logging
- [ ] Protect sensitive data
- [ ] Protect communications
- [ ] Dependency vulnerability awareness

## Supply Chain Security

- [ ] Pin dependencies
- [ ] Review third-party dependencies
- [ ] Scan container images
- [ ] Protect CI/CD credentials
- [ ] Understand software supply-chain risk

---

# 45. AI-Assisted Network Automation

## LLM Fundamentals

- [ ] Large Language Models
- [ ] Prompts
- [ ] Context
- [ ] Tokens
- [ ] Context windows
- [ ] Inference
- [ ] Hallucinations

## AI-Assisted Development

- [ ] Generate code
- [ ] Review generated code
- [ ] Generate tests
- [ ] Generate documentation
- [ ] Troubleshoot using AI
- [ ] Validate AI recommendations

## AI Security

- [ ] Prompt injection
- [ ] Sensitive-data exposure
- [ ] Excessive tool permissions
- [ ] Untrusted model output
- [ ] Protect network credentials
- [ ] Protect network topology data
- [ ] Restrict write operations
- [ ] Human approval for sensitive operations

---

# 46. Model Context Protocol

## MCP Architecture

- [ ] MCP clients
- [ ] MCP servers
- [ ] MCP tools
- [ ] MCP resources
- [ ] MCP prompts
- [ ] Tool schemas

## FastMCP

- [ ] Build MCP servers using Python FastMCP
- [ ] Expose network information through MCP
- [ ] Validate tool input
- [ ] Handle tool errors
- [ ] Implement logging
- [ ] Secure MCP access

## Network Tools

Build MCP tools capable of:

- [ ] Retrieve devices
- [ ] Retrieve interfaces
- [ ] Retrieve VLANs
- [ ] Retrieve neighbors
- [ ] Retrieve routes
- [ ] Retrieve network health
- [ ] Query Source of Truth data
- [ ] Query automation job status

---

# 47. Agentic Network Automation

Understand:

`User → LLM → Agent → Tools → Automation Platform → Network`

- [ ] Build conversational network automation agents
- [ ] Implement structured tool calls
- [ ] Manage context
- [ ] Validate agent requests
- [ ] Validate agent output
- [ ] Implement guardrails
- [ ] Separate read and write tools
- [ ] Require approval for sensitive operations
- [ ] Handle tool failures
- [ ] Verify network changes after execution

---

# 48. End-to-End Network Automation Platform

The final objective is to combine the individual technologies into a production-style automation platform.

## Reference Architecture

`User / Engineer`
↓
`Portal / CLI / API / AI Agent`
↓
`Authentication + Authorization`
↓
`Automation API`
↓
`Source of Truth`
↓
`Validation`
↓
`Automation Engine`
↓
`Network`
↓
`Post-Change Validation`
↓
`Telemetry / Logging`
↓
`Audit / Results`

## Source of Truth

- [ ] NetBox or Infrahub
- [ ] Define authoritative network data
- [ ] Model intended state
- [ ] Retrieve data programmatically
- [ ] Detect drift

## Automation

- [ ] Python
- [ ] Ansible collections
- [ ] Terraform
- [ ] NETCONF
- [ ] RESTCONF
- [ ] Controller APIs

## Testing

- [ ] pytest
- [ ] pyATS
- [ ] Genie
- [ ] Pre-change validation
- [ ] Post-change validation
- [ ] Regression testing

## Development

- [ ] Git
- [ ] Feature branches
- [ ] Code review
- [ ] Rebase
- [ ] Squash
- [ ] Fast-forward merge
- [ ] Versioning
- [ ] Releases

## CI/CD

Implement:

`Lint → Test → Build → Prevalidate → Plan → Approve → Deploy → Verify`

- [ ] Automated linting
- [ ] Automated testing
- [ ] Artifact generation
- [ ] Pre-change validation
- [ ] Change preview
- [ ] Approval gates
- [ ] Deployment
- [ ] Post-change validation
- [ ] Failure handling

## Runtime

- [ ] Docker development environment
- [ ] Production container images
- [ ] Docker Compose
- [ ] Kubernetes where appropriate
- [ ] External secret management
- [ ] TLS
- [ ] Centralized logging
- [ ] Monitoring

## Network Operations

- [ ] Inventory discovery
- [ ] Configuration management
- [ ] Configuration backups
- [ ] Configuration compliance
- [ ] VLAN management
- [ ] Interface management
- [ ] Routing management
- [ ] ACL management
- [ ] NTP management
- [ ] Firmware/software lifecycle
- [ ] Device onboarding
- [ ] Device decommissioning

## Observability

- [ ] Application logs
- [ ] Automation logs
- [ ] Metrics
- [ ] Model-driven telemetry
- [ ] Network health validation
- [ ] Audit history

## AI Integration

- [ ] MCP server
- [ ] Read-only network tools
- [ ] Source of Truth tools
- [ ] LLM agent
- [ ] Recommendation validation
- [ ] Controlled write operations
- [ ] Human approval
- [ ] Post-change verification

---

# 49. Engineering Capability

My target competency is the ability to take an unfamiliar network automation requirement and independently work through the complete engineering lifecycle:

`Requirements → Design → Develop → Test → Deploy → Verify → Troubleshoot → Operate`

This means I can:

- [ ] Understand the underlying network technology
- [ ] Translate business requirements into technical requirements
- [ ] Design an appropriate automation architecture
- [ ] Select appropriate automation technologies
- [ ] Work from unfamiliar technical documentation
- [ ] Model infrastructure data
- [ ] Establish authoritative Sources of Truth
- [ ] Develop automation software
- [ ] Develop reusable Ansible collections
- [ ] Develop Infrastructure as Code
- [ ] Integrate vendor APIs
- [ ] Implement model-driven network automation
- [ ] Validate external input
- [ ] Protect credentials and secrets
- [ ] Test automation before deployment
- [ ] Perform automated pre-change validation
- [ ] Preview proposed changes
- [ ] Deploy network changes safely
- [ ] Perform automated post-change validation
- [ ] Detect configuration drift
- [ ] Detect incorrect operational state
- [ ] Diagnose failures using logs and operational data
- [ ] Recover from failed changes
- [ ] Verify final network state
- [ ] Maintain software using professional Git workflows
- [ ] Build and maintain CI/CD pipelines
- [ ] Build reproducible development environments
- [ ] Package applications using containers
- [ ] Operate containerized automation services
- [ ] Implement monitoring and telemetry
- [ ] Build self-service automation
- [ ] Maintain auditability
- [ ] Explain architectural tradeoffs
- [ ] Integrate AI safely into network automation workflows

---

# References

This roadmap incorporates objectives from:

- Cisco 350-901 AUTOCOR
- Cisco CCIE Automation Practical

It extends beyond certification objectives with practical technologies and engineering practices used in enterprise and data-center network automation, including:

- NetBox
- Infrahub
- Production Ansible collections
- Advanced Git workflows
- Python testing and code quality
- Development containers
- Configuration backup and restoration
- Network discovery
- Data normalization
- Secrets-management platforms
- Containerlab
- GitHub Actions
- Event-driven automation
- Self-service automation
- Automation API/service architecture
- Production CI/CD patterns
- Enterprise observability
- Software supply-chain security