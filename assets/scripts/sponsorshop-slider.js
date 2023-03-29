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

class Swipeable {
    constructor(elem) {
        this.elem = elem;
        this.x0 = 0;
        this.x1 = 0;
        this.leftSwipe = new CustomEvent("swipe", {
            detail: {
                direction: "left",
            }
        });
        this.rightSwipe = new CustomEvent("swipe", {
            detail: {
                direction: "right",
            }
        });
        elem.addEventListener("touchstart", this.handleTouchStart.bind(this), {passive: true});
        elem.addEventListener("touchend", this.handleTouchEnd.bind(this), {passive: true});
    }

    fireEvent() {
        const dx = this.x1-this.x0;

        let event = null;
        if(dx > 50)
            event = this.rightSwipe;
        else if(dx < -50)
            event = this.leftSwipe;

        if(event)
            this.elem.dispatchEvent(event);
    }

    handleTouchStart(e) {
        console.log(e.touches);
        this.x0 = e.touches[0].clientX;
    }

    handleTouchEnd(e) {
        this.x1 = e.changedTouches[0].clientX;
        this.fireEvent();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)"),
        sliders = document.querySelectorAll(".slider");

   sliders.forEach((elem, key) => {
       let slider = new Slider(elem);
       let autoscroll = null;
       new Swipeable(elem);


       // Start scrolling every 7s if prefers reduced motion flag isn't set
       if(!reduceMotion || !reduceMotion.matches) {
           autoscroll = window.setInterval(() => {
               slider.next();
           }, 7000);
       }

       const cancelAutoscroll = () => {
           if(autoscroll != null) {
               window.clearInterval(autoscroll);
               autoscroll = null;
           }
       }

       // Swipe detection
       elem.addEventListener("swipe", (e) => {
           cancelAutoscroll();
           if(e.detail.direction === "left") {
               slider.next();
           } else {
               slider.prev();
           }
       });

       // Control buttons
       elem.querySelector(".controls .next").addEventListener("click", () => {
           cancelAutoscroll();
           slider.next()
       });
       elem.querySelector(".controls .back").addEventListener("click", () => {
           cancelAutoscroll();
           slider.prev()
       });

       // Resizing the window can fudge up the slider. Update it to to fix it.
       window.addEventListener("resize", () => {
           slider.updateScrollPosition();
       })
   });
});