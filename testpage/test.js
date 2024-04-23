

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin)
    // gsap code here!
    
    
    gsap.to(".viewport-container", {
        scrollTrigger: ".viewport-container",
         rotation: 7, 
         y: 1000, 
         duration: 6
     });





   });