---
layout: page
title: All Events
permalink: /events/
show-in-nav: true
---

# All Events

-----------
<div class="page-section">
  <div class="event-card-list">
    {% for event in site.events reversed %}
      <div class="event-card-list__card">
        {% if event.banner %}
          <div class="event-card-list__card__banner" style="background-image: url(/assets/images/contrib/events/{{ event.banner }});"></div>
        {% endif %}
        <h3>{{ event.title }}</h3>
        {% if event.date %}
          <div class="event-card-list__card__info">
            <p><strong>{{ event.date | date: "%d/%m/%y" }}</strong></p>
          </div>
        {% endif %}
        {% if event.location %}
          <div class="event-card-list__card__info">
            <p>{{ event.location }}</p>
          </div>
        {% endif %}

        <div class="event-card-list__card__more">
          <p>More info</p>
          <a href="{{ event.url }}"><i class="fas fa-chevron-right"></i></a>
        </div>
      </div>
    {% endfor %}
  </div>
  <a class="btn btn--dark" href="/blog_all">View Older evens</a>
</div>
