window.onload=rotate;
var thisImg=0;
function rotate(){
	var sImages=new Array("images/slider.jpg","images/slider1.jpg");
	thisImg++;
	if(thisImg==sImages.length){
		thisImg=0;
	}
	document.getElementById("sliderImg").src=sImages[thisImg];
	setTimeout(rotate,2*1000);
}