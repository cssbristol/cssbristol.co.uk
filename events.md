---
layout: page
title: All Events
permalink: /events/
show-in-nav: true
---

# All Events

-----------
<div class="page-section">
  <div class="blog-posts">
    {% for post in site.events reversed %}
        <div class="blog-posts__item">
          <a class="blog-posts__item__img" href="{{ post.url }}"
            {% if post.banner %}
              style="background-image: url(/assets/images/contrib/events/{{ post.banner }});"
            {% else %}
              style="border: 1px solid lightgray; border-bottom: none"
            {% endif %}
          >
            {% if post.banner == null %}
              {{ post.title }}
            {% endif %}
          </a>
          <div class="blog-posts__item__info">
            {% if post.location %}
              <p>{{ post.location }}</p>
            {% endif %}

            {% if post.date %}
              <p><strong>{{ post.date | date: "%d/%m/%y" }}</strong></p>
            {% endif %}

            {% if post.fb_link %}
              <a class="fb" href="{{ post.fb_link }}">FB</a>
            {% endif %}
          </div>
        </div>
    {% endfor %}
  </div>
  <a class="btn btn--dark" href="/blog_all">View Older evens</a>
</div>
