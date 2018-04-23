---
layout: tutorial
title: "First Steps with Git"
date: 2017-10-18 15:00:00 +0100
author: "David Bernhard"
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

On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   hello.c

$ git commit -m 'Added a comma.'
[master 6e7e782] Added a comma.
1 file changed, 1 insertion(+), 1 deletion(-)

$ git status
On branch master
nothing to commit, working tree clean
```

In summary:

  * `git status` shows you whether there are any uncommitted changes in your repos.
  * `git add FILE` tracks a change, but doesn't commit it yet.
  * `git commit -m 'MESSAGE'` commits all tracked changes.

If "git status" shows "working tree clean" then all your changes have been saved.

## Reverting changes

As you might have gathered already from the help text, if you've made changes to a file that you've not committed yet and you want to undo them back to the last commit, `git checkout -- FILENAME` reverts the file. There is a space both before and after the `--` in that command.

If you've committed changes and want to go back to an earlier commit, the first thing you do is `git log` which shows you a list of all commits. If there are a lot, `git log | less` lets you view them one page at a time - advance with SPACE, exit with Q. `git log --oneline` shows just one line per commit and you can stick `| less` on the end of that too. Each commit has a hash value which is a long hexadecimal string. When referencing a commit, you usually only need to type the first few characters of the hash.

Let's say I decide I don't want a comma after "Hello" after all.

```text
$ git log --oneline
6e7e782 Added a comma.
4f251ef New file

$ git checkout 4f25 hello.c`
```

The command `git checkout HASH FILENAME` reverts the file to the state in the given commit. The file is now in "changed and not tracked" state as if you'd edited it by hand. You can also `git checkout HASH` to revert all files back to an older commit.

## Excluding files

Let's compile our file: `gcc hello.c -Wall -Werror -std=c99 -o hello`. You do use `-Wall -Werror` on all your C programs to catch possible bugs, right?

We now have two files in the working tree: `hello.c` and `hello` (or `hello.exe` if we're on windows). However we don't want to track `hello` in the repository - you want your sources but not your compiled files in the repository. You can just compile the sources again whenever you need to, after all.

Create a file called `.gitignore` (yes, it starts with a dot) with one line `hello` (or `hello.exe`) in it. Each line in this file is treated as a pattern that matches one or more files (you can do `*.exe` to exclude all windows executables for example) that git should ignore. Adding the name of a folder to a gitignore file ignores that folder and everything in it. When you do `git status` again you'll see that git ignores your executable file, but notices the new file `.gitignore`. Add that file to the repository and commit.

# Remote repositories

So far we've just saved our project's history in a subfolder on our own machine. The next step is to save it in the cloud so that several people can work on it together, or you can work on it from different machines (for example, home and lab PC).

There are three big free providers of git services: [gitlab](https://gitlab.com/), [github](https://github.com/) and [bitbucket](https://bitbucket.org/). Gitlab and bitbucket offer you unlimited (within reason) free private repositories (where you control who can read/write them), github gives you one free private repository (5 if you sign up for their student pack with your university e-mail). All three providers offer unlimited free public repositories for open-source projects.

**WARNING: do not under any circumstances place code that you have submitted or intend to submit as assessed coursework to a public repository on any provider. If another student finds this code and submits a copy of it, you are both in trouble for plagiarism. Yes, this has happened in the past.**

The next few steps in this tutorial are based on the gitlab UI to create a remote repository, but github and bitbucket offer the same features.

  * Go to [gitlab.com](https://gitlab.com) and register an account.
  * Click "New project", choose a project name and set visibility to private.

You get to see your project page. The git address of your project is `https://gitlab.com/USERNAME/PROJECTNAME.git`, so for example my username is `david-bristol` and I have a project called `coconut` that lives at [https://gitlab.com/david-bristol/coconut.git](https://gitlab.com/david-bristol/coconut.git). If you access this link on the web, it'll remove the ".git" part at the end but you need it in your terminal.

The command `git clone ADDRESS` downloads a repository and sets up some information so that you can synchronise the local and remote copies. For example, `git clone https://gitlab.com/david-bristol/coconut.git` will create a subfolder `coconut` with the contents of my coconut project. Since this is a public project, the files will just appear - for a private project, git will ask for your username and password first.

You can now use the following two commands to synchronise the local and remote copies:

  * `git pull` pulls any changes from the remote copy to the local one.
  * `git push` pushes your local changes to the remote copy.

It is advised to use these commands only when your working tree is clean.

The rough outline of setting up a git project to work together:

  * Everyone creates an account with the same provider.
  * One person creates the online repository and gives everyone else on the project access to it (assuming a private repository). On gitlab, choose settings/members in the left menu, enter the other developers' gitlab usernames and set their role to "Developer" (the default "Guest" lets you read but not write).
  * Everyone clones the repository to their own machine.

The commands `git add` and `git commit` add changes from your **working tree** to the **local copy of the repository**. The commands `git push` and `git pull` move committed changes from the **local copy of the repository** to the **remote copy of the repository** and back again. After pushing/pulling, all copies of the repository should be identical.

Your daily coding routine:

  * `git pull` to download any changes that your colleagues have made.
  * Make changes, commit, repeat. Once again: make small changes and commit frequently. This step only writes to the local copy of your repository and does not require internet access.
  * At the end of the day, or whenever you want to share code with others, `git push`. This uploads your changes to the server.

You can save yourself a lot of trouble by only doing push/pull operations with a clean working tree, e.g. you've added and committed all changes to the local copy of your repository.
In theory, that's all you need. In practice, what happens if two people edit the same file?

_You do not have to agree via e-mail or some other system who is currently editing which files. Git is set up to handle this situation!_

What happens is that your `git push` will fail if someone else has pushed since your last pull. In this case, do a `git pull`. If you've both been editing different files, git will update the ones you haven't changed with the new versions from the remote copy. Check that everything still works/compiles and then try and push again.

If you've both been editing the same files, git will see if there's an obvious way to combine your changes (for example you've both edited different functions in the same file). If so, all is well. If not, you have a conflict. The line `CONFLICT ...` when you try and pull will alert you to this and tell you which files are affected (so will `git status`). When you open these files, you'll see markers as follows in places where there's a conflict (search for `<<<` in your text editor to find them):

```text
<<<<<<< HEAD
puts("Hello, world!");
=======
puts("Hi world!");
>>>>>>> 31be48e8e2a86fb71b0b0b61bb08019314d87a1b
```

This means that you tried to change a line to read `puts("Hello, world!");` but someone else changed the same line to `puts("Hi world!");` since your last pull. Fix the conflict by choosing what to do with the line(s) in question and then delete the `<<< === >>>` marker lines and check that everything compiles and works again. Then you can add and commit the file and try to push again.

Conflicts, although annoying, are nothing to be afraid of. They can happen as part of normal git working practice in a team and you deal with them as they happen.
