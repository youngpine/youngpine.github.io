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
	var bgChange=document.getElementById("nav");
	var bgChange1=document.getElementById("name");
	for(var i=0;i<bgChange.childNodes.length;i++){
		var bgChanges=bgChange.childNodes[i];
		for(var j=0;j<bgChanges.childNodes.length;j++){
		   bgChanges.childNodes[j].onmouseover=changeColorover;
		   bgChanges.childNodes[j].onmouseout=changeColorout;
		}
	}	
	bgChange1.onmouseover=changeColorover;
	bgChange1.onmouseout=changeColorout;
}
function changeColorover(){
	this.style.background="#fff";
} 
function changeColorout(){
	this.style.background="#f3dfba";
} 