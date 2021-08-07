// require('./bootstrap');

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  // console.log(scroll)
});

$('.navmenu-btn').click(()=>{
	$('#navmenu').toggleClass('hidden')
  $('body').toggleClass('overflow-hidden')
	if($('#navmenu').hasClass('hidden')){
		$('.navmenu-btn').html('<i class="fas fa-ellipsis-h"></i>')
	}else{
		$('.navmenu-btn').html('<i class="fas fa-times" style="margin-right:1rem"></i>')
	}
})