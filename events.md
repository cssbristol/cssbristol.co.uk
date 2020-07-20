---
layout: page
title: Events
permalink: /events/
show-in-nav: true
---

{% assign upcoming = site.events | where_exp: "event", "event.date_end >= site.time" %}
{% if upcoming == empty %}
# We're busy planning new events!

<p style="text-align: center;">Maybe you'd like to give a talk or sponsor an event? Check out sponsorship opportunities <a aria-label="Sponsor us link" href="/pages/sponsors">here</a></p>
{% else %}
# Upcoming Events

-----------
<div class="page-section">
    {% include event_cards.html events=upcoming %}
</div>
{% endif %}

# Past Events
---
<div class="page-section">
    {% assign past = site.events | where_exp: "event", "event.date_end < site.time" | reverse %}
    {% include event_cards.html events=past %}
    <a class="btn btn--dark" href="/blog_all">View Older evens</a>
</div>
