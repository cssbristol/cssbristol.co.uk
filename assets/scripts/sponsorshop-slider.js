---
---

class Slider {
    constructor(elem) {
        this.active = 0;
        this.viewport = elem.querySelector(".slides-viewport");
        this.slides = elem.querySelectorAll(".slide");
    }

    findNext() {
        if(this.active + 1 >= this.slides.length) return 0;
        return this.active + 1;
    }

     findPrev() {
        if(this.active - 1 < 0) return this.slides.length-1;
        return this.active - 1;
    }

    updateScrollPosition()  {
        this.viewport.scrollTo(this.active * this.slides[0].offsetWidth, 0);
    }

    next() {
        this.active = this.findNext();
        this.updateScrollPosition();
    }

    prev() {
        this.active = this.findPrev();
        this.updateScrollPosition();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)"),
        sliders = document.querySelectorAll(".slider");

   sliders.forEach((elem, key) => {
       let slider = new Slider(elem);
       let autoscroll = null;

       // Start scrolling every 7s if prefers reduced motion flag isn't set
       if(!reduceMotion || !reduceMotion.matches) {
           autoscroll = window.setInterval(() => {
               slider.next();
           }, 7000);
       }

       // Control buttons
       elem.querySelector(".controls .next").addEventListener("click", () => {
           if(autoscroll != null) {
               window.clearInterval(autoscroll);
               autoscroll = null;
           }
           slider.next()
       });
       elem.querySelector(".controls .back").addEventListener("click", () => {
           if(autoscroll != null) {
               window.clearInterval(autoscroll);
               autoscroll = null;
           }
           slider.prev()
       });

       // Resizing the window can fudge up the slider. Update it to to fix it.
       window.addEventListener("resize", () => {
           slider.updateScrollPosition();
       })
   });
});