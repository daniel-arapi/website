---
title: NTP
description: What NTP is, why it's needed, and how to implement it on Cisco IOS-XE and NX-OS.
---

## What is NTP?

NTP synchronizes the clocks of devices across a network to a common, accurate time source. It's a hierarchical protocol: each server has a **stratum** number indicating its distance from an authoritative reference clock (stratum 0 — typically a GPS or atomic clock). Stratum 1 servers are directly connected to a stratum 0 source; stratum 2 servers sync from stratum 1; and so on, up to stratum 15 (stratum 16 means "unsynchronized").

NTP runs over UDP port 123. A client periodically exchanges timestamped packets with one or more servers, calculates round-trip delay and offset, and gradually disciplines (slews) its local clock rather than jumping it abruptly — avoiding the problems large, sudden time jumps cause for logging, cryptography, and applications.

## Why NTP is needed

- **Accurate logging and troubleshooting** — Syslog, SNMP traps, and debug output are only useful for correlating events across devices if all devices agree on the time. A five-minute clock skew between a firewall and a switch can make root-cause analysis nearly impossible.
- **Certificate and cryptographic validity** — TLS certificates, Kerberos tickets, and 802.1X/EAP exchanges all depend on accurate time; a clock too far off can cause certificate validation failures or authentication rejections.
- **Security and auditing** — Compliance frameworks (PCI-DSS, SOC 2, etc.) commonly require synchronized time across infrastructure so audit trails are trustworthy and legally defensible.
- **Distributed system correctness** — Routing protocol timers, HA/failover state, database replication, and scheduled jobs across clustered systems can misbehave or race if clocks drift apart.
- **Coordinated maintenance and change control** — Timestamps in change logs, backups, and monitoring dashboards need to line up with real-world wall-clock time for operators to trust them.

## NTP modes

- **Client/Server** — A device (client) polls one or more time servers and adjusts its clock accordingly. Most common mode for end devices and most network gear.
- **Peer (symmetric active/passive)** — Two devices treat each other as peers and can sync in either direction; used between redundant time sources at the same stratum.
- **Broadcast/Multicast** — A server sends time updates to a broadcast/multicast address without per-client polling; less precise, rarely used on modern networks.
- **NTP Authentication** — MD5 or SHA-based key authentication (and newer NTS — Network Time Security — on some platforms) prevents a rogue device from injecting false time updates.

## Design recommendations

- Configure **at least 3–4 NTP servers** so the device can detect and discard a falseticker (a server whose time disagrees with the majority) using NTP's built-in selection algorithm — with only 2 sources, a disagreement can't be resolved.
- Use a dedicated internal stratum 1/2 time source (or a small number of reliable external pools, e.g., `pool.ntp.org` or vendor/regional NTP pools) rather than pointing every device at the public internet directly.
- Enable **NTP authentication** in production environments to prevent spoofed time sources.
- Bind NTP traffic to a management/loopback interface where possible for consistent sourcing and easier ACL/firewall rules.
- Monitor NTP sync status as part of standard health checks — an unsynchronized clock is a silent failure that only surfaces during an incident.

## Implementing NTP on Cisco IOS-XE

### Basic client configuration

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><span style="color:var(--sl-color-green);">! Configure NTP servers (prefer marks the primary source)</span>
<strong>ntp server</strong> <em>192.0.2.1</em> <strong>prefer</strong>
<strong>ntp server</strong> <em>192.0.2.2</em>

<span style="color:var(--sl-color-green);">! Source NTP requests from a loopback for consistent sourcing</span>
<strong>ntp source</strong> <em>Loopback0</em>

<span style="color:var(--sl-color-green);">! Set the device's timezone and daylight saving rules</span>
<strong>clock timezone</strong> <em>EST -5</em>
<strong>clock summer-time</strong> <em>EDT</em> <strong>recurring</strong>

<span style="color:var(--sl-color-green);">! Optional: log NTP sync events</span>
<strong>service timestamps log datetime msec localtime show-timezone</strong></code></pre>

### NTP authentication (recommended)

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><strong>ntp authenticate</strong>
<strong>ntp authentication-key</strong> <em>1</em> <strong>md5</strong> <em>MyStrongKey123</em>
<strong>ntp trusted-key</strong> <em>1</em>
<strong>ntp server</strong> <em>192.0.2.1</em> <strong>key</strong> <em>1</em> <strong>prefer</strong></code></pre>

### Acting as an NTP server for downstream devices

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><strong>ntp master</strong> <em>3</em>
<span style="color:var(--sl-color-green);">! or, more commonly, just let the device relay its synced time:</span>
<strong>ntp server</strong> <em>192.0.2.1</em></code></pre>

### Verification (IOS-XE)

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><strong>show ntp status</strong>
<strong>show ntp associations</strong>
<strong>show ntp associations detail</strong>
<strong>show clock detail</strong></code></pre>

`show ntp associations` — look for a `*` next to the peer, which marks it as the currently selected synchronization source; `+` indicates a candidate, and a blank/`~` indicates unreachable or not configured for synchronization.

## Implementing NTP on Cisco NX-OS

NX-OS syntax is similar but uses `feature ntp` in some releases/platforms and slightly different keywords.

### Basic client configuration

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><span style="color:var(--sl-color-green);">! Some platforms require enabling the feature first</span>
<strong>feature ntp</strong>

<span style="color:var(--sl-color-green);">! Configure NTP servers</span>
<strong>ntp server</strong> <em>192.0.2.1</em> <strong>prefer use-vrf</strong> <em>management</em>
<strong>ntp server</strong> <em>192.0.2.2</em> <strong>use-vrf</strong> <em>management</em>

<span style="color:var(--sl-color-green);">! Source interface for NTP requests</span>
<strong>ntp source-interface</strong> <em>mgmt0</em>

<span style="color:var(--sl-color-green);">! Timezone</span>
<strong>clock timezone</strong> <em>EST -5 0</em>
<strong>clock summer-time</strong> <em>EDT 2 Sunday March 02:00 1 Sunday November 02:00 60</em></code></pre>

Note the `use-vrf` keyword — on Nexus switches, NTP servers are frequently reached out of the `management` VRF via the `mgmt0` interface, so the VRF must be specified explicitly or NTP traffic won't route correctly.

### NTP authentication

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><strong>ntp authenticate</strong>
<strong>ntp authentication-key</strong> <em>1</em> <strong>md5</strong> <em>MyStrongKey123</em>
<strong>ntp trusted-key</strong> <em>1</em>
<strong>ntp server</strong> <em>192.0.2.1</em> <strong>key</strong> <em>1</em> <strong>prefer use-vrf</strong> <em>management</em></code></pre>

### Acting as an NTP server / distribution

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><strong>ntp master</strong> <em>3</em>
<strong>ntp peer</strong> <em>192.0.2.3</em> <strong>use-vrf</strong> <em>default</em></code></pre>

### Verification (NX-OS)

<pre style="background:var(--sl-color-gray-6);color:var(--sl-color-white);border:1px solid var(--sl-color-hairline);padding:0.75rem 1rem;border-radius:0.375rem;overflow-x:auto;line-height:1.7;font-size:0.85em;"><code><strong>show ntp peer-status</strong>
<strong>show ntp peers</strong>
<strong>show clock</strong>
<strong>show running-config ntp</strong></code></pre>

`show ntp peer-status` — the `sys.peer` column marks the currently selected reference; `st` shows the stratum of each peer.

## Common pitfalls

- **VRF mismatch (NX-OS)** — Forgetting `use-vrf management` when the NTP server is only reachable via the mgmt interface is the most common reason NX-OS never syncs.
- **ACL/firewall blocking UDP/123** — NTP traffic must be explicitly permitted in both directions between client and server.
- **Timezone vs. UTC confusion** — NTP itself always operates in UTC internally; local timezone/DST config only affects how time is *displayed* (`show clock`), not what's exchanged over the wire.
- **Too few servers** — With only one or two configured sources, the device can't algorithmically reject a bad time source, so an upstream server issue directly corrupts the client's clock.
- **Large initial clock offset** — If the local clock is off by more than the platform's configured step threshold, NTP may refuse to slew and require a manual `clock set` (IOS-XE) or a restart of the NTP process to force an initial step.
