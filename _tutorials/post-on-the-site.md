---
layout: tutorial
published: true
title:  "Writing a post for cssbristol.co.uk"
date:   2016-05-21 01:52:00 +0100
author:
    name: "Ross Gardiner"
abstract: "So you want to write a post for the CSS website? Great! This tutorial will walk you through the process. Basic familiarity with git is assumed."
---
So you want to write a post for the CSS website? Great! This tutorial will walk you through the process. Basic familiarity with git is assumed.

## Getting the code

First, you will need to create a GitHub account. If you have one already, log in.

![Log into GitHub](/assets/images/contrib/tutorials/post-on-the-site/log-into-github.png)

Now, navigate to the [website repository](https://github.com/cssbristol/cssbristol.github.io). In the top-right hand corner of the page, you will see a 'Fork' button. Click this to create a copy of the repository in your own account.

![Fork the repository](/assets/images/contrib/tutorials/post-on-the-site/fork.png)

After a few seconds, you will have your own fork of the repository.

![Forked repository](/assets/images/contrib/tutorials/post-on-the-site/forked-repo.png)

Now, if you're familiar with git, clone the repository and make your changes. I'll show you how to make a post without leaving the GitHub website - but the principles are the same whether you clone the repository or use the web interface.

## Writing a post

Let's try writing a new blog post. First, click on the `_posts` folder to see the existing blog posts on the site. If you click on one, you can read and modify it.

![Editing a post](/assets/images/contrib/tutorials/post-on-the-site/edit-post.png)

Now let's add a new post - click the 'Create new file' button:

![Creating a file](/assets/images/contrib/tutorials/post-on-the-site/create-file.png)

First, name the file. The format of the name should be `yyyy-mm-dd-title-of-the-post.markdown`, for example `2016-05-21-pining-for-the-fjords.markdown`. With the file named, we first need to provide some metadata about the post. The very first thing in the file should be something like this:

```
---
layout: post
title:  "Pining for the fjords"
date:   2016-05-21 21:51:00 +0100
categories:
author: "John Cleese"
---
```

On the next line, you can start writing your post. If you hadn't already guessed, posts are written in a very simple formatting language called Markdown. If you haven't used it before, [here's a tutorial](http://www.markdowntutorial.com/).

![Writing a new post](/assets/images/contrib/tutorials/post-on-the-site/write-post.png)

If you want to preview your post, you can click the 'Preview' tab at the top of the editor. Once you're happy with the content, it's time to commit it to your local version of the site (don't worry, it won't be published to the live site yet!).

Scroll down, and write a short description for your commit. Choose to commit directly to `master`. Now click 'Commit new file'.

![Starting a pull request](/assets/images/contrib/tutorials/post-on-the-site/commit-master.png)

You will be taken back to the `_posts` folder. Notice that there is now a message: 'This branch is 1 commit ahead of cssbristol:master'. That means we can make a pull request to have our changes merged back into the main site. Click the 'Pull request' button to begin the process.

![Starting a pull request](/assets/images/contrib/tutorials/post-on-the-site/pull-request-button.png)

GitHub should choose to do the right thing automatically. At the top, you can see a 'base' and 'head'. The 'base' is the repository that you want to merge into (the main CSS website repository), and the 'head' is your local copy. Below, in green, you can see you additions.

![Submitting a pull request](/assets/images/contrib/tutorials/post-on-the-site/pull-request.png)

Click 'Create pull request', and write a short description of your changes in the box provided. The clearer the information you provide, the easier it will be for us to merge your changes.

![Describing a pull request](/assets/images/contrib/tutorials/post-on-the-site/pull-request-description.png)

And now you're done! We'll see to it as soon as possible.

![A submitted pull request](/assets/images/contrib/tutorials/post-on-the-site/pull-request-submitted.png)
