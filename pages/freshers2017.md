---
layout: page
title: Freshers
permalink: /freshers17/
show-in-nav: false
---

# Welcome!

Hello! We are the University of Bristol Computer Science Society.

Congratulations on getting into a great university and department (which just happens to be full of great people!)

You'll be pretty busy over the next few weeks, so we've collected together some information which you might find useful.

## Freshers' Week 2017

We've got a number of exciting events lined up for Freshers' Week (also known as Welcome Week). As details become available they will be posted here, on the calendar and most importantly on the [Facebook groups](#staying-in-the-loop), but here's an idea of what we're planning:

* An exciting(-ish) stand at the Welcome Fair
* A night out or two. Yes, computer scientists *can* party 🎉💾
* Complete the Cori tap [challenge](https://thetab.com/uk/bristol/2017/03/24/ten-step-guide-cori-tap-challenge-29087)??
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

## Staying in the loop

For fresher specific updates, and for an environment where you can ask questions amongst other first years, check out the [Facebook group for freshers](https://www.facebook.com/groups/BristolCS2017/)

Bristol is an exciting place to be and you're going to want to hear about the cool stuff going on. Join the main group and follow us on twitter via the links below and you'll never miss free pizza again!

{% include social-links.html %}

All our events are published on the [calendar](/events/). Add it to your Google Calendar account and sync it to your phone!
<!--<iframe src = "/ViewerJS/#https://raw.githubusercontent.com/cssbristol/freshers-booklet-2016/master/booklet.pdf" width='100%' height='600' allowfullscreen webkitallowfullscreen></iframe>-->

## Useful Information

There's lots of useful information available in our Freshers' Booklet. You should be receiving a hard copy soon, but [here it is](https://github.com/cssbristol/freshers-booklet-2017/releases) if you haven't already.

The society is run each year by an [elected committee](/contact/). Come say hi! We don't bite.

Looking for course materials? Almost everything lives [here, on the University of Bristol CS website](http://www.cs.bris.ac.uk/Teaching/). You'll have to wait until you arrive to be able to log in.

We'll also be adding more [tutorials](/tutorials/) in the coming months. Meanwhile, if you're back here trying to work out how on earth to connect to Snowy: [here you go](/tutorials/ssh-into-snowy/).
