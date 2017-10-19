---
layout: tutorial
title: "Test"
date: 2017-10-19 15:00:00 +0100
author: "Louis Heath"
---

Git is a way to store, back up and organise your code. It is one of those things that you wish you'd been taught in your first term if you discover it later on.

This tutorial assumes that you are moderately familiar with using a terminal/shell.

## Installing

The lab machines should have git installed already. On your own machine, type "git" in a terminal and if you're lucky you'll get the help text, showing it's installed. If you need to install it yourself:

  * If you're using Linux, your package manager should provide it. Try `sudo apt install git` for debian and derivatives like ubuntu and mint. `sudo yum install git` should work on Fedora.
  * On a Mac, if you're using homebrew then `brew install git` should do it, or you can download git from [the website](https://git-scm.com/download/mac).
  * On Windows, [git for windows](https://git-for-windows.github.io/) gives you git and an "open git here" option in the right-click menu of every folder.

## Create a repository

When you start on a new project or unit, create an empty folder, go to it in your terminal and type `git init`. This creates a hidden subfolder `.git` which is your **repository** - it will store the entire history of your project and every change you make, as long as you remember to commit these changes (which we'll do soon). This not only gets you unlimited undo/redo, so you can try things out and undo them if they don't work, but you can also maintain several different versions of your code and switch between them.

The folder containing the `.git` folder is your **working tree** - one particular version of your project.

## Making commits

Let's say you've written some code in a file `hello.c`:

```C
#include <stdio.h>

int main() {
  puts("Hello World!");
  return 0;
}
```

Type `git status` in your terminal. This will show that there's an untracked change in file `hello.c`. If colours are set up correctly, untracked changes are red and tracked ones are green.

To tell git to track this change, run `git add hello.c`. Run `git status` again and you'll see "new file: hello.c", possibly in green. This means you've told git about this change, but it's not committed yet (not saved in the repository). Run `git commit -m 'New file'`. Each commit must have a message and the `-m <message>` option is a way to provide this. The single quotes around the message are to do with how your shell parses arguments - basically if you put single quotes around a commit message then you can use spaces, punctuation etc. and it should work as long as there's no single quotes in your message itself. Do `git status` again and you should see "nothing to commit, working tree clean" which is a good message to see.

The simplest way to work with git is this: make changes, commit changes, repeat. Git lets you undo/redo changes at the commit level so it's helpful to make lots of small commits instead of few large ones; commit messages help you find commits when you want to e.g. revert to a particular commit.

If you make a change to your source file - perhaps add a comma after `Hello` - you'll see "modified: hello.c" under a heading "Changes not staged for commit" (in red if colours are working). `git add hello.c` tracks the change (it now appears under "Changes to be committed" in the status text), `git commit -m 'Added a comma'` commits it:

```text
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   hello.c

no changes added to commit (use "git add" and/or "git commit -a")

$ git add hello.c

$ git status
