---
layout: tutorial
title:  "SSH and Snowy"
date:   2016-05-19 20:42:09 +0100
author: "Ross Gardiner"
---
You are likely to find at some point that you need to work on a department system remotely. In this tutorial, we'll explore connecting to Snowy, the departmental server.

If you're familiar with SSH, here are the details you need:

* Server: `snowy.cs.bris.ac.uk`
* Username: your university username, e.g. `ab12345`
* Password: your university password

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

* [Ubuntu on Windows (Beta)](https://msdn.microsoft.com/en-us/commandline/wsl/about?f=255&MSPPError=-2147217396) - an official Microsoft project that lets you run Linux binaries natively on Windows.
* [MSYS2](https://msys2.github.io/)
* [Babun](http://babun.github.io/)
* [Cygwin](https://www.cygwin.com/)

Figuring out how to get one of these to work is a good exercise for any first year CS student.

# Getting a graphical environment

Snowy (like most current Linux systems) supports a feature called X Forwarding. This lets you run graphical applications remotely but use them as if they were running natively(-ish) on your desktop.

## Mac/Linux

To enable X Forwarding, add the `-X` option when running OpenSSH:

```
ssh ab12345@snowy.cs.bris.ac.uk -X
```

Once logged in, you will be able to launch utilities like `nautilus` (the GNOME file manager) and `gedit` (the GNOME text editor).

## Windows

Windows does not support X11, so cannot display forwarded applications natively. However, you can install third-party software that allows graphical remote desktop. One possible solution is the [NoMachine client](https://www.nomachine.com/download).

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
