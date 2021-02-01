---
layout: page
title: Hall of Fame
permalink: /pages/halloffame
show-in-nav: false
---

# Previous committees
{% assign c = site.data.committee | reverse %}
{% for committee in c offset:1 %}
## Committee {{ committee.year }}
  {% include committee.html data-file=committee.members hide-email=true %}
{% endfor %}
