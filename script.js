

// NAVIGATION BETWEEN MAIN PAGE AND ABOUT

function navigateTo(pageName, sectionName) {

    // Hide all separate pages
    var pages = document.getElementsByClassName("art");

    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // Show the selected page
    var selectedPage = document.getElementById(pageName);
    selectedPage.style.display = "block";

    // If a section was specified, scroll to it
    if (sectionName) {

        var section = document.getElementById(sectionName);

        // Allow the page to become visible before scrolling
        requestAnimationFrame(function() {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    } else {

        // If no section is specified (About),
        // scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}

// Show the main page when the website loads
navigateTo('MainPage', 'Home');

  function magic(){
    let img = document.getElementById("myImage");
    img.src = "Images/Final_Logo1.png";
  // frame 1

  setTimeout(function () {
    img.src = "Images/Final_Logo2.png";
  }, 1000);

  // frame 2
  setTimeout(function () {
    img.src = "Images/Final_Logo3.png";
  }, 2000);

  // frame 3
  setTimeout(function () {
    img.src = "Images/Final_Logo4.png";
  }, 3000);

  // frame 4
  setTimeout(function () {
    img.src = "Images/Final_Logo5.png";
  }, 4000);
}
// OPEN INDIVIDUAL PROJECT PAGE

function openProject(projectName) {

    // Hide all existing pages
    var pages = document.getElementsByClassName("art");

    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // Show the selected project
    var project = document.getElementById(projectName);

    project.style.display = "block";

    // Start at the top of the project page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}




magic();
setInterval(magic, 5000);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".clickable-img").forEach(img => {
  img.addEventListener("click", function() {
    modal.classList.add("show");
    modalImg.src = this.src;
    
    // Check for alt text first, otherwise pull from adjacent overlay text div
    let overlay = this.nextElementSibling;
    let caption = this.alt || (overlay && overlay.classList.contains('overlay-text') ? overlay.innerText : "");
    
    captionText.innerText = caption;
  });
});

closeBtn.onclick = function() {
  modal.classList.remove("show");
}

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});
