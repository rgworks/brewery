function show(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();}
    
    show()

    gsap.to("#bottle", {
      rotate: -15,
      scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main",
        start: "top 5%",
        end: "top -416%",
        scrub: true,
        pin: true

      }
    })

    gsap.to("#bottle", {
     scale: 0.5,
     scrollTrigger: {
      trigger: "#page5 h1",
      scroller: "#main",
      start: "top 430%",
      end: "top -430%",
      scrub: true,
      pin: true

    }
    })

    let t1 = gsap.timeline() 
    t1.from("#main #page1_dog_image", {
      opacity: 0,
      duration: 1,
      scale: 0.1,
    })

    t1.from("#bottle", {
      opacity: 0,
      duration: 1,
      scale: 0.2,
    })

    t1.from("#nav_top>button", {
      xPercent: 200,
    })

    gsap.from("#page2_part1>button",{
      scrollTrigger: {
        trigger: ("#page2_part1>button"),
        scroller: ("#main"),
        start: "top 70%",
      },
      xPercent: -300,
      duration:1,
    })


    gsap.from("#page6_part6>button",{
      scrollTrigger: {
        trigger: ("#page6_part2>button"),
        scroller: ("#main"),
        start: "top 70%",
      },
      xPercent: 600,
      duration:1,
    })

    document.addEventListener("DOMContentLoaded", function() {
        // Toggle sidebar when menu icon is clicked
        document.getElementById("menu-icon").onclick = function() {
            document.getElementById("sidebar").style.width = "250px";
        }

        // Close sidebar when close button is clicked
        document.getElementById("close-btn").onclick = function() {
            document.getElementById("sidebar").style.width = "0";
        }
    });

    // Example of checking if an element exists before animating
    const buttonElement = document.querySelector("#page6_part6 > button");

    if (buttonElement) {
        gsap.to(buttonElement, { x: 100 });
    } else {
        console.warn("Element #page6_part6 > button not found.");
    }

    // Example of handling a generic target
    const genericElement = document.querySelector("#your-target-selector"); // Replace with your actual selector

    if (genericElement) {
        gsap.to(genericElement, { x: 200 });
    } else {
        console.warn("Element with the specified selector not found.");
    }
