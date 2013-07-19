window.onload=comment_initAll;
function comment_initAll(){
	document.getElementsByTagName("form")[1].onsubmit=comment_addNode;
}
function comment_addNode(){
	var inText1=document.getElementById("comment_title").value;
	var inText2=document.getElementById("comment_who").value;
	var inText3=document.getElementById("comment_content").value;
	var newText1=document.createTextNode(inText1+"_"+inText2);
	var newText3=document.createTextNode(inText3);
	var newGraf1=document.createElement("h4");
	newGraf1.appendChild(newText1);
	var newGraf=document.createElement("p");
	newGraf.appendChild(newText3);
	var docBody=document.getElementById("add_content");
	docBody.appendChild(newGraf1);
	docBody.appendChild(newGraf);
	docBody.firstChild(newGraf1);
	docBody.firstChild(newGraf);
	return false;
}