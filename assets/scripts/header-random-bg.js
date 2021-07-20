window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".noscript").forEach(elem => {
        elem.classList.remove("noscript");
    });

    const bg = document.querySelector('#page-header--random-bg .bg > div');
    let images = [
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-01', 'header-bg-02', 'header-bg-03', 'header-bg-04',
        'header-bg-05'
    ];
    
    const chosenImage = images[Math.floor(Math.random() * images.length)];

    // Image 5 is special case--don't blur and don't use smaller version
    let isImg5 = (chosenImage === "header-bg-05");

    let filename;
    if(isImg5) filename = "header-bg-05.jpg";
    else filename = `${chosenImage}_70000.jpg`

    bg.style.backgroundImage = `url(/assets/images/core/${filename})`;
    if(!isImg5) bg.classList.add("blur");
});