//module.js:

function insert() {
  var dateofBir = document.getElementById("dateofbirth").value;
  var emailNam = document.getElementById("emailname").value;
  var Textnam = document.getElementById("textname").value;
  var Adrassnam = document.getElementById("address").value;
  var passsward = document.getElementById("password").value;
  var pasone = document.getElementById("passwordnameone").value;

  if (Validate(Textnam, emailNam, dateofBir, Adrassnam, passsward, pasone)) {
    var table = `<tr>
<td>${Textnam}</td>
<td>${emailNam}</td>
<td>${dateofBir}</td>
<td>${passsward}</td>
<td>${pasone}</td>
<td>${Adrassnam}</td>
</tr>`;
    document.getElementById("tablletext").innerHTML += table;
    alertMessage(
      "Success",
      "Result has been calculated successfully.",
      "successfully!"
    );
  }
}
function Validate(Textnam, emailNam, dateofBir, Adrassnam, passsward, pasone) {
  if (Textnam == "") {
    alertMessage("Error", "Please enter User", " * Name");
  } else if (emailNam == "") {
    alertMessage("Error", "Please enter Your Email", " * Email");
  } else if (dateofBir == "") {
    alertMessage("Error", "Please enter Dateofbirth", " *Date Of Birth ");
  } else if (Adrassnam == "") {
    alertMessage("Error", "Please enter Address", " *Address");
  } else if (passsward === "") {
    alertMessage("Error", "Please enter Password", " *Password");
  } else if (pasone === "") {
    alertMessage("Error", "Please enter ConfirmPassword", " *ConfirmPassword");
  } else {
    return Textnam, emailNam, dateofBir, Adrassnam, passsward, pasone;
  }
}
function alertMessage(typeError, messageError, reasonError) {
  var Type = (document.getElementById("type").innerHTML = typeError);
  let message = (document.getElementById("message").innerHTML = messageError);
  let reason = (document.getElementById("reason").innerHTML = reasonError);
}
