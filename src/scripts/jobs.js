// Setup Isotope layout for job items

$('#job-section .section-content').isotope({
  itemSelector: '.job-item',
  percentPosition: true,
  masonry: {
    gutter: 45
  }
});
