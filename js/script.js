function docid(id){ return document.getElementById(id); } 

// Index Tab End

// Contact Us
function openForm() {
  docid("contact-form").style.display = "block"; 
  docid('message-btn').style.display = "none"; 
}

function closeForm() {
  docid("contact-form").style.display = "none";
  docid('message-btn').style.display = "block"; 
}
// Contact Us End


function send_email() {
  var name    = docid('name')   .value;
  var phone   = docid('phone')  .value;
  var message = docid('message').value;
  var email   = docid('email')  .value;
  var email_body ="";
  email_body = "Email: "+email;
  email_body = "\nName: "+name;
  email_body += "\nPhone: "+phone;
  email_body += "\nMessage:"+message;
  $.ajax({
  url: "https://formspree.io/f/xoqpgwoa",
  method: "POST",
  dataType: "json",
  data: {
    Name:name,
    Phone:phone,
    Message: message,
    From: email
  }
});
  alert("Message has been sent!");
  docid("message-form").reset();
}

AOS.init({
  duration: 1200,
})