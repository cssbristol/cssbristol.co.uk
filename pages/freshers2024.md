---
layout: freshers
title: Freshers
permalink: "/freshers24"
redirect_from:
- /freshers
- /freshers/
show-in-nav: false
freshers_start: 2024-09-09 00:00:01
freshers_end:   2024-09-15 00:00:01
---

{% if upcoming %}
## Freshers Events
<div style="display: inline-flex; flex-flow: row wrap; justify-content: space-between;">
{% for event in upcoming %}
    <div style="border: 1px solid lightgray; margin: 5px; padding: 20px; flex: 0 0 30%; flex-grow: 1;">
        <a href="{{ event.fb_link }}">
            <div style="background-image: url(/assets/images/contrib/events/{{ event.banner }}); width: auto; padding-top: 56.25%; margin: -20px; background-size: cover"></div>
        </a>
        <br>
        <h3>{{ event.title }}</h3>
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

{% endif %}

{% include social-links.html %}

## CSS Freshers WhatsApp group
Join [the WhatsApp group](https://chat.whatsapp.com/BvvBmwWs4kW35PGux1ddY0) to connect with other CS freshers.

## FAQs

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

#### 'How can we get involved in css?'
Everyone is welcome to Join our tech-talks, socials and competitions. But if you want even more involvement, 
why not run for our first year rep? Elections (EGM) will run sometime in November so keep an eye out for the announcement. 
If you have any suggestions for events, we’d also love to hear them!

#### 'How do you cope with stress and stay in sound mental health?'
Everyone struggles at some point during the year, and it’s important that you don’t feel afraid to ask for help. Your tutor, and the first year senior tutor should be your first point of contact if you’re struggling--telling them earlier means that you can get help earlier. The university also offers counselling and other wellbeing services which we’ve written more about here: [https://cssbristol.co.uk/wellbeing/](https://cssbristol.co.uk/wellbeing/)

#### 'Can I mine bitcoin on the supercomputer?'
No.

## Don't miss out
We’ll be planning events throughout the year (with lots of free pizza), so make sure you don’t miss any events 
by syncing your calendar with our events calendar, or subscribing to our RSS feed.

<div class="link-list">
        <a class="btn light" href="/feeds/">Sync your calendar</a>
    </div>
