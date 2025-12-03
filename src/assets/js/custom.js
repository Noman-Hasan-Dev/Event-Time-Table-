(function ($) {
    "use strict";

    // Sticky Header
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Sidebar Modal
    $(".burger-menu").on('click', function () {
        $('.sidebar-modal').toggleClass('active');
    });
    $(".sidebar-modal-close-btn").on('click', function () {
        $('.sidebar-modal').removeClass('active');
    });

    // Search Popup JS
    $('.close-btn').on('click', function () {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });
    $('.search-btn').on('click', function () {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });

    // Nice Select JS
    $('select').niceSelect();

    // Partner Slides
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });

    // Projects Slides
    $('.projects-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Feedback Slides
    $('.feedback-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1550: {
                items: 4,
            }
        }
    });

    // Button Hover JS
    $('.default-btn')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        });

    $('.optional-btn')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        });

    // Odometer JS
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Popup Image
    // $('.popup-btn').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true,
    //     }
    // });
      $(document).ready(function () {
          $(".gallery").magnificPopup({
              delegate: "a",
              type: "image",
              gallery: {
                  enabled: true,
              },
          });
      });

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // WOW JS
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 20, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    // Pricing tabs
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // Team Slides
    $('.team-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });

    // Work Slides
    $('.work-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            930: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    // SEO Banner Slider
    $('.seo-banner-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight:true,
        mouseDrag: false,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    });

    $(".seo-banner-slider").on("translate.owl.carousel", function(){
        $(".seo-banner h1, .seo-banner p").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
        $(".seo-banner .banner-btn").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
    });
    
    $(".seo-banner-slider").on("translated.owl.carousel", function(){
        $(".seo-banner h1, .seo-banner p").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
        $(".seo-banner .banner-btn").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
    });

    // IT Banner Slider
    $('.it-banner-image').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        animateOut: 'fadeOut',
        dots: false,
        margin: 0,
        autoplayHoverPause: true,
        autoplay: true,
    });

    // Machine learning slider
    $('.machine-learning-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        margin: 0,
        autoplayHoverPause: true,
        autoHeight:true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    });

    $(".machine-learning-slider").on("translate.owl.carousel", function(){
        $(".machine-learning-banner h1, .machine-learning-banner p").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
        $(".machine-learning-banner .banner-btn").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
    });
    
    $(".machine-learning-slider").on("translated.owl.carousel", function(){
        $(".machine-learning-banner h1, .machine-learning-banner p").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
        $(".machine-learning-banner .banner-btn").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
    });

    // FAQ Accordion
    $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    // ToolTip
    $('[data-toggle="tooltip"]').tooltip();

    $('.value-trade-slides').owlCarousel({
		nav: false,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		
		responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            },
            1400: {
                items: 3,
            },
            1600: {
                items: 4,
            }
        }
	});

    // Unique Feedback Slides
    $('.unique-feedback-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            },
            1550: {
                items: 2,
            }
        }
    });

    // Partner Slides
    $('.cs-partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 7,
            },
            1600: {
                items: 8,
            }
        }
    });

}(jQuery));