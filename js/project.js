// Your code here.

// FREEBIES! Blank-out the inputs onfocus.


document.getElementById("roster").onclick = rosterAppear; 

function rosterAppear ()
{

	document.querySelector("div").style.display = "block";
	document.getElementById("assignblock").style.display = "none";
	document.querySelector("#roster").classList.add("selected");
	document.querySelector("#assign").classList.remove("selected");

	
}

document.getElementById("assign").onclick = assignAppear; 

function assignAppear ()
{
	document.getElementById("assignblock").style.display = "block";
	document.querySelector("div").style.display = "none";
	document.querySelector("#assign").classList.add("selected");
	document.querySelector("#roster").classList.remove("selected");
	
	
	document.getElementById("name").onfocus = clearName;
    document.getElementById("grade").onfocus = clearGrade;

    
    function clearName() {
    document.getElementById("name").value="";
    }

    function clearGrade() {
    document.getElementById("grade").value="";
    }
    
    document.getElementById("clickme").onclick = button;

    function button(){
    var studentName = document.getElementById("name").value;
    var level = document.getElementById("grade").value;
    if (level >=100){
    var realGrade = "A+";
    }
    else if(level>=90){
    var realGrade = "A";
    }
    else if (level>=87) {
     var realGrade = "A-";	
    }
    else if (level>=83) {
     var realGrade = "B+";	
    }
    else if (level>=80) {
     var realGrade = "B";	
    }
    else if (level>=77) {
     var realGrade = "B-";	
    }
    else if (level>=74) {
     var realGrade = "C+";	
    }
    else if (level>=71) {
     var realGrade = "C";
    }
    else if (level>=68) {
     var realGrade = "C-";
    }
    else if (level>=65) {
     var realGrade = "D+";
     }
    else if (level>=62) {
     var realGrade = "D";
    }
    else if (level>=60) {
     var realGrade = "D-";	
    }
    else {
     var realGrade = "F";	
    }
    document.getElementById("reportcard").innerHTML=document.getElementById("reportcard").innerHTML+"<li>"+studentName+","+realGrade+"</li>";
    document.getElementById("reportcard").style.display="block";
    }

}   

 

