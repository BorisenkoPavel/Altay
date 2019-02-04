$(function() {

	var slider =  $('.carousel-slick').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		vertical: true,
		autoplay: true,
		responsive: [
			{	
				breakpoint: 576,
				settings: {
					dots: false,
					vertical: false,
				}
			},
		]
	});

  var sliderHotel = $('.hotel-slick').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
	});

	var sliderReview = $('.review-slider').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
		centerPadding: '0px',
		infinite: true,
		initialSlide: 1,
		responsive: [
			{	
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					initialSlide: 0,
					centerMode: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					initialSlide: 0,
				}
			}
		]
		// autoplay: true,
	});

	$('.slider-company').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					dots: false,
					autoplay: true,
				}
			}
		]
	});

	$('.hotel-breackfast__slider').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					dots: false,
					autoplay: true,
				}
			}
		]
	});

	$('.slider-hotel-item').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					dots: false,
					autoplay: true,
				}
			}
		]
	});

	$("select").dropdown({
	  });

	$('.nav__next').on('click', function() {
		$(slider).slick('slickNext');
	  });

	$('.nav__prev').on('click', function() {
		$(slider).slick('slickPrev');
		});
		
	$('.hide-menu-button').on('click', function(){
		if ( $('.menu').hasClass('active') ) {
			$('.menu').css({left: '-300px'});
			$('.menu').removeClass('active');
			$('.main-content').css({'padding-left': '0'});
			$(this).html('<i class="fas fa-arrow-right"></i>');
			$(this).css({left: '0px'});
		} else {
			$('.menu').css({left: '0'});
			if ($(window).width() > 992) {
				$('.main-content').css({'padding-left': '300px'});
			}
			$('.menu').addClass('active');
			$(this).html('<i class="fas fa-arrow-left"></i>');
			$(this).css({left: '300px'});
		}
	})

	// var addAction = function() {
	// 	if ( $(window).width() < 1111 ) {
	// 		$('.menu').removeClass('active');
	// 	}
	// }


	$('.mobile-button-menu').on('click', function(){
		$('.mobile-menu').slideToggle(300);
		if ( $(this).hasClass('active') ) {
			$(this).html('<i class="far fa-bars"></i>');
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).html('<i class="far fa-times"></i>');
			
		}
	})
	
	$('.hotel-item__nav').children().on('click', function(){
		if ( $(this).hasClass('active') ) {
			$('.hotel-item__nav').children('li').removeClass('active');
		} else {
			$('.hotel-item__nav').children('li').removeClass('active');
			$(this).addClass('active');
			
		}
	})

	$('.nav-hotel__next').on('click', function() {
		$(sliderHotel).slick('slickNext');
	  });

	$('.nav-hotel__prev').on('click', function() {
		$(sliderHotel).slick('slickPrev');
		});
		
	$('.nav-review__next').on('click', function() {
		$(sliderReview).slick('slickNext');
	  });

	$('.nav-review__prev').on('click', function() {
		$(sliderReview).slick('slickPrev');
		});


	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 350);
	});


	$(function(){
		if ( $(window).width() > 480 ) {
			$('.contacts-block').height($('.contacts-block').width()/1.7);
	  
			$(window).resize(function(){
			$('contacts-block').height($('contacts-block').width()/1.7);
			});
		}
	  });

	$(function(){
		if ( $(window).width() < 576 ) {
			$('iframe').height($('iframe').width()/1.5);
	  
			$(window).resize(function(){
			$('iframe').height($('iframe').width()/1.5);
			});
		}
		
	  });
	  
	$(function(){
		$('.catalog-item').height($('.catalog-item').width()/1.7);
	  
		$(window).resize(function(){
		$('.catalog-item').height($('.catalog-item').width()/1.7);
		});
		
	  });
	
});
