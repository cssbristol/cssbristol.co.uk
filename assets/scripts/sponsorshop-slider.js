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
   const sliders = document.querySelectorAll(".slider");
   sliders.forEach((elem, key) => {
       let slider = new Slider(elem);

       let autoScroll = window.setInterval(() => {
           slider.next();
       }, 1500);
   });
});