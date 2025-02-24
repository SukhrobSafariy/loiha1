const skills = ["Freelancer", "Web Developer", "JavaScript Expert", "React Developer"];
let index = 0;
let charIndex = 0;
let currentSkill = "";
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        currentSkill = skills[index].substring(0, charIndex--);
    } else {
        currentSkill = skills[index].substring(0, charIndex++);
    }
    
    document.getElementById("typed-text").textContent = currentSkill;

    if (!isDeleting && charIndex === skills[index].length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % skills.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
