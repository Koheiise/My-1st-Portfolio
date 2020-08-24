// Header Animation

let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
	let windowPosition = window.scrollY > 500;
	header.classList.toggle('active', windowPosition);
});

// NAVIGATION LOGO SCROLL TOP
$('.logo').on('click', function(e) {
  e.preventDefault();
  $('.hamburger-menu').removeClass('menu-open');
  $('.nav-list').removeClass('menu-open');
  $('html, body').animate({
    scrollTop: 0
  }, 100, 'easeInOutQuad')
});


// LINKS TO ANCHORS
$('a[href^="#"]').on('click', function(event) {

  let $target = $(this.getAttribute('href'));

  if($target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top
    }, 100, 'easeInOutQuad');
  }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$('.hamburger-menu').on('click', function() {
  $(this).toggleClass('menu-open');
  $('.nav-list').toggleClass('menu-open');
});

// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.nav-list .nav-link').on('click', function() {
  $('.hamburger-menu').removeClass('menu-open');
  $('.nav-list').removeClass('menu-open');
});

// SHOW/HIDE NAV
// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('show-nav').addClass('hide-nav');
        $('.hamburger-menu').removeClass('menu-open');
        $('.nav-list').removeClass('menu-open');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('hide-nav').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}