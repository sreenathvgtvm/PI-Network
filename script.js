function validateform() {
  var fname = document.myForm.firstname.value;
  var lname = document.myForm.lastname.value;
  var emails = document.myForm.email.value;
  var comments = document.myForm.comments.value;

  if (firstname == null || firstname == "") {
    alert("Please fill the name");
    return false;
  } else if (lastname == null || lastfname == "") {
    alert("Please fill the last name");
    return false;
  } else if (emails == null) {
    alert("Please fill the email id");
    return false;
  } else if (comments == null) {
    alert("Please fill the comments");
    return false;
  }
}
