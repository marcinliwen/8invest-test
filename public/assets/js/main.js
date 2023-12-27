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

        function desktop(){
            var tl = gsap.timeline({
                scrollTrigger: {
                    markers: true,
                    trigger: "#top",
                    //pin: true, // pin the trigger element while active
                    start: "top 120px", // when the top of the trigger hits the top of the viewport
                    end: "bottom -=500px", // end after scrolling 500px beyond the start
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    //snap: {
                    //    snapTo: "labels", // snap to the closest label in the timeline
                    //    duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                     //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                    //    ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                    //}
                }
            })
            tl
                .from('.bg-image', {
                    width: '50vw',
                    height: '50vw',
                    scale: '1, 1',
                   top: '-28%'
                    
                })
               .to('.bg-image', {
                width: '100%',
                height: '100%',
                    borderRadius: '0',
                   top: '0'
                }) 

                return tl;
        }
        function mobile(){
            var tl = gsap.timeline({
                scrollTrigger: {
                    markers: true,
                    trigger: "#top",
                    //pin: true, // pin the trigger element while active
                    start: "top 120px", // when the top of the trigger hits the top of the viewport
                    end: "bottom ", // end after scrolling 500px beyond the start
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    //snap: {
                    //    snapTo: "labels", // snap to the closest label in the timeline
                    //    duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                     //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                    //    ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                    //}
                }
            })
            tl
                .from('.bg-image', {
                    width: '120px',
                    height: '120px',
                    top: '-10%'
                    
                })
               .to('.bg-image', {
                width: '100%',
                height: '100%',
                borderRadius: '0',
                   top: '10%',
                }) 

                return tl;
        }
        
        
        
        
        let mm = gsap.matchMedia();

       mm.add('(min-width: 768px)', ()=>{
        var tl = gsap.timeline({
            scrollTrigger: {
                markers: true,
                trigger: "#top",
                //pin: true, // pin the trigger element while active
                start: "top 120px", // when the top of the trigger hits the top of the viewport
                end: "bottom -=500px", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                //snap: {
                //    snapTo: "labels", // snap to the closest label in the timeline
                //    duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                 //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                //    ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                //}
            }
        })
        tl
            .from('.bg-image', {
                width: '50vw',
                height: '50vw',
                scale: '1, 1',
               top: '-28%'
                
            })
           .to('.bg-image', {
            width: '100%',
            height: '100%',
                borderRadius: '0',
               top: '0'
            }) 

       });
        mm.add('(max-width: 767px)',()=>{
            var tl = gsap.timeline({
                scrollTrigger: {
                    markers: true,
                    trigger: "#top",
                    //pin: true, // pin the trigger element while active
                    start: "top 120px", // when the top of the trigger hits the top of the viewport
                    end: "bottom", // end after scrolling 500px beyond the start
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    //snap: {
                    //    snapTo: "labels", // snap to the closest label in the timeline
                    //    duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                     //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                    //    ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
                    //}
                }
            })
            tl
                .from('.bg-image', {
                    width: '80vw',
                    height: '80vw',
                    top: '-10%',
                   
                    
                })
               .to('.bg-image', {
               
                borderRadius: '0',
                   top: '-10%',
                  
                }) 
        } )


        



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
}