function popUpList() 
{
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function popUpList2() 
{
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.t
    oggle("show");
   
}

function popUpList3() 
{
    var popup3 = document.getElementById("myPopup3");
    popup3.classList.toggle("show");
   
}
function popUpList4() 
{
    var popup4 = document.getElementById("myPopup3");
    popup4.classList.toggle("show");
   
}
function changeImage() 
{
    var imageElement = document.getElementById("avtar");
    // Check the current image source
    if (imageElement.src.match("./image/avtar.png")) 
    {
        // Change to a new image on click
        imageElement.src = "./image/jeff2.png";
    } else {
        // Change back to the original image on the next click
        imageElement.src = "./image/avtar.png";
    }
}

function submitForm() 
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // You can customize the email address where the message will be sent
    var recipientEmail = "jlo12845@gmail.com";
  
    var subject = "New Contact Message from " + name;
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  
    // Compose the mailto URL
    var mailtoLink = "mailto:" + recipientEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
    // Open the default email client with the pre-filled message
    window.location.href = mailtoLink;
  }