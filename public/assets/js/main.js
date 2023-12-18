window.onload = () => {
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
    
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 600,
            
            // If we need pagination
            breakpoints:{
                768:{
                    slidesPerView: 2.2,
                },
                1024:{
                    slidesPerView: 1.4,
                    slidesOffsetAfter: 44,
                },
                1280:{
                    slidesPerView: 2.2,
                    slidesOffsetAfter: 44,
                },
                1700:{
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
                resize: function(swiper){
                    console.log(swiper.slidesSizesGrid[0])
                leftDistance = swiper.slidesSizesGrid[0] + 12;
                document.getElementById('drag').style.left = leftDistance +"px";
                }
            }
            
          });

    
}