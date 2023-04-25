let navBarLinks = document.getElementById("navbarLinks");
let toggleButton = document.getElementById("toggle-button");
let navli = document.getElementById("nav-li");
let navulSelector = document.getElementById("nav-ul-selector");

  
toggleButton.addEventListener("click", function() {
    navBarLinks.classList.toggle("active");
    // navli.style.marginLeft = '0';

    let navulSelector = navulSelector.querySelectorAll("li");
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.marginLeft = '0';
    }
});

