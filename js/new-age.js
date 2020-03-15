var loop_video;
var video1;
var video2;
var video3;
var video4;
var video5;
var video6;

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    modal_close();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

 

  setTimeout(function () {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag
      .parentNode
      .insertBefore(tag, firstScriptTag);

      var siteStellar = function() {
        $(window).stellar({
          responsive: false,
          parallaxBackgrounds: true,
          parallaxElements: true,
          horizontalScrolling: false,
          hideDistantElements: false,
          scrollProperty: 'scroll'
        });
      };
      siteStellar();
  }, 300);

  $('.close-modal').click(function () {
    modal_close();
  });

})(jQuery); // End of use strict

function onYouTubeIframeAPIReady() {
  loop_video = new YT.Player('loop_video', {
    width: '100%',
    videoId: 'aCKtJvNOld0',
    events: {
      'onReady': onLoopPlayerReady,
      'onStateChange': onLoopPlayerStateChange
    }
  });

  video1 = new YT.Player('video1', {
    width: '100%',
    videoId: 'hJuHVgCmoSw',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  video2 = new YT.Player('video2', {
    width: '100%',
    videoId: 'sTUkary3hFw',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  video3 = new YT.Player('video3', {
    width: '100%',
    videoId: 'BpVwH1zmVSI',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  video4 = new YT.Player('video4', {
    width: '100%',
    videoId: 'H3Ex52Rmbtk',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  video5 = new YT.Player('video5', {
    width: '100%',
    videoId: 'nQnzZKfBa9o',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });

  video6 = new YT.Player('video6', {
    width: '100%',
    videoId: 'ZSdsWVqKleA',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onLoopPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}

function onLoopPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.stopVideo();
  }
}

function modal_close() {
  if (video1 !== null && video1 !== undefined) {
    video1.pauseVideo();
  }
  if (video2 !== null && video2 !== undefined) {
    video2.pauseVideo();
  }
  if (video3 !== null && video3 !== undefined) {
    video3.pauseVideo();
  }
  if (video4 !== null && video4 !== undefined) {
    video4.pauseVideo();
  }
  if (video5 !== null && video5 !== undefined) {
    video5.pauseVideo();
  }
  if (video6 !== null && video6 !== undefined) {
    video6.pauseVideo();
  }
}