"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = (function () {
    function Slider(elem) {
        _classCallCheck(this, Slider);

        this.active = 0;
        this.viewport = elem.querySelector(".slides-viewport");
        this.slides = elem.querySelectorAll(".slide");
    }

    _createClass(Slider, [{
        key: "findNext",
        value: function findNext() {
            if (this.active + 1 >= this.slides.length) return 0;
            return this.active + 1;
        }
    }, {
        key: "findPrev",
        value: function findPrev() {
            if (this.active - 1 < 0) return this.slides.length - 1;
            return this.active - 1;
        }
    }, {
        key: "updateScrollPosition",
        value: function updateScrollPosition() {
            this.viewport.scrollTo(this.active * this.slides[0].offsetWidth, 0);
        }
    }, {
        key: "next",
        value: function next() {
            this.active = this.findNext();
            this.updateScrollPosition();
        }
    }, {
        key: "prev",
        value: function prev() {
            this.active = this.findPrev();
            this.updateScrollPosition();
        }
    }]);

    return Slider;
})();

var Swipeable = (function () {
    function Swipeable(elem) {
        _classCallCheck(this, Swipeable);

        this.elem = elem;
        this.x0 = 0;
        this.x1 = 0;
        this.leftSwipe = new CustomEvent("swipe", {
            detail: {
                direction: "left"
            }
        });
        this.rightSwipe = new CustomEvent("swipe", {
            detail: {
                direction: "right"
            }
        });
        elem.addEventListener("touchstart", this.handleTouchStart.bind(this), { passive: true });
        elem.addEventListener("touchend", this.handleTouchEnd.bind(this), { passive: true });
    }

    _createClass(Swipeable, [{
        key: "fireEvent",
        value: function fireEvent() {
            var dx = this.x1 - this.x0;

            var event = null;
            if (dx > 50) event = this.rightSwipe;else if (dx < -50) event = this.leftSwipe;

            if (event) this.elem.dispatchEvent(event);
        }
    }, {
        key: "handleTouchStart",
        value: function handleTouchStart(e) {
            console.log(e.touches);
            this.x0 = e.touches[0].clientX;
        }
    }, {
        key: "handleTouchEnd",
        value: function handleTouchEnd(e) {
            this.x1 = e.changedTouches[0].clientX;
            this.fireEvent();
        }
    }]);

    return Swipeable;
})();

document.addEventListener("DOMContentLoaded", function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)"),
        sliders = document.querySelectorAll(".slider");

    sliders.forEach(function (elem, key) {
        var slider = new Slider(elem);
        var autoscroll = null;
        new Swipeable(elem);

        // Start scrolling every 7s if prefers reduced motion flag isn't set
        if (!reduceMotion || !reduceMotion.matches) {
            autoscroll = window.setInterval(function () {
                slider.next();
            }, 7000);
        }

        var cancelAutoscroll = function cancelAutoscroll() {
            if (autoscroll != null) {
                window.clearInterval(autoscroll);
                autoscroll = null;
            }
        };

        // Swipe detection
        elem.addEventListener("swipe", function (e) {
            cancelAutoscroll();
            if (e.detail.direction === "left") {
                slider.next();
            } else {
                slider.prev();
            }
        });

        // Control buttons
        elem.querySelector(".controls .next").addEventListener("click", function () {
            cancelAutoscroll();
            slider.next();
        });
        elem.querySelector(".controls .back").addEventListener("click", function () {
            cancelAutoscroll();
            slider.prev();
        });

        // Resizing the window can fudge up the slider. Update it to to fix it.
        window.addEventListener("resize", function () {
            slider.updateScrollPosition();
        });
    });
});