---
layout: page-wide
title: Contact
permalink: /contact/
show-in-nav: false
---

# Want to get in touch?

If you're a student with feedback about the course then take your pick from the [course reps](#course-reps) below - they're friendly and here to represent you.

For queries regarding job postings, CSS events or anything else, send an e-mail to the most relevant CSS committee member. We'll all be happy to help.

Course directors, tutors and other key staff contacts can be found [here](http://www.bris.ac.uk/engineering/departments/computerscience/contact/).

Perhaps you're looking for a [previous committee member](/halloffame)?

{% assign committee = site.committees | sort: "year" | last %}
# CSS Committee {{ committee.year }}

{% include committee.html data-file=committee.members %}

# Course Reps

<div>
A list of your <span style="color:#ffffff">vxjwlrai</span> course reps can be found on the <a href="https://www.bristolsu.org.uk/course_rep">SU webpage</a> <em>(Requires SSO login)</em>
</div>

{% comment %}
# Course Reps 2018-19

{% include reps.html data-file=site.data.reps-2018-19 %}
{% endcomment %}


