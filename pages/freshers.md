---
layout: page
title: Freshers
permalink: /pages/freshers/
show-in-nav: true
---

# Welcome!

Hello! We are the University of Bristol Computer Science Society.

Congratulations on getting into a great university and department (which just happens to be full of great people!)

You'll be *rather* busy over the next few weeks, so we've collected together some information which you might find useful.

Think there's something missing from this page? [Raise an issue on GitHub](https://github.com/cssbristol/cssbristol.github.io/issues).

## Freshers' Week 2016-17

We've got a number of exciting events lined up for Freshers' Week (or, as the uni would rather have us call it, Welcome Week). Details will be posted here and on the calendar as they become available, but here's what we're planning:

* Trip to Allstars for some pool (and beer)
* Film evening
* An exciting(-ish) stand at the Welcome Fair
* A night out. Yes, computer scientists *can* party 🎉💾

<div id="calendar" class="calendar"></div>

<script type="text/javascript">
$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek'
      },
      defaultView: 'agendaWeek',
      defaultDate: '2016-09-19',
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

There's lots of useful information available in our Freshers' Booklet. You should be receiving a copy of this soon, if you haven't already.

[Download PDF](https://github.com/cssbristol/freshers-booklet-2016/blob/master/booklet.pdf)

[View on GitHub](https://github.com/cssbristol/freshers-booklet-2016)

<!--<iframe src = "/ViewerJS/#https://raw.githubusercontent.com/cssbristol/freshers-booklet-2016/master/booklet.pdf" width='100%' height='600' allowfullscreen webkitallowfullscreen></iframe>-->

## Useful Information

All our events are published on the [calendar](/events/). Add it to your Google Calendar account and sync it to your phone!

The society is run each year by an [elected committee](/about/). Come say hi! (We don't bite - really.)

Join our Facebook group, and follow us on Twitter! You'll miss out if you don't...

{% include social-links.html %}

Looking for course materials? Almost everything lives [here, on the University of Bristol CS website](http://www.cs.bris.ac.uk/Teaching/). You'll have to wait until you arrive to be able to log in.

We'll also be adding more [tutorials](/tutorials/) in the coming months. Meanwhile, if you're back here trying to work out how on earth to connect to Snowy: [here you go](/tutorials/ssh-into-snowy/).
