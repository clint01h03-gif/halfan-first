/*=========================================
    SWEET HEAVEN PREMIUM SCRIPT
=========================================*/

/* Loader */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});


/*=========================================
    Scroll Navbar
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,.25)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
        header.style.backdropFilter = "blur(20px)";

    }

    else{

        header.style.background = "rgba(255,255,255,.15)";
        header.style.boxShadow = "none";

    }

});


/*=========================================
    Smooth Scroll
=========================================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const id=this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*=========================================
    Hero Image Floating
=========================================*/

const heroImage=document.querySelector(".hero-image img");

let angle=0;

setInterval(()=>{

    angle+=0.05;

    heroImage.style.transform=

    `translateY(${Math.sin(angle)*12}px)
     rotate(${Math.sin(angle)*2}deg)`;

},30);


/*=========================================
    Card Hover Glow
=========================================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.35),
rgba(255,255,255,.12))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.15)";

});

});


/*=========================================
    Gallery Zoom
=========================================*/

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("active");

});

});


/*=========================================
    Button Ripple Effect
=========================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

let circle=document.createElement("span");

circle.classList.add("ripple");

this.appendChild(circle);

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

setTimeout(()=>{

circle.remove();

},700);

});

});


/*=========================================
    Scroll Animation
=========================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.review,.about,.gallery img").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(80px)";

el.style.transition="1s";

observer.observe(el);

});

