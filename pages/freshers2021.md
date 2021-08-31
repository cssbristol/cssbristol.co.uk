---
layout: freshers
title: Freshers
permalink: /pages/freshers21/
redirect_from: "/freshers"
show-in-nav: false
freshers_start: 2021-09-28 00:00:00
freshers_end:   2021-10-11 00:00:00
---

<div style="display: inline-flex; flex-flow: row wrap; justify-content: space-between;">
<!-- yeah i probs should have used a stylesheet but whatev sue me -->
{% for event in upcoming %}
    <div style="border: 1px solid lightgray; margin: 5px; padding: 20px; flex: 0 0 30%; flex-grow: 1;">
        <a href="{{ event.fb_link }}">
            <div style="background-image: url(/assets/images/contrib/events/{{ event.banner }}); width: auto; padding-top: 56.25%; margin: -20px; background-size: cover"></div>
        </a>
        <br>
        <h3>{{ event.title }}</h3>
        <!-- event details -->
        <div style="display: flex; border-bottom: 1px lightgray solid; padding: 7px;">
            <div style="flex: 0 0 30%; flex-grow: 1;">
                <i class="fas fa-calendar-day"></i>
                {{ event.date | date: "%d/%m/%y" }}
            </div>
            <div style="flex: 0 0 30%; flex-grow: 1;">
                <i class="fas fa-clock"></i>
                {{ event.date | date: "%H:%M" }}
            </div>
            <div style="flex: 0 0 30%; flex-grow: 1;">
                <i class="fas fa-map-marker"></i>
                {{ event.location }}
            </div>
        </div>
        <p>{{ event.content }}</p>
    </div>
{% endfor %}
</div>

## Useful Information

There's lots of useful information available in our Freshers' Booklet. You should be receiving a hard copy soon, but [here it is](https://drive.google.com/file/d/1zFGkKHD5yHFsKNd8VkLosrjXmNkjh7yO/view?usp=sharing) if you haven't already.

The society is run each year by an [selected committee](/contact/). Come say hi! We don't bite.

{% include social-links.html %}

## FAQs

#### 'Do I need to bring a laptop/desktop?'
You don't need to! The Uni has plenty of high-powered workstations and laptops you can borrow if you need. We would, 
however, recommend having your own laptop. It doesn't have to be powerful, in fact we would recommend a small and light one.
If you don't have one yet, I'd recommend a Chromebook and [install linux on it](https://support.google.com/chromebook/answer/9145439?hl=en-GB)

#### 'Where is [insert] lecture?'
No one knows! Seriously, we still all get lost, just ask someone on campus or follow everyone else.

#### 'I don't know how to code!'
That's fine! The assumption in lectures is that you haven't done any coding before, so you'll learn from scratch.

#### 'What languages do we learn?'
In your first year you'll learn C, Haskell and Java. You can generally use whatever you want in projects in later years though.

#### 'How hard is the maths unit?'
As long as you go to the lectures/seminars & ask friends it'll be fine. Just remember everyone else will be finding it
as difficult as you are, and you only need 40% to pass!

#### 'Is the course hard?'
It can be challenging, but you getting onto the course means you're good enough to get through it 🙂.

#### 'What textbooks do I need?'
You'll get told when you start lectures, but no paid books are required. Any textbooks needed will be availiable through
the library either physically or as an E-book. And we absolutely cannot recommend seaching for \"${TEXTBOOK NAME} pdf\".

#### 'How many notebooks will I need?'
Hard to answer, but I'd suggest around 1 per unit. It varies massively though, so I'd see how you're doing first. You can bring laptops to lectures too if you prefer that.
We'd recommend using software like OneNote or Notion to organise your notes as it keeps them searchable and you can add relations between pages.

#### 'Can I mine bitcoin on the supercomputer?'
No.

## Staying in the loop
Keep an eye on this site and our social media for more events throughout the year!
