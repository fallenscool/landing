$('.section-products__filter a').click(function(e) {
	e.preventDefault();
	$('.section-products__filter a').removeClass('active');
	$(this).addClass('active');
	if(this.id != "all"){
		$('.section-products__products div').not('.'+this.id).hide();
		$('.'+this.id).show();}
	else{
		$('.section-products__products div').show();
	}
});
