function validateRegisterForm() {
	var password = document.forms["register"]["password"].value;
	var confirmPassword = document.forms["register"]["confirmPassword"].value;
	if (password !== confirmPassword) {
		alert("The confirm Password you input is not the same as Password!");
		return false;
	}
}





