const navLinks = document.getElementById("navLinks");
const entireBody = document.getElementById("entireBody");
const navbar = document.getElementById("navbar");
const carouselButtons = document.querySelectorAll("[data-carousel-button]");
const slidesContainer = document.querySelector("[data-slides]");

function showMenu() {
  navLinks.style.left = "0"; 
  entireBody.style.position = "fixed"; 
  navbar.style.height = "100%"; 
}

function hideMenu() {
  navLinks.style.left = "-100%"; 
  entireBody.style.position = "static"; 
  navbar.style.height = "10vmin"; 
}

carouselButtons.forEach(button => {
  button.addEventListener("click", () => {
    const direction = button.dataset.carouselButton === "next" ? 1 : -1;

    const activeSlide = slidesContainer.querySelector("[data-active]");

    let newIndex = [...slidesContainer.children].indexOf(activeSlide) + direction;

    if (newIndex < 0) newIndex = 3; 
    else if (newIndex > 3) newIndex = 0; 

    Array.from(slidesContainer.children).forEach(slide => delete slide.dataset.active);
    slidesContainer.children[newIndex].dataset.active = true;

    updateChevronButtonColor(slidesContainer, newIndex);

    updateActiveDot(newIndex);
  });
});

// changing color of the chevron button according to background
function updateChevronButtonColor(slidesContainer, index) {
  const isFirstSlideActive = slidesContainer.children[0].hasAttribute("data-active");
  carouselButtons.forEach(button => button.style.color = isFirstSlideActive ? "black" : "white");
}

const dotsContainer = document.querySelector(".carousel-dots");

// creating dots for representing slide number
for (let i = 0; i < 4; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  
  if (i === 0) dot.classList.add("active");
  
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    goToSlide(i);
  });
}

// navigating to the slide whose button is clicked
function goToSlide(index) {
  const activeSlide = slidesContainer.querySelector("[data-active]");
  const activeDot = dotsContainer.querySelector(".active");

  delete activeSlide.dataset.active;
  
  slidesContainer.children[index].dataset.active = true;

  activeDot.classList.remove("active");
  dotsContainer.children[index].classList.add("active");

  updateChevronButtonColor(slidesContainer, index);
}

function updateActiveDot(index) {
  const activeDot = dotsContainer.querySelector(".active");

  if (activeDot) {
    activeDot.classList.remove("active");
  }

  dotsContainer.children[index].classList.add("active");
}


