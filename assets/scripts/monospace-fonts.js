/*
    Adds style for monospace fonts to the page. Script can be deferred so that these styles are only downloaded after pageload
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
*/

document.addEventListener("DOMContentLoaded", () => {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    document.body.append(link);
})
