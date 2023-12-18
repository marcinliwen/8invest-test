window.onload = () => {
    console.log('mainpage loaded')

    
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