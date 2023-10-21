---
layout: page-wide
title: Contact
show-in-nav: "true\r"
permalink: /contact/
---
# Want to get in touch?

If you're a student with feedback about the course then take your pick from the [course reps](#course-reps) below - they're friendly and here to represent you.

If you're not sure who to contact, you can reach all of us at [hello@cssbristol.co.uk](mailto:hello@cssbristol.co.uk), and someone will pick up on your query!

Course directors, tutors and other key staff contacts can be found [here](http://www.bris.ac.uk/engineering/departments/computerscience/contact/).

Perhaps you're looking for a [previous committee member](/halloffame)?

{% assign committee = site.committees | sort: "year" | last %}

# CSS Committee {{ [committee.year](committee.year) }}

{% include [committee.html](committee.html) data-file=committee.members %}

# Course Reps

A list of your course reps can be found on the [SU webpage](https://www.bristolsu.org.uk/course_rep) _(Requires SSO login)_ {% comment %}

# Course Reps 2018-19

{% include [reps.html](reps.html) [data-file=site.data.reps-2018-19](data-file=site.data.reps-2018-19) %} {% endcomment %}
