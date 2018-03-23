---
layout: tutorial
title:  "Setting Up Email Forwarding"
date:   2018-03-20 20:33:00 +0100
author: "Qirui Chen"
---
Too many inboxes? Did becoming a HPT screw you over now that you must check both your `@bristol.ac.uk` and `@my.bristol.ac.uk` email? Well if that's the case this tutorial is for you!

## Email forwarding

Emails are really old[¹](https://www.wikiwand.com/en/History_of_email). The good part is that if you'd like to do something, someone else has probably thought about it and done it before you. 

There's two main ways to perform email forwarding: forwarding or fetching[²](https://www.wikiwand.com/en/Email_forwarding). Both ideas have its benefits and drawbacks which I'll hopefully give a brief overview of here. For my examples I'm going to assume that you use a Gmail inbox (the `@my.bristol.ac.uk` email) and would like to forward emails from Outlook (the `@bristol.ac.uk` email). The steps are very similar for forwarding between Gmail to Gmail, Gmail to Outlook and vice versa.  

### Forwarding

As the name suggests, the client does the work of forwarding. If I use normal mail as an analogy, here's what it'll sound like:

You receive a letter at your house. You open it to inspect what's inside. After having the opportunity to look at what's inside you decide that you'd like to repackage the latter and send it to another address. At the other address the other person receives a letter.

The main benefit with client-based forwarding is that at your first address you can act as a filter and decide which types of mail you'd like to forward. The address that you're forwarding to doesn't have to know that any of this exists, as far as he's concerned he's just got a mail like any other. 

### Fetching

You give the key to your mailbox to someone else. Periodically they can come to your mailbox, see what letters were addressed to you and decide what they'd like to do with them. Maybe they'll copy a letter and put it into their mailbox, or maybe they'll delete it from your mailbox. 

The main benefit with fetching is that all your filters and configuration are in once place. Fetching will only occur periodically, but with modern inboxes this isn't really a concern anymore. 

## Outlook (`@bristol.ac.uk`)[³](https://support.office.com/en-ie/article/forward-email-from-office-365-to-another-email-account-1ed4ee1e-74f8-4f53-a174-86b748ff6a0e)

If you are a HTP, then to visit your `@bristol.ac.uk` email you need to go to [`https://outlook.office365.com/owa/`](https://outlook.office365.com/owa/?path=/options/mail), login with `<username>@bristol.ac.uk` and your normal password. Now that you've logged in, either go to the settings tab then the mail link, or click [here](https://outlook.office365.com/owa/?path=/options/forwarding).

![Forwarding mail settings in Outlook](/assets/images/contrib/tutorials/email-forwarding/outlook-forwarding.png)

From here you can initiate mail forwarding from your outlook account to any other email. You may find that the address that you're forwarding to marks some of the emails as spam, so you can add a filter to prevent that. 

If you'd like to fetch emails from other accounts you're looking for the connected accounts tab or click [here](https://outlook.office365.com/owa/?path=/options/connectedaccounts).

![Fetching mail settings in Outlook](/assets/images/contrib/tutorials/email-forwarding/outlook-connected.png)



## GSuite[⁴](https://gsuite.google.com/) (`@my.bristol.ac.uk`)[5](https://support.google.com/mail/answer/21289)

If you use the University of Bristol Email for Life `@my.bristol.ac.uk` email[⁵](https://www.bristol.ac.uk/it-services/advice/iam/leaver-info-student.html), you'll find that your settings look slightly different from a normal Gmail account. The university disables some features such as `Importing mail and contacts` and `Inbox for Google`[⁶](https://www.google.co.uk/inbox/). Login to your `@my.bristol.ac.uk` account [`www.google.com/gmail/`](www.google.com/gmail/), then go to settings then the forwarding tab or click [here](https://mail.google.com/mail/#settings/fwdandpop).

![Forwarding mail settings in Gmail and GSuite](/assets/images/contrib/tutorials/email-forwarding/gmail-forwarding.png)

From here you can forward your emails to another address. If you prefer using another email client, you can also enable and configure options for the `POP3` or `IMAP`. If you'd like to use your Gmail account to fetch emails, you need to go to the accounts tab or click [here](https://mail.google.com/mail/#settings/accounts). 

![Fetching mail settings in GSuite](/assets/images/contrib/tutorials/email-forwarding/gsuite-accounts.png)

### Gmail

If you have a personal Gmail account, the accounts tab will give you a few more options such as importing all the mail from another server. This can be useful, but I've found it doesn't work most of the time. 

![Fetching mail settings in Gmail](/assets/images/contrib/tutorials/email-forwarding/gmail-accounts.png)

## Final Remarks

It's important to consider what will happen if you ever lose access to an account. It's not uncommon to switch to a new email address, so you'll have to do these steps again. If you've setup a chain of forwarding you only need to forward the emails to the new address, but some emails might be caught by a spam filter along the way. If you're using fetching, then you'll have to keep those account details handy. Having some filters are a good idea, lest you want to be overwhelmed by thousands of useless emails! 
