---
layout: bare
title: Explore Week Autumn 2018
permalink: /explore
---

{% assign posts = site.posts | where: "explore2018", true %}

<div id="explorecont">
    <div id="middle">
        <img src="/assets/images/contrib/events/2018-11-explore/jam-artwork.jpg"/>
        <div id="eventcont">
            {% for post in posts %}
                    <div class="event">
                        <div class="image" {% if post.image %}style="background: url({{ post.image }}) center; background-size: contain;"{% endif %}></div>
                        <div class="desc">
                            <div class="info">
                                <p style="border-right: 1px solid gray">MVB 1.11</p>
                                <p>19/11/18</p>
                            </div>
                            <p class="text">{{ post.title }}</p>
                        </div>
                    </div>
            {% endfor %}
        </div>
    </div>
</div>