if(window.screen.width<=991){
    $(".carousel-beneficios").addClass("owl-caracteristicas owl-carousel") 
}else{
    $(".carousel-beneficios").removeClass("owl-caracteristicas owl-carousel")  
}

$('.openMenu').on('click',function(){
    $('#navbarTogglerButton').addClass('show');  
})

$('.closeMenu').on('click',function(){
    $('#navbarTogglerButton').removeClass('show');  
})

$(document).ready(function(){
	// Toggle plus minus icon on show hide of collapse element
	$("#faq .collapse.show").each(function(){
		$(this).siblings(".card-header").find(".icon-faq").html('<img src="assets/icons/icon-minus.svg" />');		
	});	
	$("#faq .collapse").on('show.bs.collapse', function(){
		$(this).parent().find(".card-header .icon-faq").html('<img src="assets/icons/icon-minus.svg" />');
	}).on('hide.bs.collapse', function(){
		$(this).parent().find(".icon-faq").html('<img src="assets/icons/icon-plus.svg" />');
    });
    
	// Toggle plus minus icon on show hide of collapse element    
    $(".owl-caracteristicas").owlCarousel({
        items: 2,
        touchDrag:true,
        fluidSpeed:1,
        mouseDrag:true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 1000,
        navText: ['<i class="lni-arrow-left"></i>', '<i class="lni-arrow-right"></i>'],
        responsive: { 
            322: {
                items: 1
            }, 
            991: {
                items: 2
            }
        }
    });

    $(".owl-testimonios").owlCarousel({
    items: 2,
    touchDrag:true,
    fluidSpeed:1,
    mouseDrag:true,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1000,
    navText: ['<i class="lni-arrow-left"></i>', '<i class="lni-arrow-right"></i>'],
    responsive: { 
    320: {
        items: 1
    }, 
    768: {
        items: 2
    }, 
    992: {
        items: 2
    }, 
    1500: {
        items: 3
    }
    , 
    1920: {
        items: 3
    }
    }
    });
});

