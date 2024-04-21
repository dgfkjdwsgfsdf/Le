var password = "Jae Ramos";

function passcheck() {

if(document.getElementById('pass1').value != password) {
alert('Wrong Passcode. Hala mali, Look mo baka hindi naka capital yung first letter or walang space.');
return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct!. HAHAHAHAHAHAHA galing noh mhfiuasgfknfahdwa. Okioki click OK daw to continue oh.');
}
}