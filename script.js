window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const scrollThreshold = 50; // Define the scroll threshold

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        navbar.style.backgroundColor = "#9c1219"; // 
    } else {
        navbar.style.backgroundColor = "#333"