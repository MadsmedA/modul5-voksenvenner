console.log ("javascript is running");

let mail = document.getElementById("email");
console.log (email);
let emne = document.getElementById("emne");
let beskrivelse = document.getElementById("beskrivelse");
let sendknap = document.getElementById("sendknap");

sendknap.addEventListener("click", sendInfo);



function validerEmail () {
  if (mail.value === "") {
    alert ("Skriv en email")
    return false
  }
  else {
    return true
  }
}

function validerEmne () {
  if (emne.value === "") {
    alert ("Udfyld emnefelt")
    return false
  }
  else {
    return true
  }
}

function validerBeskrivelse () {
  if (beskrivelse.value === "") {
    alert ("Udfyld beskrivelsesfelt")
    return false
  }
  else {
    return true
  }
}

function sendInfo (e) {
e.preventDefault()
  if (validerEmail() && validerEmne() && validerBeskrivelse()) {
    alert ("Tak for info")
  }
  else {
  }
}
