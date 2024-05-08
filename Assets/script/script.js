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
    document.querySelector('.panel3__text2').classList.remove('panel3__text2--hidden');
    document.querySelector('.panel3__text2').classList.add('panel3__text2--show');
};

document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class "big-wave"
    const scene5Text = document.querySelector('.scene5__text2');

    // Create a new Intersection Observer
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the element with the class "beach" is intersecting with the viewport
            if (entry.isIntersecting) {
                // Add the class "anime_start" to the element with the class "big-wave"
                setTimeout(() => {
                    scene5Text.classList.add('scene5__text2--show');
                    scene5Text.classList.remove('scene5__text2--hidden');
                }, 5000);
            } 
        });
    });

    // Get the element with the class "beach"
    const floor = document.querySelector('.scene5');

    // Observe the element with the class "beach"
    observer2.observe(floor);
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class "big-wave"
    const watertrash1 = document.querySelector('.water_trash1');
    const watertrash2 = document.querySelector('.water_trash2');
    const watertrash3 = document.querySelector('.water_trash3');
    const watertrash4 = document.querySelector('.water_trash4');

    // Get the height of the .scene2 element
    const scene2Height = document.querySelector('.scene2').getBoundingClientRect().height;

    // Create a new Intersection Observer
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the element with the class "beach" is intersecting with the viewport
            if (entry.isIntersecting) {
                watertrash1.classList.add('scene2__trash');
                watertrash1.classList.remove('scene2__trash--hidden');
                watertrash2.classList.add('scene3__trash');
                watertrash3.classList.add('scene4__trash');
                watertrash4.classList.add('scene5__trash');
                
                // Add the class "anime_start" to the element with the class "big-wave"
            } 
        });
    }, {
        rootMargin: `-${scene2Height}px 0px 0px 0px` // Negative margin equal to .scene2 height
    });

    // Get the element with the class "beach"
    const water = document.querySelector('.scene3');

    // Observe the element with the class "beach"
    observer3.observe(water);
});
