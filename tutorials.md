---
layout: page-wide
title: Tutorials
permalink: /tutorials/
show-in-nav: true
---

# Tutorials
---

<div class="page-section">
  <div class="tutorials-grid card-grid">
    {% for tutorial in site.tutorials reversed %}
      <div class="card-grid__card">
        <h3>{{ tutorial.title }}</h3>
        <p>{{ tutorial.abstract }}</p>
        <div class="card-grid__card__footer">
          <p>Read more</p>
          <a aria-label="Read more button" href="{{ tutorial.url }}" class="card-grid__card__footer__next-btn">
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
