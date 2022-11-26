---
layout: tutorial
published: true
title:  "SSH and Snowy"
date:   2016-05-19 20:42:09 +0100
author:
    name: "Ross Gardiner"
abstract: "You are likely to find at some point that you need to work on a department system remotely. In this tutorial, we'll explore connecting to Snowy, the departmental server."
---
You are likely to find at some point that you need to work on a department system remotely. In this tutorial, we'll explore connecting to Snowy, the departmental server.

If you're familiar with SSH, here are the details you need:

**Snowy SSH details**

* Server: `snowy.cs.bris.ac.uk`
* Username: your university username, e.g. `ab12345`
* Password: your university password

**SSH into lab machines**

All the lab machines in MVB 2.11 are available when using snowy as
a jump box, this involves first connecting to snowy then to the lab machine in
a chain like fashion making use of SSH's `ProxyCommand`. This step can be
skipped if you are using the university VPN.

Lab machine addresses: `it<ID>.wks.bris.ac.uk` where ID is in the following range:

* `it075638.wks.bris.ac.uk` -- `it075906.wks.bris.ac.uk`

# SSH

## Mac/Linux

Open a Terminal/Console window, and type the following command:

```
ssh ab12345@snowy.cs.bris.ac.uk
```

(where `ab12345` is replaced by your username)

Hit return, and wait for the password prompt. Type in your password and press return again. You are now logged in.

## Windows

[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) is the easiest solution for SSH on Windows. You can either download the installer (`putty-*.**-installer.msi`) or `putty.exe`, which will run standalone.

Open PuTTY, and enter `snowy.cs.bris.ac.uk` in the 'Host Name (or IP address)' field. Make sure the 'Port' is set to 22. Click 'Open'. If you are asked to trust a signature, click yes. You will be greeted by a prompt that says:

```
login as:
```

Type your university username and press return. Then type your password and press return.

### From a terminal

You will probably end up working in a terminal a lot of the time, even on Windows. Unfortunately, the set of text-based utilities that comes with Windows is rather lacking. Several efforts exist to make these available on Windows:

* [Bash on Windows on Ubuntu](https://msdn.microsoft.com/en-us/commandline/wsl/about?f=255&MSPPError=-2147217396) - an official Microsoft project that lets you run Linux binaries natively on Windows.
* [MSYS2](https://msys2.github.io/)
* [Babun](http://babun.github.io/)
* [Cygwin](https://www.cygwin.com/)

Figuring out how to get one of these to work is a good exercise for any first year CS student.

# Getting a graphical environment

Snowy (like most current Linux systems) supports a feature called X Forwarding. This lets you run graphical applications remotely but use them as if they were running natively(-ish) on your desktop.

## Mac/Linux

To enable X Forwarding, add the `-X` flag when running OpenSSH:

```
ssh ab12345@snowy.cs.bris.ac.uk -X
```

Once logged in, you will be able to launch utilities like `nautilus` (the GNOME file manager) and `gedit` (the GNOME text editor).

## Windows

Windows requires additional steps for X Forwading. Firstly, you need to install [Ximg](https://sourceforge.net/projects/xming/), this allows graphical interface on server to be displayed. If you are using putty, all you should have to do tick the Enable X11 forewarding box under Connections\SSH\X11 in your putty connection.
As for Bash on Windows on Ubuntu, Cygwin... etc, you need to add `-X`  flag when running OpenSSH like in Mac/Linux:

```
ssh ab12345@snowy.cs.bris.ac.uk -X
```

# Remote Desktop (NoMachine)

If you would like to access lab machines or university softwares at home, then SSH with X11 forwarding might not be a good option. This is because X11
forwarding does not compress data, so the graphical interface will be very slow.  [NoMachine client](https://www.nomachine.com/download) allows graphical remote desktop with less lag. The server snowy can be accessed with NoMachine, if you desire to use a lab machine, you can still SSH into them using snowy with or without X11 forwarding.

# Copying files with scp

## Mac/Linux

To copy from your computer to Snowy:

```
scp sourcefile ab12345@snowy.cs.bris.ac.uk:targetfile
```

For example, `scp ~/main.c ab12345@snowy.cs.bris.ac.uk:~/main.c`.

To copy from Snowy to your computer:

```
scp ab12345@snowy.cs.bris.ac.uk:sourcefile targetfile
```

For example, `scp ab12345@snowy.cs.bris.ac.uk:~/main.c ~/main.c`

## Windows

On Windows, the easiest graphical method to transfer files is to use SFTP. There are many SFTP clients available. [FileZilla](https://filezilla-project.org/) is free and works nicely. Use the following settings:

* Host: `snowy.cs.bris.ac.uk`
* Username: university username
* Password: university password
* Port: `22`

### In a terminal

If you want to do this from the terminal, PuTTY comes with a utility called `psftp`. Alternatively, if you have something like cygwin installed, you probably have access to `scp` already.

# Passwordless login

If you get tired of having to enter your password every time you connect to Snowy, don't worry! You can create an SSH keypair to verify your identity automatically: Snowy has a copy of your public key, and anyone with access to your private key (i.e. only you) can use it to automatically authenticate.

## Mac/Linux

Open a terminal and enter the following:

```
ssh-keygen -t rsa
```

The tool will walk you through the process of creating a key. By default, the keypair is saved to the `.ssh` directory in your home directory - for example `/home/myname/.ssh/`. The private key is normally called `id_rsa`, the public key `id_rsa.pub` - though you can change these if you want. You will be asked to provide a passphrase. This protects your key from viruses, theft etc., so choose something strong.

Once your key is generated, create the `.ssh` folder on Snowy:

```
ssh ab12345@snowy.cs.bris.ac.uk 'mkdir -p .ssh'
```

Then append your public key to the list of authorised keys:

```
cat ~/.ssh/id_rsa.pub | ssh ab12345@snowy.cs.bris.ac.uk 'cat >> .ssh/authorized_keys'
```

## Windows

PuTTY comes with a tool called PuTTYgen for creating new SSH keys. If you have something like cygwin installed, `ssh-keygen` is probably available in your shell.

You can copy the public key across using FileZilla, as described above.

## Example SSH config

An example SSH config is given below:

```
# ~/.ssh/config

Host *
    ForwardAgent yes
    ForwardX11 yes
    ForwardX11Trusted yes

#######################################
#         University machines         #
#######################################
# University of Bristol machines
# See http://www.bristol.ac.uk/it-services/locations/zones/zonee/cosc/remote-access

Host snowy
    Hostname snowy.cs.bris.ac.uk
    Port 22
    User <USERNAME>
    IdentityFile ~/.ssh/id_rsa
    ForwardX11 no
    ForwardX11Trusted no

# To use only for Cadence tools
Host frosty
    Hostname frosty.fen.bris.ac.uk
    Port 22
    User <USERNAME>
    IdentityFile ~/.ssh/id_rsa
    ProxyCommand ssh snowy nc %h %p 2> /dev/null

# CS lab machines live on the follow ranges
#
#   - 075638--075906
#

Host cs-desktop-01
    HostName it075638.users.bris.ac.uk
    User <USERNAME>
    ProxyCommand ssh snowy nc %h %p 2> /dev/null

Host cs-desktop-02
    HostName it075639.users.bris.ac.uk
    User <USERNAME>
    ProxyCommand ssh snowy nc %h %p 2> /dev/null

Host cs-desktop-03
    HostName it075640.users.bris.ac.uk
    User <USERNAME>
    ProxyCommand ssh snowy nc %h %p 2> /dev/null
```

## Resources

* [IT Services: Remote Access](http://www.bristol.ac.uk/it-services/locations/zones/zonee/cosc/remote-access)
