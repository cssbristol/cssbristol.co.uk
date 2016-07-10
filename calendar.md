---
layout: default
title: Calendar
permalink: /events/
redirect_from: "/calendar"
show-in-nav: true
---

<div class="page-section">
  <h1>Events</h1>
  <div id="calendar" class="calendar"></div>
  <article class="article">
    <h2>Calendar details</h2>
    <p>cssbristol.co.uk_cmmb77i4kd6d9okfv5nc1pibn0@group.calendar.google.com</p>
    <h2>Facebook</h2>
    <p><a href="https://www.facebook.com/groups/CSSBristol/events/">CSS events on Facebook</a> (you must be a member of the CSS group).</p>
  </article>
</div>

<script type="text/javascript">
$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek,month'
      },
      defaultView: 'agendaWeek',
      googleCalendarApiKey: 'AIzaSyBoDRhd5JAtBWVaN0zzEmrKo8_0W5RKF_0',
      eventSources: [
        {
          googleCalendarId: 'cssbristol.co.uk_cmmb77i4kd6d9okfv5nc1pibn0@group.calendar.google.com',
          className: 'calendar__event--css'
        },
        {
          googleCalendarId: '77q6gepe08n9hbqdd91om074u8@group.calendar.google.com',
          className: 'calendar__event--university'
        }
      ]
    })

});
</script>

{% include social-links.html %}
