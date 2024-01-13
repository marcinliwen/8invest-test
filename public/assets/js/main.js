window.onload = () => {
    let isMobile = window.matchMedia("(max-width: 1024px)");
    /**
     * line animation 
     */
    const lineWidth = document.querySelectorAll('.line-animation-left');
    if (lineWidth.length > 0) {
        document.documentElement.style.setProperty('--line-width', lineWidth[0].offsetWidth + "px");
    }
    /**
   * modals
   */
    const triggers = document.getElementsByClassName("modal-trigger");
    const triggerArray = Array.from(triggers).entries();
    const modals = document.getElementsByClassName("modal");
    const closeButtons = document.getElementsByClassName("modal-close");
    if (modals) {
        for (let [index, trigger] of triggerArray) {
            const toggleModal = () => {
                modals[index].classList.toggle("modal--is-open");
                document.body.classList.toggle("overflow-hidden")
            };
            trigger.addEventListener("click", toggleModal);
            closeButtons[index].addEventListener("click", toggleModal);
        }
    }
    /**
   * body overflow if mobile menu is open
   */
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const menu = document.querySelector(".main-menu");
    if (openMenu) {
        openMenu.addEventListener("click", () => {
            menu.classList.add("is-open");
            document.body.classList.add("overflow-hidden");
        });
    }
    if (closeMenu) {
        closeMenu.addEventListener("click", () => {
            menu.classList.remove("is-open");
            document.body.classList.remove("overflow-hidden");
        });
    }


    /**
     * slider
     */
    const startAutoplay = (swiper, time) => {
        setTimeout(() => {
          swiper.autoplay.start();
        }, time);
      };
    if (typeof Swiper !== 'undefined') {
        const progressBar = document.querySelector('.autoplay-progress')
        const swiperHome = new Swiper('.swiper-home', {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay:{
                delay:6000,
                disableOnInteraction: true,
            },
            speed:1200,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
              },
            on:{
                init(){
                    if(progressBar){
                        progressBar.style.setProperty("--progress", 0);
                    }
                },
                autoplayStop(){
                    if(progressBar){
                        progressBar.style.setProperty("--progress", 0);
                    }
                },
                autoplayTimeLeft(s, time, progress){
                    if(progressBar){
                        progressBar.style.setProperty("--progress", (1 - progress));
                    }
                    
                },
                slideChange(s){
                    startAutoplay(s, 1200)
                }
            }
        });
        const swiperReference = new Swiper('.references-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 600,
            freeMode: {
                enabled: false,
                sticky: false,
                momentumBounce: false,
            },
            // If we need pagination
            breakpoints: {
                768: {
                    slidesPerView: 2.2,
                },
                1024: {
                    slidesPerView: 1.4,
                    slidesOffsetAfter: 44,
                    freeMode: {
                        enabled: true,
                        sticky: false,
                        momentumBounce: false,
                    },
                },
                1280: {
                    slidesPerView: 2.2,
                    slidesOffsetAfter: 44,
                },
                1700: {
                    slidesPerView: 3.2,
                    slidesOffsetAfter: 44,
                }
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            on: {
                init: function (swiper) {
                    leftDistance = swiper.slidesSizesGrid[0] + 12;
                },
                resize: function (swiper) {
                    console.log(swiper.slidesSizesGrid[0])
                    leftDistance = swiper.slidesSizesGrid[0] + 12;
                }
            }

        });
        swiperReference.on('touchStart', (_) => {
            TweenMax.to('.reference-slide', 0.4, { scale: 0.9 })
        })
        swiperReference.on('touchEnd', (_) => {
            TweenMax.to('.reference-slide', 0.4, { scale: 1 })
        })
    }

    if (typeof gsap !== 'undefined' || gsap !== null) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.video-bg', {
            opacity: '1',
            duration: '3'
        })
        var tl = gsap.timeline({
            scrollTrigger: {
                markers: false,
                trigger: "#top",
                start: "top-=121", 
                end: isMobile ? "bottom" : "bottom -=900", 
                scrub: 1,
                toggleAction: 'play none none reverse',
                pin: false, 
            }
        })
        tl.to('.mask-img', {
            scaleX: isMobile ? '4' : '3',
            scaleY: isMobile ? '4' : '3',
            z: '1',
            y: isMobile ? '-40vh' : '0',
        })

        var bg = gsap.timeline({
            scrollTrigger: {
                markers: false,
                trigger: '#second',
                start: 'top center',
                end: 'top =200',
                scrub: true,
            },
        });

        bg.to('.video-cover', {
            opacity: '0.7',
            duration: '1'

        })
        const lenis = new Lenis({
            duration: 3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            smoothTouch: false,
            touchMultiplier: 2,
          })
          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
          requestAnimationFrame(raf)

       /*  const lenis = new Lenis({
            duration: 2,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            smoothTouch: false,
            touchMultiplier: 2,
        })
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => {
            lenis.raf(time * 2000)
        })
        gsap.ticker.lagSmoothing(0) */

        gsap.set('.second-up', {
            scale: '0.7',
            opacity: '0'
        })
        gsap.set('.third-up', {
            scale: '0.7',
            opacity: '0'
        })
        var secondUp = gsap.timeline({
            scrollTrigger: {
                markers: false,
                trigger: '.second-up',
                start: 'top top+=80%',
                end: 'top top+=60%',
                scrub: true,
            }
        })

        secondUp.to('.second-up',
            {
                opacity: '1',
                scale: '1'
            })
        var thirdUp = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '.third-up',
                    markers: false,
                    scrub: true,
                    start: 'top top+=80%',
                    end: 'top top+=60%',
                },
            }

        )
        thirdUp.to('.third-up', {

            opacity: '1',
            scale: '1',
            duration: '1'
        })

        gsap.set('.line-up',{
                 opacity: 0,
                rotationX: -100,
                force3D: true,
                transformOrigin: "top center -100",
        })
        gsap.to('.line-up',
            {
                scrollTrigger: '.line-up',
                duration: 0.5,
                opacity: 1,
                rotationX: 0,
                force3D: true,
                transformOrigin: "top center -100",
                stagger: 0.2
            })

        var sections = gsap.utils.toArray('.scale-up');
        sections.forEach((section) => {
            let tl = gsap.timeline({
                onStart: () => {
                    let opacityFull = gsap.timeline({
                        scrollTrigger: {
                            markers: false,
                            trigger: '.video-cover',
                            start: 'bottom',
                            stop: 'bottom=100',
                            scrub: true
                        }
                    })
                    opacityFull.to('.video-cover', {
                        opacity: '1'
                    })
                },
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom ',
                    end: 'top =50%',
                    markers: false,
                    scrub: true,
                }
            })

            tl.from(section, {
                scale: '0.8',
            });
        })

        var projects = gsap.utils.toArray('.project-item');
        projects.forEach((project) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    start: 'top bottom-=50 ',
                    end: 'top =50%',
                    markers: false,
                    scrub: true,
                }
            })

            tl.from(project, {

            });
        })

        var slideUps = gsap.utils.toArray('.slide-up');
        slideUps.forEach((slideUp) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slideUp,
                    start: 'top bottom ',
                    end: 'top =50%',
                    markers: false,
                    scrub: true,

                }
            })
            tl.addLabel('start')
                .from(slideUp, {
                    y: '15vw',
                });
        })

        let mm = gsap.matchMedia();
        mm.add("(max-width: 1024px)", () => {
            var mainBtns = gsap.utils.toArray('.main-btn');
            mainBtns.forEach((mainBtn)=>{
               gsap.to(mainBtn, {
              
                duration: 0.7,
                paddingRight: '0px',
               });
               gsap.to(mainBtn.querySelector('.point'),{
                duration: 0.7,
                background: '#fff',
                right: '14px'
               });
               gsap.to(mainBtn.querySelector('.main-text'),{
                duration: 0.7,
                background: '#8d95f9',
                borderColor: '#8d95f9',
                color: '#1823A7',
                paddingRight: '44px'
               })
            })
        })
        
        const isTouchDevice = 'ontouchstart' in window;
        const createCursorFollower = () => {
            const el = document.querySelector('.cursor-follower');
            if (el) {
                window.addEventListener('mousemove', (e) => {
                    const { target, x, y } = e;
                    const isTargetLinkOrBtn = target?.closest('.cursor-grab');
                    // GSAP config
                    gsap.to(el, {
                        duration: 0.3,
                        x: x - 16,
                        y: y - 16,
                    })
                });
            }


            document.querySelector('.cursor-grab')?.addEventListener('mouseenter', (e) => {
                gsap.to(el, {
                    duration: 0.3,
                    opacity: 1,
                    scale: 1
                });
            });
            document.querySelector('.cursor-grab')?.addEventListener('mouseleave', (e) => {
                gsap.to(el, {
                    duration: 0.3,
                    opacity: 0,
                    scale: 0.2
                });
            });
        };

        // Only invoke the function if isn't a touch device
        if (!isTouchDevice) {
            createCursorFollower();
        }
    }

    let counterTargets = document.querySelectorAll(".counterUp");

    let observerCounter = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is_visible");
                setTimeout(() => {
                    letCount();
                }, 1000);
            }
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        });
    });

    if (counterTargets.length > 0) {
        counterTargets.forEach((target) => {
            observerCounter.observe(target);
        });
    }
}

/**
 * counter animation
 */

function letCount() {
    const counters = document.querySelectorAll(".counterUp");
    const speed = 100; // The lower the slower

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            // Lower inc to slow and higher to slow

            const inc = target > speed ? target / speed : 1;

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                let num = Math.round(count + inc);
                console.log(num.toLocaleString())
                counter.innerText = num;
                // Call function every ms
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });


}