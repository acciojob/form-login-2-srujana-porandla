//your JS code here. If required.
function displaInfo() {
	var FirstName=document.getElementById('f').value;
	var LastName=document.getElementById('l').value;
	var PhoneNum=document.getElementById('n').value;
	var email=document.getElementById('e').value;

	var message=`First Name: ${FirstName} Last Name: ${LastName} Phone Number: ${ PhoneNum} Email ID: ${email}`;
	alert(message);
	
}
