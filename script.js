document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const experienceElement = document.querySelector(
    "#about .details-container p"
  );

  if (experienceElement) {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    experienceElement.innerHTML = `${yearsOfExperience}+ years <br />Full-Stack Development`;
  }
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
