(function ($) {
	
	"use strict";

	// Header Scrolling Set White Background
	scrollNavBar();

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 30
				}, 700);
				return false;
			}
		}
	});


	// Blog cover image
	if($('.blog-post-thumb').length){
		$('.blog-post-thumb .img').imgfix();
	}


	// About Us Image
	// if($('.about-image').length){
	// 	$('.about-image').imgfix({
	// 		scale: 1.1
	// 	});
	// }


	// Sidebar contact banner image
	if($('.sidebar .box').length) {
		$('.sidebar .box').imgfix();
	}


	// Home Us Image
	if($('.home-img').length){
		$('.home-img').imgfix({
			scale: 1.1
		});
	}


	// Page standard gallery
	if($('.page-gallery').length && $('.page-gallery-wrapper').length){
		$('.page-gallery').imgfix({
			scale: 1.1
		});

		$('.page-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
			}
		});
  }
  
  if($('.js-base-slider').length) {
    var slider = $('.js-base-slider');
    
    slider.slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    });

    slider.on('wheel', (function (e) {
      e.preventDefault();
  
      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
    }));
  }


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				// Home Parallax
				if($('#parallax-text').length){
					$('#parallax-text').parallax({
						imageSrc: 'assets/images/photos/parallax.jpg',
						zIndex: '1'
					});
				}

				// Home Parallax Counter
				if($('#counter').length){
					$('#counter').parallax({
						imageSrc: 'assets/images/photos/parallax.jpg',
						zIndex: '1'
					});
				}
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
  });

  if ($('.js-video').length) {
    function findVideos() {
      let videos = document.querySelectorAll('.js-video');
    
      for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
      }
    }
    
    function setupVideo(video) {
      let link = video.querySelector('.video__link');
      let media = video.querySelector('.video__media');
      let button = video.querySelector('.video__button');
      let id = parseMediaURL(media);
    
      video.addEventListener('click', () => {
        let iframe = createIframe(id);
    
        link.remove();
        button.remove();
        video.appendChild(iframe);
      });
    
      link.removeAttribute('href');
      video.classList.add('video--enabled');
    }
    
    function parseMediaURL(media) {
      let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
      let url = media.src;
      let match = url.match(regexp);
    
      return match[1];
    }
    
    function createIframe(id) {
      let iframe = document.createElement('iframe');
    
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', generateURL(id));
      iframe.classList.add('video__media');
    
      return iframe;
    }
    
    function generateURL(id) {
      let query = '?rel=0&showinfo=0&autoplay=1';
    
      return 'https://www.youtube.com/embed/' + id + query;
    }
    
    findVideos();
  }


	// Header Scrolling Set White Background
	$(window).on('scroll', function() {
		scrollNavBar();
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


	// Navbar Scroll Set White Background Function
	function scrollNavBar() {
		var width = $(window).width();
		if(width > 991) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
			}else{
				$(".header-area").removeClass("header-sticky");
			}
		}
	}


})(window.jQuery);