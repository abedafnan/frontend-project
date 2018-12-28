function validateForm() {
	var name = document.forms["contactForm"]["name"];               
    var email = document.forms["contactForm"]["email"];    
    var subject = document.forms["contactForm"]["subject"];  
    var message =  document.forms["contactForm"]["message"];  

    if (name.value == "") { 
        window.alert("Name must be filled out"); 
        name.focus(); 
        return false; 
	} 

    if (email.value == "") {                           
        window.alert("Email must be filled out"); 
        email.focus(); 
        return false; 
    } 

    if (subject.value == "") { 
        window.alert("You must specify a subject"); 
        subject.focus(); 
        return false; 
	} 

    if (message.value == "") {                           
        window.alert("You must write a message"); 
        message.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0) {
        window.alert("You must enter a valid e-mail address"); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0) {
        window.alert("You must enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    return true;   
}

var imageCounter = 1;
var total = 5;
var image = "";
var folder = "images/"

function slider(x) {
	if (x > 0) {
		imageCounter++;
	} else {
		imageCounter--;
	}

	if (imageCounter > total) {
		imageCounter = 1;
	} else if (imageCounter < 1) {
		imageCounter = 5;
	}
	
	image = document.getElementById("slider_image");
	image.src = folder + imageCounter + (".png");
}

function slideNext() {
	slider(1);
}

function slidePrev() {
	slider(-1);
}