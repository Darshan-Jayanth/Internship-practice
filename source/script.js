function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "codewithd034@gmail.com",
    Password: "DarJay@019",
    To: "codewithd034@gmail.com",
    From: document.getElementById("floatingEmail").value,
    Subject: "New COntact form Enquiry",
    Body:
      "Name: " +
      document.getElementById("floatingInput").value +
      "<br /> Email: " +
      document.getElementById("floatingEmail").value +
      "<br /> COntact: " +
      document.getElementById("floatingNumber").value +
      "<br /> Message: " +
      document.getElementById("floatingMessage").value,
  }).then((message) => alert(message));
}
