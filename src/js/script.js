$(function() {
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});


$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  // autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.post-wrapper2').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  // autoplaySpeed: 2000,
  nextArrow: $('.next2'),
  prevArrow: $('.prev2'),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  

// Form

let form = $('.form-contact');

form.validate({
    errorElement: 'span',
    rules: {
        nome: 'required',
        email: {
            required: true,
            email: true
        },
        phone: 'required',
        text:'required',
        // subject:'required',
    },
    messages: {
        nome: 'Por favor, digite o seu nome',
        email: {
        required: 'Por favor, digite seu e-mail',
        email: 'Por favor, digite um e-mail válido'
        },
        phone:'Por favor, digite seu telefone',
        text:'Por favor, digite uma mensagem',
        // subject:'Por favor, escolha um assunto',
    },
});


    
