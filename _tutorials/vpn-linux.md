---
layout: tutorial
title: "Connecting to the university VPN on Linux"
date: 2025-10-21
author:
    name: "Ravi Mistry"
abstract: "Learn how to connect to the university VPN without installing the proprietary app."
---
The usual instructions for connecting to the university VPN on Linux make you install a proprietary app. In this unofficial tutorial, you'll learn how to connect to the university VPN using open-source software that integrates with the rest of your system.

**WARNING: THIS UNOFFICIAL METHOD IS NOT SUPPORTED BY THE UNIVERSITY, USE AT YOUR OWN RISK**

## Prerequisites
- Linux system using NetworkManager
- OpenConnect (available in most distro repos, e.g. `openconnect` in Fedora and Arch)
- University VPN gateway URL. On the [IT Services SharePoint](https://uob.sharepoint.com/sites/itservices/SitePages/vpn-connect.aspx), it's the URL to *initiate a connection* via F5 Access, excluding the `https://`. From now we will refer to it as `$GATEWAY`.

## Step 0: Obtaining the cookie
You need your cookie to connect to the VPN. This cookie eventually expires, so you'll need to repeat this step each time it does in order to continue using the VPN.

Navigate to `$GATEWAY`. You may need to login with SSO.

In the dev console, run the following to get your cookie.
```javascript
document.cookie.match(/MRHSession=(.*?); /)[1]
```

For the rest of this guide, we refer to the output as `$COOKIE`.


## Step 1: Connecting to the VPN
There are 2 ways to connect to the VPN:
- Using OpenConnect manually is quicker but does not integrate well with the system.
- Using the OpenConnect plugin for NetworkManager is slightly more setup, but lets the university VPN appear with your other connections and VPNs in desktop environments like KDE Plasma and Gnome.

### Option 1: Manual OpenConnect [NOT RECOMMENDED]

Open a terminal and run the following, replacing `$COOKIE` with  your session cookie from step 0:
```bash
echo MRHSession=$COOKIE | sudo openconnect --protocol=f5 --cookie-on-stdin $GATEWAY
```

You should now be connected to the VPN. To end the VPN session, Ctrl+C out of openconnect

Note that there will not be a visual sign of your connection state in your desktop environment: for that, follow Option 2.

#### IMPORTANT: UPDATING THE COOKIE
The VPN will eventually stop working when your cookie expires. Obtain a new cookie following Step 0, then repeat the steps above.

### Option 2: OpenConnect plugin for NetworkManager

Install the plugin. The package is `NetworkManager-openconnect` in Fedora and `networkmanager-openconnect` in Arch.

Use a secrets manager that supports the org.freedesktop.secrets Secret Service API, e.g. KWallet, Gnome Keyring. This is not strictly necessary, but doing so prevents your VPN secrets being stored in plaintext.

Open a terminal and run the following, replacing `$COOKIE` with your session cookie from Step 0:
```bash
nmcli connection add connection.id BristolUniversityVPN connection.type vpn vpn.service-type openconnect vpn.data username-flags=4,password-flags=4,cookie-flags=1,gateway=$GATEWAY,protocol=f5 vpn.secrets gwcert=,gateway=$GATEWAY,cookie=$COOKIE
```
Explanation:
- Create a new OpenConnect VPN connection called `BristolUniversityVPN`.
- Do not ask for username/password: `username-flags=4,password-flags=4`. We will use a cookie instead.
- Get the cookie from the Secrets Service: `cookie-flags=1`. If you aren't using a secrets service, you'll need to modify this value accordingly. See the [nmcli docs](https://networkmanager.dev/docs/api/latest/nm-settings-nmcli.html#secrets-flags).
- Specify the gateway and protocol.
- Provide the cookie: `cookie=$COOKIE`.
- Specify the gateway certificate: `gwcert=`. We shouldn't have to specify a certificate because it's signed by a CA your system most likely trusts already. However, we still include this flag (but leave it empty) as it's needed for the plugin to work.

Connect to the VPN
```bash
nmcli connection up BristolUniversityVPN --ask
```
You should now be able to connect and disconnect to the VPN through the your desktop environment.

![Connect to the VPN via KDE Plasma](/assets/images/contrib/tutorials/vpn-linux/plasma-nm.png)

#### IMPORTANT: UPDATING THE COOKIE
The VPN will eventually stop working when your cookie expires. Obtain a new cookie following Step 0, then run the following:
```bash
nmcli connection modify BristolUniversityVPN vpn.secrets gwcert=,gateway=$GATEWAY,cookie=$COOKIE
```

## Resources
- [Michigan Technological University Service Desk](https://servicedesk.mtu.edu/TDClient/1801/Portal/KB/ArticleDet?ID=51485)
- [OpenConnect on the ArchWiki](https://wiki.archlinux.org/title/OpenConnect)
