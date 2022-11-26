window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".noscript").forEach(elem => {
        elem.classList.remove("noscript");
    });

    const bg = document.getElementById("header-random-background");
    const imageIndex = Math.floor(Math.random() * 4) + 1;
    bg.style.backgroundImage = `url(/assets/images/core/header-bg-0${imageIndex}_70000.jpg)`;
    bg.classList.add("blur");
});