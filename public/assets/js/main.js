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
            spaceBetween: 24,
            speed: 600,

            // If we need pagination
            breakpoints: {
                768: {
                    slidesPerView: 2.2,
                },
                1024: {
                    slidesPerView: 1.4,
                    slidesOffsetAfter: 44,
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
    }
if(typeof gsap !== 'undefined' || gsap !== null){
//gsap.registerPlugin(Observer)
gsap.registerPlugin(ScrollTrigger);

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
  // Each time the mouse coordinates are updated,
  // we need to pass the values to gsap in order
  // to animate the element
  window.addEventListener('mousemove', (e) => {
    const { target, x, y } = e;
    // Check if target is inside a link or button
    const isTargetLinkOrBtn = target?.closest('.references-slider') ;
    // GSAP config
    gsap.to(el, {
      x: x - 16,
      y: y - 16,
      //duration: 0.7,
      //ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
      opacity: isTargetLinkOrBtn ? 1 : 0,
    });
  });
  // Hidding the cursor element when the mouse cursor
  // is moved out of the page
  document.addEventListener('mouseleave', (e) => {
    gsap.to(el, {
      //duration: 0.7,
      opacity: 0,
    });
  });
};

const slideScale =()=>{
    const swiperContainer = document.querySelector('.references-slider')
    const slidesList = document.querySelectorAll('.swiper-slide')
    swiperContainer.addEventListener('click', (e)=>{
        console.log('click')
        slidesList.forEach((item=>{
            item.style.transform ='scale(0.9)'
        }))
    })
    swiperContainer.addEventListener('mouseup', (e)=>{
        slidesList.forEach((item=>{
            item.style.transform ='scale(1)'
        }))
    })
}
// Only invoke the function if isn't a touch device
if (!isTouchDevice) {
  createCursorFollower();
  slideScale();
}
}

    
}