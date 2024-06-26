

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin)
    // gsap code here!
    
    
  
    let sections = gsap.utils.toArray(".panel");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scene1",
        pin: true,
        scrub: 0,
        snap: 1 / (sections.length - 1),
        markers: true,
        end: () => "+=" + document.querySelector(".container").offsetWidth
      }
      
    });






   });

   
// function createObserver(){
//   let observer;
//   let option = {
//     root: document.querySelector('.beach'),
//     rootMargin: "0px",
//     threshold: buildThresholdList(),
//   }
// };

// observer = new IntersectionObserver(handleIntersect, options);
// observer.observe('.big-wave')

document.querySelector('.big-wave').src="svg projects/bigmouth.svg"