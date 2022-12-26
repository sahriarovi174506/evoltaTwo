(function ($) {
  "use strict";
  $(document).on("ready", function () {
    $(".Slider_active").slick({
      arrows: true,
      infinite: true,
      slidesToShow: 2,
      centerMode: true,
      centerPadding: "200px 0px 0px",
      responsive: [
        {
          breakpoint: 1168,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 876,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 499,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
      ],
    });

    // testimonial Slider
    $(".testimonial_slider").slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });
})(jQuery);
