window.onload = () => {
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

    if (typeof Swiper !== 'undefined') {


        const swiper = new Swiper('.swiper', {
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
                    //document.getElementById('drag').style.left = leftDistance + "px";
                },
                resize: function (swiper) {
                    console.log(swiper.slidesSizesGrid[0])
                    leftDistance = swiper.slidesSizesGrid[0] + 12;
                    //document.getElementById('drag').style.left = leftDistance + "px";
                }
            }

        });
        swiper.on('touchStart', (_) => {
            TweenMax.to('.reference-slide', 0.4, { scale: 0.9 })
        })
        swiper.on('touchEnd', (_) => {
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
                //markers: false,
                trigger: "#top",
                start: "top-=121", // when the top of the trigger hits the top of the viewport
                end: "bottom -=900", // end after scrolling 500px beyond the start
                scrub: 1,
                toggleAction: 'play none none reverse',
                pin: false, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // snap: {
                //    snapTo: "labels", // snap to the closest label in the timeline
                //    duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                //ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                //},

            }
        })
        tl.to('.mask-img', {
            scaleX: '7',
            scaleY: '7',
            z: '1'
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
       

        /* const lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => {
            lenis.raf(time * 700)
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
        gsap.from('.line-up',
            {
                scrollTrigger: '.line-up',
                duration: 0.5,
                opacity: 0,
                rotationX: -100,
                force3D: true,
                transformOrigin: "top center -100",
                stagger: 0.2
            })

        var sections = gsap.utils.toArray('.scale-up');
        sections.forEach((section) => {
            let tl = gsap.timeline({
                onStart: ()=>{
                    let opacityFull = gsap.timeline({
                        scrollTrigger:{
                            markers: false,
                            trigger: '.video-cover',
                            start: 'bottom',
                            stop: 'bottom=100',
                            scrub: true
                        }
                    })
                    opacityFull.to('.video-cover',{
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
        const isTouchDevice = 'ontouchstart' in window;
        const createCursorFollower = () => {
            const el = document.querySelector('.cursor-follower');
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

            document.querySelector('.cursor-grab').addEventListener('mouseenter', (e) => {
                gsap.to(el, {
                    duration: 0.3,
                    opacity: 1,
                    scale: 1
                });
            });
            document.querySelector('.cursor-grab').addEventListener('mouseleave', (e) => {
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
         
          counter.innerText = Math.round(count + inc);
          // Call function every ms
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  
  
  }