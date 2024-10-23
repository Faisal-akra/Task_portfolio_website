const hamburger = document.querySelector(".hamburger");

const mobileMenue = document.querySelector(".nav-list ul")


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    mobileMenue.classList.toggle("active")
});