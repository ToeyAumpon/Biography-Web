const roles= [
    "Hello world!",
    "ソフトウェア開発",
    "Development",
    "自動化技術"
];
let roleIndex = 0
let charIndex = 0
let isDeleting = false;
const typewriterEL = document.getElementById("typewriter");

function type() {
    const currectRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterEL.textContent = currectRole.substring(0,charIndex - 1);
        charIndex--;
    } else {
        typewriterEL.textContent = currectRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === currectRole.length) {
        speed = 1800
        isDeleting = true;
    } else if (isDeleting && charIndex === 0){
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }
    setTimeout(type, speed);
}

type();

//Navbar SCORLL EFFECT
window.addEventListener("scroll",()=>{
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "0.8rem 5%";
    } else {
        navbar.style.padding = "1.2rem 5%"
    }
})








