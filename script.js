function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
  }
}

function test() {
	alert("item clicked")
}