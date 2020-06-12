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
  <div class="event-grid card-grid">
    {% for event in upcoming %}
      <div class="card-grid__card{% if event.cancelled %} cancelled {% endif %}">
        {% if event.banner %}
          <div class="card-grid__card__banner" style="background-image: url(/assets/images/contrib/events/{{ event.banner }});"></div>
        {% endif %}
        <h3>{% if event.cancelled %}[CANCELLED] {% endif %}{{ event.title }}</h3>
        {% if event.date %}
          {% assign endDay = event.date_end | date: '%j' %}
          {% assign startDay = event.date | date: '%j' %}
          {% if startDay == endDay %}
            <div class="card-grid__card__row">
              <i class="fas fa-calendar-day"></i>
              <p>{{ event.date | date: "%d/%m/%y" }}</p>
            </div>
          {% else %}
             <div class="card-grid__card__row">
              <i class="fas fa-calendar-day"></i>
              <p>{{ event.date | date: "%d/%m/%y" }} - {{ event.date_end | date: "%d/%m/%y" }}</p>
            </div>
          {% endif %}
            <div class="card-grid__card__row">
            <i class="fas fa-clock"></i>
            <p>{{ event.date | date: "%H:%M" }} - {{ event.date_end | date: "%H:%M" }}</p>
          </div>
        {% endif %}
        {% if event.location %}
          <div class="card-grid__card__row">
            <i class="fas fa-map-marker"></i>
            <p>{{ event.location }}</p>
          </div>
        {% endif %}

        <div class="card-grid__card__footer">
          <p>More info</p>
          <a aria-label="More details button" class="card-grid__card__footer__next-btn" href="{{ event.url }}">
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
{% endif %}

# Past Events
---
<div class="page-section">
  <div class="event-grid card-grid">
    {% assign past = site.events | where_exp: "event", "event.date_end < site.time" %}
    {% for event in past reversed %}
      <div class="card-grid__card{% if event.cancelled %} cancelled {% endif %}">
        {% if event.banner %}
          <div class="card-grid__card__banner" style="background-image: url(/assets/images/contrib/events/{{ event.banner }});"></div>
        {% endif %}
        <h3>{% if event.cancelled %}[CANCELLED] {% endif %}{{ event.title }}</h3>
        {% if event.date %}
          {% assign endDay = event.date_end | date: '%j' %}
          {% assign startDay = event.date | date: '%j' %}
          {% if startDay == endDay %}
            <div class="card-grid__card__row">
              <i class="fas fa-calendar-day"></i>
              <p>{{ event.date | date: "%d/%m/%y" }}</p>
            </div>
          {% else %}
             <div class="card-grid__card__row">
              <i class="fas fa-calendar-day"></i>
              <p>{{ event.date | date: "%d/%m/%y" }} - {{ event.date_end | date: "%d/%m/%y" }}</p>
            </div>
          {% endif %}
          <div class="card-grid__card__row">
            <i class="fas fa-clock"></i>
            <p>{{ event.date | date: "%H:%M" }} - {{ event.date_end | date: "%H:%M" }}</p>
          </div>
        {% endif %}
        {% if event.location %}
          <div class="card-grid__card__row">
            <i class="fas fa-map-marker"></i>
            <p>{{ event.location }}</p>
          </div>
        {% endif %}

        <div class="card-grid__card__footer">
          <p>More info</p>
          <a aria-label="More details button" class="card-grid__card__footer__next-btn" href="{{ event.url }}">
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    {% endfor %}
  </div>
  <a class="btn btn--dark" href="/blog_all">View Older evens</a>
</div>
