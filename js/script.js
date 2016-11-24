
/*If the user clicks on the Birdy image it swaps between "sleep" and "awake"*/
$(document).ready(function() {
    // attaching onclick event listener to all images with class img-responsive
    $('.birdy').click(function() {
		
        // get current event target (same as 'this')
	     var $this = $('.birdy');

		//attr() method returns the selectors attribute, it is stored in a variable
        var swap = $this.attr('src');
		
        // set the attribute src to a new value: the value of rel="" from .img-responsive
        $this.attr('src', $this.attr('rel'));
		
        // set rel's value to the old src value
        $this.attr('rel', swap);
    });
});

$(document).ready(function(){

  $('.img-responsive').hover(
    function(){
     $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');
    }
  );

});

