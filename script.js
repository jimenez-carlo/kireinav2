function docid(id){ return document.getElementById(id); } 
// Index Carousel
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slide-pagination");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}
// Index Carousel End


// Index Tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  docid(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
docid("defaultOpen").click();

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
  email_body = "Name: "+name;
  email_body += "\nPhone: "+phone;
  email_body += "\nMessage:";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Message has been sent!");
    }
  };
  xhttp.open("POST", "https://formspree.io/f/xoqpgwoa", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("message="+email_body+"&"+email);
}