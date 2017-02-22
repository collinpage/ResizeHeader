/**
 * ResizeHeaderOnScroll
 *
 * @constructor
 */
var ResizeHeaderOnScroll = function()
{
	this.protocol			= window.location.protocol;
	this.domain				= window.location.host;
};

ResizeHeaderOnScroll.prototype.init    = function()
{
	if($(document).scrollTop() > 0)
	{
		$('header').data('size','big');
	} else {
		$('header').data('size','small');
	}

	ResizeHeaderOnScroll.prototype.checkScrolling();

	$(window).scroll(function(){
  		ResizeHeaderOnScroll.prototype.checkScrolling();
	});
};

ResizeHeaderOnScroll.prototype.checkScrolling    = function()
{
  	if($(document).scrollTop() > 0)
	{
	    if($('header').data('size') == 'big')
	    {
	        $('header').data('size','small');
	        $('header').stop().animate({
	            paddingTop:'1em'
	        },200);
	    }
	}
	else
	  {
	    if($('header').data('size') == 'small')
      	{
	        $('header').data('size','big');
	        $('header').stop().animate({
	            paddingTop:'3em'
	        },200);
      	}  
	  }
}

$(document).ready(function(){
	var resizeHeaderOnScroll = new ResizeHeaderOnScroll();
	resizeHeaderOnScroll.init()
})
