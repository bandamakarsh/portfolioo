/* ===== SCROLL REVEAL ANIMATION ===== */
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.15});

elements.forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});


/* ===== TYPING EFFECT ===== */
const text = "Cybersecurity Student";
let i = 0;
const speed = 60;

function typeEffect(){
    if(i < text.length){
        document.querySelector(".hero h2").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}
document.querySelector(".hero h2").textContent = "";
typeEffect();


/* ===== BUTTON GLOW ===== */
const btn = document.querySelector(".resume-btn");
btn.addEventListener("mouseover", ()=>{
    btn.style.boxShadow = "0 0 15px #00ff9c";
});
btn.addEventListener("mouseout", ()=>{
    btn.style.boxShadow = "none";
});


/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll("a[href^='#']").forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
    });
});
