// build the navigation bar based on number of sections
const sections = document.querySelectorAll('[data-nav]');
const sectionsLength = sections.length;

const navBar = document.querySelector('.navbar__menu');
const navUl = document.createElement('ul');
navUl.id = "navbar__list";

//function to check if the section is in the viewport
const isInViewport = function(element) {
  const distance = element.getBoundingClientRect();
  return (distance.top >= 0 && distance.top <= 300);
};

//for loop to create li elements and include anchor text inside them
for (let i = 0; i < sectionsLength; i++) {
    const navLi = document.createElement('li');

    const htmlTextToAdd = `<a class="menu__link" href="#section${i+1}">Section ${i+1}</a>`;
    navLi.insertAdjacentHTML('afterbegin', htmlTextToAdd);

    navUl.appendChild(navLi);
}

//append ul element into navigation bar
navBar.appendChild(navUl);

// Add smooth behavior to navigation
let mainNavLinks = document.querySelectorAll("nav ul li a");

mainNavLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


  // Add class 'active' to section when near top of viewport
  const currentLi = document.querySelectorAll("li");
  // add event on scroll
  window.addEventListener('scroll', function() {

  for (let x = 0; x < sectionsLength; x++) {
    if (isInViewport(sections[x])) {
        //if in Viewport
        sections[x].classList.add("your-active-class");
        currentLi[x].classList.add("menu_link_active");

      }
      else {
        sections[x].classList.remove("your-active-class");
        currentLi[x].classList.remove("menu_link_active");
      }
  }
  }, false);
