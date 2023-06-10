//module.js:

function insert() {
  var dateofBir = document.getElementById("dateofbirth").value;
  var emailNam = document.getElementById("emailname").value;
  var Textnam = document.getElementById("textname").value;
  var Adrassnam = document.getElementById("address").value;
  var passsward = document.getElementById("password").value;
  var pasone = document.getElementById("passwordnameone").value;
  var table = `<tr>
<td>${Textnam}</td>
<td>${emailNam}</td>
<td>${dateofBir}</td>
<td>${passsward}</td>
<td>${pasone}</td>
<td>${Adrassnam}</td>
</tr>`;
  document.getElementById("tablletext").innerHTML += table;
}
