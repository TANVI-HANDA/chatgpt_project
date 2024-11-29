const tl = gsap.timeline();

tl.from("#nav > h2", { y: -20, opacity: 0, duration: 1 })
  .from("#menu > h4", { y: -20, opacity: 0, duration: 1, stagger: 0.2 })
  .from("hr", { x: -1500, opacity: 0, duration: 1 });

gsap.from(".circle", {
    scale: 0.5,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    repeat: -1,
    yoyo: true,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#content1 h1", {
    scrollTrigger: {
        trigger: "#content1",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".plan", {
    scrollTrigger: {
        trigger: "#content2",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
});

const heading = document.querySelector('.pricing-heading');
const letters = heading.textContent.split(''); 
heading.textContent = '';  
letters.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    heading.appendChild(span);
});
gsap.from(".pricing-heading span", {
    opacity: 1,
    y: 20,  
    duration: 0.6,
    stagger: 0.1, 
    ease: "power2.out",
    paused: true
});

document.querySelector('.pricing-heading').addEventListener('mouseenter', () => {
    gsap.to(".pricing-heading span", {
        opacity: 0,
        y: 20, 
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.in"
    });
});

document.querySelector('.pricing-heading').addEventListener('mouseleave', () => {
    gsap.to(".pricing-heading span", {
        opacity: 1,
        y: 0,  
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    });
});


gsap.utils.toArray('.flip-card').forEach(card => {
    const flipInner = card.querySelector('.flip-card-inner');
    
    card.addEventListener('mouseenter', () => {
        gsap.to(flipInner, {
            rotationY: 180,
            duration: 0.6,
            ease: "power2.inOut"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(flipInner, {
            rotationY: 0,
            duration: 0.6,
            ease: "power2.inOut"
        });
    });
});

gsap.from(".compartments", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
});

gsap.from(".main-heading", {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: "power3.out",
});

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out",
        });
    });

    const compartments = document.querySelectorAll(".compartments");
    compartments.forEach((compartment) => {
        compartment.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                scale: 2, 
                duration: 0.3,
                ease: "power2.out",
            });
            cursor.style.backgroundImage = "url('/path/to/your/hover-image.png')"; 
        });

        compartment.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                scale: 1, 
                duration: 0.3,
                ease: "power2.out",
            });
            
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.addEventListener("click", () => {
            const answer = item.querySelector(".faq-answer");

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.opacity = 0;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.opacity = 1;
            }
        });
    });
});
