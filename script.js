/*typing nimation*/
var typed = new Typed(".typing",{
    strings:["Front-End Designer","Web Developer"],
    typeSpeed:100, 
    BackSpeed:50,
    loop:true
})
/*Aside*/
// Select necessary elements
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;

// Function to handle the active link highlighting
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add('active'); // Color change to indicate active page
        showSelection(this); // Call a function to show the selection
    });
}

// Toggle functionality for small screens
const toggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

document.getElementById("nav-toggler").addEventListener("click", function () {
    // Toggle active class for hamburger icon
    this.classList.toggle("active");
    console.log("Toggle button clicked!");

    // Toggle visibility of the navigation menu
    document.querySelector(".nav-menu").classList.toggle("active");
});

// Optional: Close the sidebar when a nav link is clicked on small screens
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        if (window.innerWidth <= 768) { // Check if screen width is small
            aside.classList.remove('open'); // Close the sidebar
        }
    });
};


