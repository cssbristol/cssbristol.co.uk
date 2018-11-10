---
layout: bare
title: Explore Week Autumn 2018
permalink: /explore
---

<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"> 

{% assign posts = site.posts | where: "explore2018", true %}

<div id="explorecont">
    <div class="side" id="left">
    </div>
    <div id="middle">
        <div>
            <img src="/assets/images/contrib/events/2018-11-explore/Logo.png"/>
            <section id="maintext">
                <h1>Get ready for a jam-packed week.</h1>
                <p>We've put together a special array of events just for you - we hope you enjoy the ride.</p>
            </section>
        </div>
        <div id="eventcont">
            {% for post in posts reversed %}
                    <div class="event">
                        {% if post.url %}<a href="{{ post.url }}">
                            <div class="image" {% if post.image %}style="background: url({{ post.explore2018_img }}) center; background-size: cover;"{% endif %}></div>
                        </a>{% endif %}
                        <div class="desc">
                            <div class="info" {% if post.explore2018_col %}style="background: {{ post.explore2018_col }};"{% endif %}>
                                <p style="border-right: 1px solid gray;">
                                    {% if post.loc %}
                                        {{ post.loc }}
                                    {% endif %}
                                </p>
                                <p>
                                    {% if post.date %}
                                        {{ post.date | date: "%d/%m/%y" }}
                                    {% endif %}
                                </p>
                            </div>
                            <p class="text">
                                {{ post.excerpt | remove: '<p>' | remove: '</p>'  }}
                            </p>
                        </div>
                    </div>
            {% endfor %}
        </div>
    </div>
    <div class="side" id="right">
    </div>
</div>