$('#main-carousel').slick({
          autoplay:true,
          autoplaySpeed:10000,
          arrows:false,
          dots:true,
  adaptiveHeight: true
        });

        $('#we-recommend,#new').slick({
          autoplay:true,
          autoplaySpeed:10000,
          arrows:false,
          dots:true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
                        {
                          breakpoint: 1200,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                          }
                        },
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                          }
                        }
                      ]
        });

        $('#hit,#sale').slick({
          autoplay:true,
          autoplaySpeed:10000,
          arrows:false,
          dots:true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                          }
                        },
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                          }
                        }
                      ]
        });

        $('.brands-wrapper').slick({
          
          autoplaySpeed:10000,
          arrows:false,
          dots:false,
          slidesToShow: 6,
          slidesToScroll: 1,
          responsive: [
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            dots:true
                          }
                        },
                        {
                          breakpoint: 767,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots:true
                          }
                        },
                        {
                          breakpoint: 440,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots:true
                          }
                        }
                      ]
        });


        $('#reccomend-products').slick({
          
          autoplaySpeed:10000,
          arrows:true,
          dots:false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
                        {
                          breakpoint: 499,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots:true
                          }
                        }
                      ]
        });




