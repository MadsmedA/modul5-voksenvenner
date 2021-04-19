console.log ("javascript is running");

let mail = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
let email = document.getElementById("email");
console.log (email);
let emne = document.getElementById("emne");
let beskrivelse = document.getElementById("beskrivelse");
let sendknap = document.getElementById("sendknap");

sendknap.addEventListener("click", sendInfo);



function validerEmail () {
  if (email.value === "") {
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
    console.log ("Tak for info")
  }
  else {
    console.log ("Udfyld alle felter")
  }
}
