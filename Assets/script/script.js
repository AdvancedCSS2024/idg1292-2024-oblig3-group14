document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin);
    
    let sections = gsap.utils.toArray(".scene1__panel");
    let para = gsap.utils.toArray("p");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".scene1",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            markers: true,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    });
    para.forEach(p => {
        gsap.to(p, {
            opacity: 1,
            duration: 5,
            scrollTrigger: {
                trigger: p,
                scrub: 1,
                once: true
                
            }
        });
    });

    

});

document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class "big-wave"
    const bigWave = document.querySelector('.beach__big-wave');

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the element with the class "beach" is intersecting with the viewport
            if (entry.isIntersecting) {
                // Add the class "anime_start" to the element with the class "big-wave"
                bigWave.classList.add('anime_start');
                setTimeout(() => {
                    beachwave()
                }, "10000");
            } else {
                // Remove the class "anime_start" if not intersecting
                bigWave.classList.remove('anime_start');
            }
        });
    });

    // Get the element with the class "beach"
    const beach = document.querySelector('.beach');

    // Observe the element with the class "beach"
    observer.observe(beach);
});

//changes the image src of the wave, and makes the trash hidden.
function beachwave(){
   document.querySelector('.beach__big-wave').src="Assets/img/bigmouthfull.svg";
    document.querySelector('.beach__trash').classList.add('beach__trash--hidden');
};

