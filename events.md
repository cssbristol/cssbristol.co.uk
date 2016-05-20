---
layout: default
title: Events
permalink: /events/
---

<div class="page-section">
  <h1>Events</h1>
  <div id="calendar" class="calendar"></div>
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
      events: {
          googleCalendarId: 'cssbristol.co.uk_cmmb77i4kd6d9okfv5nc1pibn0@group.calendar.google.com'
      }
    })

});
</script>

{% include social-links.html %}
