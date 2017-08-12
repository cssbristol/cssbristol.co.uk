---
layout: page
title: Freshers
permalink: /pages/freshers/
redirect_from: "/freshers"
show-in-nav: false
---

# Welcome!

Hello! We are the University of Bristol Computer Science Society.

Congratulations on getting into a great university and department (which just happens to be full of great people!)

You'll be pretty busy over the next few weeks, so we've collected together some information which you might find useful.

## Freshers' Week 2017

We've got a number of exciting events lined up for Freshers' Week (also known as Welcome Week). As details become available they will be posted here, on the calendar and most importantly on the [Facebook group](https://www.facebook.com/groups/CSSBristol/), but here's an idea of what we're planning:

* An exciting(-ish) stand at the Welcome Fair
* A night out or two. Yes, computer scientists *can* party 🎉💾
* Complete the Cori tap [challenge](https://thetab.com/uk/bristol/2017/03/24/ten-step-guide-cori-tap-challenge-29087) ??
* Have a crack at some coding at the CSS Hackathon!
* Attempt to use 3D printers
* more detailed events to come ...

<div id="calendar" class="calendar"></div>

<script type="text/javascript">
$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'title',
        center: '',
        right: ''
      },
      views: {
        agenda: {
          minTime: "09:00:00"
        }
      },
      defaultView: 'agendaWeek',
      defaultDate: '2017-09-18',
      firstDay: 1,
      googleCalendarApiKey: 'AIzaSyBoDRhd5JAtBWVaN0zzEmrKo8_0W5RKF_0',
      eventSources: [
        {
          googleCalendarId: 'cssbristol.co.uk_cmmb77i4kd6d9okfv5nc1pibn0@group.calendar.google.com',
          className: 'calendar__event--css'
        }
      ]
    })

});
</script>

## Freshers' Booklet 2016-17

There's lots of useful information available in our Freshers' Booklet. You should be receiving a hard copy soon, but here it is if you haven't already.

[Download PDF](https://github.com/cssbristol/)

[View on GitHub](https://github.com/cssbristol/)

<!--<iframe src = "/ViewerJS/#https://raw.githubusercontent.com/cssbristol/freshers-booklet-2016/master/booklet.pdf" width='100%' height='600' allowfullscreen webkitallowfullscreen></iframe>-->

## Useful Information

All our events are published on the [calendar](/events/). Add it to your Google Calendar account and sync it to your phone!

The society is run each year by an [elected committee](/contact/). Come say hi! We don't bite.

Join the Facebook group, and follow us on Twitter! You'll miss out if you don't...

{% include social-links.html %}

Looking for course materials? Almost everything lives [here, on the University of Bristol CS website](http://www.cs.bris.ac.uk/Teaching/). You'll have to wait until you arrive to be able to log in.

We'll also be adding more [tutorials](/tutorials/) in the coming months. Meanwhile, if you're back here trying to work out how on earth to connect to Snowy: [here you go](/tutorials/ssh-into-snowy/).
