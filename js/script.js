"use strict"
$('a.main__scroll-arrow, a.header__menu-link, a.header__title').on('click', function (event) {
	var $anchor = $(this)
	$('html, body')
	.stop()
	.animate(
		{
			scrollTop: $($anchor.attr('href')).offset().top - 150,
		},
		{
			duration: 1000,
			specialEasing: {
				width: 'linear',
				height: 'easeInOutCubic',
			},
		}
	)
	event.preventDefault()
})
document.addEventListener("scroll", function(){
		var elem = document.querySelector(".about");
		document.querySelector(".header").classList[elem.getBoundingClientRect().top < window.innerHeight ? "add" : "remove"]("visible");
});
$(document).ready(function(){
	$(".search__btn").click(function(){
		$(".header__search, .search-form__input, .search__btn").toggleClass("active");
		$("input[type='search']").focus();
	});
	
});
new Swiper('.team__slider',{
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		bulletElement: 'span',
},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".team__slider-image"
	},
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 5000,
	},
});