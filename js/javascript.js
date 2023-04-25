let navBarLinks = document.getElementById("navbarLinks");
let toggleButton = document.getElementById("toggle-button");
let navUl = document.getElementById("nav-ul-selector");

toggleButton.addEventListener("click", function() {
    navBarLinks.classList.toggle("active");

    if (navBarLinks.classList.contains("active")) {
        let lis = navUl.querySelectorAll("li");
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.marginLeft = '0';
        }
    }
});

function checkScreenWidth() {
    if (window.innerWidth >= 1000) {
      let lis = navUl.querySelectorAll("li");
      for (let i = 0; i < lis.length; i++) {
        lis[i].style.marginLeft = '50px';
      }
    }
  }
  
  // Call checkScreenWidth on load and resize
  window.addEventListener("load", checkScreenWidth);
  window.addEventListener("resize", checkScreenWidth);