#!/bin/sh
# SSH setup script
# Author: Daniel Jones hello@danjones.dev 2019/20 webmaster
# Appends lab machine ssh configuration to the existing ssh configuration (if exists)

if [ ! -d "$HOME/.ssh" ]; then
    mkdir -m 700 "$HOME/.ssh"
fi
read -p "What is your university username? " user

echo "Where is your SSH private key for the lab machines?"
echo "E.g. $HOME/.ssh/lab-machines"
read -p "Keyfile: " keyfile

if [ ! -e "$keyfile" ]; then
    >&2 echo "Error: file does not exists... Aborting with no changes to system configuration"
    exit 1
fi

# Escape keyfile path for sed from https://stackoverflow.com/a/2705678
keyfile=$(echo $keyfile | sed -e 's/[\/&]/\\&/g')

curl -fsSL localhost:4000/assets/files/tutorials/ssh/config | sed s/USERNAME/$user/g | sed s/KEYFILE/$keyfile/g >> $HOME/.ssh/config

echo "Appended lab machine configuration to ~/.ssh/config"
