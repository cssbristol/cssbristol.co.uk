---
layout: page-wide
title: Events
permalink: '/events'
pagination:
  enabled: true
  collection: events
feed: "/feed/events.xml"
show-in-nav: true
---

{% assign upcoming = paginator.posts | where_exp: "event", "event.date_end >= site.time" | reverse %}
{% if upcoming == empty and paginator.page == 1 %}
<h1>We're busy planning new events!</h1>

<p style="text-align: center;">Maybe you'd like to give a talk or sponsor an event? Check out sponsorship opportunities <a aria-label="Sponsor us link" href="/pages/sponsors">here</a></p>
{% elsif upcoming != empty %}
<h1>Upcoming Events</h1>
<hr />
<div class="page-section">
    {% include event_cards.html events=upcoming %}
</div>
{% endif %}

<h1>Past Events {% if paginator.page > 1 %}page {{paginator.page}} of {{paginator.total_pages}}{% endif %}</h1>
<hr />
<div class="page-section">
    {% assign past = paginator.posts | where_exp: "event", "event.date_end < site.time" %}
    {% include event_cards.html events=past %}
</div>

{% if paginator.total_pages > 1 %}
<div class="pager">
    {% if paginator.previous_page %}
      <a class="btn" href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer Events</a>
    {% else %}
      <span></span>
    {% endif %}
    {% if paginator.next_page %}
      <a class="btn" href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Events &rarr;</a>
    {% endif %}
</div>
{% endif %}
