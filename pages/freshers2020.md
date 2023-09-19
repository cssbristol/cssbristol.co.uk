---
layout: page
title: Freshers
permalink: /freshers20/
show-in-nav: false
freshers_start: 2020-09-28 00:00:00
freshers_end:   2020-10-11 00:00:00
---

# Welcome!

Hello! We are the University of Bristol Computer Science Society.

Congratulations on getting into a great university and department (which just happens to be full of great people!)

You'll be pretty busy over the next few weeks, so we've collected together some information which you might find useful.

## Fresher's Events 2020

We've got a number of exciting events lined up for Freshers' Week (also known as Welcome Week). You can find details about them [on the site](/events), as well as on the [Facebook group](https://www.facebook.com/groups/CSSBristol/):

{% assign upcoming = site.events | where_exp: "event", "event.date >= page.freshers_start"
                                 | where_exp: "event", "event.date <= page.freshers_end" %}

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
        <div>
        {{ event.content }}
        </div>
    </div>
{% endfor %}
</div>

## Useful Information

There's lots of useful information available in our Freshers' Booklet. You should be receiving a hard copy soon, but [here it is](https://drive.google.com/file/d/1zFGkKHD5yHFsKNd8VkLosrjXmNkjh7yO/view?usp=sharing) if you haven't already.

The society is run each year by an [selected committee](/contact/). Come say hi! We don't bite.

## FAQs

* 'Do I need to bring a laptop/desktop?'

You don't (if required you can borrow a laptop), but I'd definitely recommend bringing a laptop.

* 'Where is [insert] lecture?'

Ask someone around campus or follow everyone else! Don't worry about it.

* 'I don't know how to code!'

That's fine! The assumption in lectures is that you haven't done any coding before, so you'll learn from scratch.

* 'What languages do we learn?'

C, Haskell (first term), and Java (second term). You can generally use whatever you want in projects in later years though.

* 'How hard is the maths unit?'

As long as you go to the lectures/seminars & ask friends it'll be fine. A lot is covered in A Level/Further Maths (plus you only need 40%!)

* 'Is the course hard?'

It can be challenging, but you getting onto the course means you're good enough to get through it 🙂.

* 'What textbooks do I need?'

You'll get told when you start lectures, but no books are required (didn't find myself using many in first year really). If you're very keen, your unit pages online might tell you - a lot are quite pricey, so I suggest getting them from the uni library or finding a pdf online.

* 'How many notebooks will I need?'

Hard to answer, but I'd suggest around 1 per unit. It varies massively though, so I'd see how you're doing first. You can bring laptops to lectures too if you prefer that.

## Staying in the loop

Keep an eye on this site and our social media for more events throughout the year!

{% include social-links.html %}
