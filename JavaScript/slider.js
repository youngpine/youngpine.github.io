window.onload=colorChange;

	var thisImg=0;
function colorChange(){
	var bgChange=document.getElementsByTagName("ul");
	var bgChange1=document.getElementById("name");
	var bgChange2=document.getElementById("nav")
	if(bgChange.childNodes.tagName == "a"){
	  for(var i=0;i<bgChange.childNodes.length;i++){
		var bgChanges=bgChange.childNodes[i];
		for(var j=0;j<bgChanges.childNodes.length;j++){
		   bgChanges.childNodes[j].onmouseover=changeColorover;
		   bgChanges.childNodes[j].onmouseout=changeColorout;
		}
	  }
	}
	bgChange1.onmouseover=changeColorover;
	bgChange1.onmouseout=changeColorout;
	rotate();	
}
function changeColorover(){
	if(bgChange2||bgChange1){
	     this.style.background="#fff";
	}
	else{
		this.style.background="#ebe9e9"
	}
} 
function changeColorout(){
	if(bgChange2){
	    this.style.background="#f3dfba";
	}
	else{
		this.style.background="#fff"
	}
} 
function rotate(){

	var sImages=new Array("images/slider.jpg","images/slider1.jpg");
	thisImg++;
	if(thisImg==sImages.length){
		thisImg=0;
	}
	document.getElementById("sliderImg").src=sImages[thisImg];
	setTimeout(rotate,2*1000);
}