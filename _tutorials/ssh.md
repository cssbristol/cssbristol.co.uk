---
layout: tutorial
published: true
title: Working remotely with SSH
date: 2020-03-17 12:00:00 +0000
author:
    name: Daniel Jones
abstract: At some point you will need to access the university PCs remotely - probably because you're sipping a cold one in the Bahamas. In this tutorial we'll look at connecting to the lab machines securely and how to do work remotely.
---
## Preface
These instructions are designed to work on the following systems:
- Linux
- MacOS
- Linux subsystem for Windows

For Widows users who do not wish to use Linux subsystem for Windows please see the old tutorial [SSH and Snowy](https://cssbristol.co.uk/tutorials/ssh-into-snowy/)

## Setting up
We're going to set up a nice environment for us to SSH into each lab machine with relatively little head ache

To do this we:
- Generate a SSH key pair
- Upload the public key to the university systems
- Set up a configuration file to make our lives easier

### Generate SSH key pair
At the time of writing, only *RSA keys* are supported.

We're going to generate a SSH key pair purely for logging into the lab.

First check if you have a .ssh directory. If not run the following command to create one with appropriate permissions:
```
mkdir -m 700 $HOME/.ssh
```

To generate the SSH key run the following command in your terminal:
```
ssh-keygen -t RSA -f $HOME/.ssh/lab-machines
```
You will be asked if you want to set a passphrase. This is used to 'unlock' the key to be used.
It is recommended to set a passphrase as this will prevent unknown use of the key by others.

### Uploading the public key to the university systems
Now that you've generated a SSH key it must be uploaded to the university's system.

To do this run the following command but replacing username with your Bristol username.

You'll be asked for your password which is the password used to log into the lab machines
```
ssh-copy-id -i $HOME/.ssh/lab-machines username@snowy.cs.bris.ac.uk
```

### Set up a nice configuration
SSH allows us to create a configuration file which allows us to specify how to connect to each host.

As well as this we can set alias such as lab1 to mean connect to it075638.wks.bris.ac.uk

To make this easier, I've created a script to automatically append the 200+ machines to your configuration

This is done by running the following command:
```
sh -c "$(curl -fsSL https://cssbristol.co.uk/assets/files/tutorials/ssh/setup.sh)"
```
When asked for your username this is your university username e.g. ab12345

When asked for the key file this is the path given in the e.g. *unless* you changed the path in the previous steps

## SSH into a machine
Now that you've set the above configuration you can SSH into many machines which include:
- snowy  (SSH jump server)
- icy    (staff SSH jump server)
- frosty (server for running Cadence tools)
- lab0 to lab275

To work on a lab 175 run the following command:
```
ssh lab175
```
You can do this for each of lab machines or go to one of the aforementioned servers with `ssh <name>`

### Checking logged in users
When SSH-ing to a lab machine its important to be courteous to your peers and check that no one is using the machine before using it.

To check who's logged onto a machine by running:
```
w
```

If someone is logged in (and it's not your own username) then please logout and use a different box.

## Mount your university files to your computer
You can actually mount all your university home directory to your computer and then use any program on your PC to edit them.

This requires installing sshfs then creating a folder such as `university-files`

Then finally run `sshfs snowy: university-files`

You can now access your university files remotely and any changes in this folder will actually be saved on the university servers!! 😮 

## Copying files
To copy a file from your computer to the university do:
```
scp sourcefile snowy:target
```

To copy from the university to your computer do:
```
scp snowy:source target
```

If you wish to copy a folder add the recursive flag `-r`

## Working remote with GUIs
If you're using the configuration file above then X window forwarding is enabled for any lab machine.
Simply execute the graphical program and it'll be forwarded to your system.
It's important to note that X forwarding is very slow so it is advisable to either work in the terminal or mount the uni file system.

For example to view a pdf on the lab machine with:
```
xdg-open test.pdf
```
Pro tip: `xdg-open` is the terminal equivalent of double clicking a file!

## Resources
[It services remote tutorial](https://www.bristol.ac.uk/it-services/locations/fits/engineering/linux/remote-access)
