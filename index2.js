var password = "Alexa";

function passcheck() {

if(document.getElementById('pass1').value != password) {
alert('Wrong Passcode. Hmm... baka hindi naka capital yung first letter.');
return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct!. Wow sya nga. Click OK to Continue.');
}
}