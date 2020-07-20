---
layout: page
title: Events
permalink: /blog/
show-in-nav: false
---

# Announcements

<div class="page-section">
  <div class="blog-posts">
    {% for post in site.posts %}
        <div class="blog-posts__item">
          <a class="blog-posts__item__img" href="{{ post.url }}"
            {% if post.image %}
              style="background-image: url({{ post.image }});"
            {% else %}
              style="border: 1px solid lightgray; border-bottom: none"
            {% endif %}
          >
            {% if post.image == null %}
              {{ post.title }}
            {% endif %}
          </a>
          <div class="blog-posts__item__info">
            {% if post.loc %}
              <p>{{ post.loc }}</p>
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
</div>
