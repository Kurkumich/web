$(document).ready(function(){
	$('.slider').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='https://img.icons8.com/windows/512/long-arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='https://img.icons8.com/windows/512/long-arrow-right.png'>",
		dots: true,
		arrows:true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  }
		]
	  });
});
