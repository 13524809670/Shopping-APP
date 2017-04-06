window.onload= function(){

    //轮播图
	var swiper = new Swiper('.banner .swiper-container', {
        pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });


     var swipera = new Swiper('.con1 .swiper-container', {
        // pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 10
    });
}