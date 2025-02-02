let navLinks = document.getElementById("navLinks");
let entireBody = document.getElementById("entireBody");
let navbar = document.getElementById("navbar");

function showMenu(){
  navLinks.style.left="0";
  entireBody.style.position="fixed";
  navbar.style.height="100vh";
}

function hideMenu(){
  navLinks.style.left="-100%";
  entireBody.style.position="static"; 
  navbar.style.height="10vmin";
}

function checkWindowSize() {
  if (window.innerWidth >= 1024) {
    navbar.style.height = "10vmin";
  }
}

window.addEventListener('resize', checkWindowSize);

checkWindowSize();