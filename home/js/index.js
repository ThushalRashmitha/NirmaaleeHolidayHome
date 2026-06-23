// ====================================
// STICKY HEADER
// ====================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


// ====================================
// ACTIVE NAVIGATION
// ====================================

const sections = document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


// ====================================
// SMOOTH SCROLL
// ====================================
navLinks.forEach(link => {

    link.addEventListener("click", e => {

        const href = link.getAttribute("href");

        // # වලින් පටන් ගන්න links වලට විතරයි smooth scroll
        if(href.startsWith("#")){

            e.preventDefault();

            const targetSection =
            document.querySelector(href);

            if(targetSection){
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        }

    });

});
// ====================================
// COUNTER ANIMATION
// ====================================

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    counters.forEach(counter => {

        const target =
        Number(counter.dataset.target);

        let count = 0;

        const speed = target / 120;

        const updateCounter = () => {

            count += speed;

            if(count < target){

                if(target >= 1000){

                    counter.innerText =
                    (count / 1000).toFixed(1) + "K+";

                }else{

                    counter.innerText =
                    Math.floor(count) + "+";

                }

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                if(target >= 1000){

                    counter.innerText =
                    (target / 1000).toFixed(0)
                    + "K+";

                }else{

                    counter.innerText =
                    target + "+";

                }

            }

        };

        updateCounter();

    });

}


// ====================================
// COUNTER SCROLL TRIGGER
// ====================================

const statsSection =
document.querySelector(".stats");

window.addEventListener("scroll", () => {

    if(!statsSection) return;

    const triggerPoint =
    statsSection.offsetTop -
    window.innerHeight + 150;

    if(
        window.scrollY > triggerPoint &&
        !counterStarted
    ){

        startCounters();

        counterStarted = true;

    }

});


// ====================================
// AUTO START IF VISIBLE
// ====================================

window.addEventListener("load", () => {

    if(!statsSection) return;

    const triggerPoint =
    statsSection.offsetTop -
    window.innerHeight + 150;

    if(window.scrollY > triggerPoint){

        startCounters();

        counterStarted = true;

    }

});
// ====================================
// REVEAL ELEMENTS
// ====================================

const revealElements =
document.querySelectorAll(

    ".room-card, \
     .attraction-card, \
     .stat-box, \
     .review-card, \
     .feedback-box, \
     .contact-info, \
     .map-container, \
     .big-room, \
     .small-room"

);


// ====================================
// REVEAL FUNCTION
// ====================================

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(
            elementTop <
            windowHeight - revealPoint
        ){

            element.classList.add("show");

        }

    });

}


// ====================================
// EVENT LISTENERS
// ====================================

window.addEventListener(

    "scroll",

    revealOnScroll

);

window.addEventListener(

    "load",

    revealOnScroll

);


// ====================================
// HERO CONTENT ANIMATION
// ====================================

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    if(heroContent){

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";

        setTimeout(() => {

            heroContent.style.transition = "all 1s ease";
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 300);

    }

});

// ====================================
// PARALLAX HERO IMAGE
// ====================================

// ====================================
// IMAGE HOVER PRELOAD
// ====================================

const images =
document.querySelectorAll(

    ".room-card img,\
     .attraction-card img,\
     .big-room img,\
     .small-room img"

);

images.forEach(img => {

    img.addEventListener(

        "mouseenter",

        () => {

            img.style.transition =
            "transform .6s ease";

        }

    );

});


// ====================================
// SECTION FADE EFFECT
// ====================================

const sectionsFade =
document.querySelectorAll(

    ".section-layout,\
     .review-section,\
     .contact-section"

);

function sectionAnimation(){

    sectionsFade.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 150){

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0px)";

        }

    });

}

sectionsFade.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
    "translateY(50px)";

    section.style.transition =
    "all 1s ease";

});

window.addEventListener(

    "scroll",

    sectionAnimation

);

window.addEventListener(

    "load",

    sectionAnimation

);
// ====================================
// BOOKING BUTTON
// ====================================

const bookingBtn =
document.querySelector(
    ".booking-box button"
);

if(bookingBtn){

    bookingBtn.addEventListener(
        "click",

        () => {

            alert(
                "Room availability checking feature will be connected soon."
            );

        }

    );

}


// ====================================
// FEEDBACK FORM
// ====================================

const feedbackForm =
document.querySelector(
    ".feedback-box form"
);

if(feedbackForm){

    feedbackForm.addEventListener(

        "submit",

        (e) => {

            e.preventDefault();

            alert(
                "Thank you for your feedback!"
            );

            feedbackForm.reset();

        }

    );

}


// ====================================
// ARROW BUTTON EFFECT
// ====================================

const arrows =
document.querySelectorAll(
    ".arrow-btn"
);

arrows.forEach(button => {

    button.addEventListener(

        "click",

        () => {

            button.style.transform =
            "scale(.90)";

            setTimeout(() => {

                button.style.transform =
                "scale(1)";

            },150);

        }

    );

});


// ====================================
// HOVER GLOW EFFECT
// ====================================

const cards =
document.querySelectorAll(

    ".room-card,\
     .attraction-card,\
     .review-card,\
     .stat-box"

);

cards.forEach(card => {

    card.addEventListener(

        "mouseenter",

        () => {

            card.style.boxShadow =
            "0 25px 50px rgba(184,145,70,.20)";

        }

    );

    card.addEventListener(

        "mouseleave",

        () => {

            card.style.boxShadow =
            "";

        }

    );

});


// ====================================
// ACTIVE BUTTON EFFECT
// ====================================

const buttons =
document.querySelectorAll(

    ".book-btn,\
     .section-btn,\
     .feedback-box button"

);

buttons.forEach(btn => {

    btn.addEventListener(

        "mousedown",

        () => {

            btn.style.transform =
            "scale(.96)";

        }

    );

    btn.addEventListener(

        "mouseup",

        () => {

            btn.style.transform =
            "scale(1)";

        }

    );

});


// ====================================
// IMAGE LOADING EFFECT
// ====================================

window.addEventListener(

    "load",

    () => {

        document.body.classList.add(
            "loaded"
        );

    }

);


// ====================================
// BACK TO TOP BUTTON
// ====================================

const topBtn =
document.createElement("div");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add(
    "back-to-top"
);

document.body.appendChild(
    topBtn
);

window.addEventListener(

    "scroll",

    () => {

        if(window.scrollY > 500){

            topBtn.classList.add(
                "show-top"
            );

        }else{

            topBtn.classList.remove(
                "show-top"
            );

        }

    }

);

topBtn.addEventListener(

    "click",

    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

);


// ====================================
// CONSOLE MESSAGE
// ====================================

console.log(
    "Nirmaalee Holiday Home Website Loaded Successfully"
);





