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
  //Native javascript ajax 
  var xhttp = new XMLHttpRequest();
  var name    = docid('name')   .value;
  var phone   = docid('phone')  .value;
  var message = docid('message').value;
  var email   = docid('email')  .value;
  var email_body ="";
  email_body = "Email: "+email;
  email_body = "\nName: "+name;
  email_body += "\nPhone: "+phone;
  email_body += "\nMessage:"+message;
  xhttp.onreadystatechange = function() {
  };
  xhttp.open("POST", "https://formspree.io/f/xoqpgwoa", true);
  xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhttp.send("message="+email_body+"&"+email);
    alert("Message has been sent!");
    docid("message-form").reset();
}

var form = document.getElementById("message-form");
    
    async function handleSubmit(event) {
    var name    = docid('name')   .value;
    var phone   = docid('phone')  .value;
    var message = docid('message').value;
    var email   = docid('email')  .value;
    var email_body ="";
  email_body = "Email: "+email;
  email_body = "\nName: "+name;
  email_body += "\nPhone: "+phone;
  email_body += "\nMessage:"+message;
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: {'message':email_body,'email':email},
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)