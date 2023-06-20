
    function validateForm() {
  var email = document.getElementById("email").value;
  var gender = document.getElementById("gender").value;
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var occupation = document.getElementById("occupation").value;
  var maritalStatus = document.getElementById("marital_status").value;
  var emergencyName = document.getElementById("emergency_name").value;
  var emergencyEmail = document.getElementById("emergency_email").value;
  var emergencyPhone = document.getElementById("emergency_phone").value;

  if (email === "" || gender === "" || firstName === "" || lastName === "" || address === "" || phone === "" ||
    occupation === "" || maritalStatus === "" || emergencyName === "" || emergencyEmail === "" || emergencyPhone === "") {
    alert("Please fill in all required fields.");
    return false;
  }
}
  ;
  const myNodelist = document.querySelectorAll("label");

document.getElementById("demo").innerHTML = "This form contains " + myNodelist.length + " questions.";