var typed =new Typed(".typing",{
    strings:["andi bitrus", "web dev", "hacker"],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
})

function sendEmail(){
   
    Email.send({
        
        secureToken: "bff375ec-65cb-469b-85cb-1750454c9719",
        To : 'ringzsystems@gmail.com',
        From : 'ringzsystems@gmail.com',
        ReplyFrom : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value 
        + "<br>Email: " + document.getElementById("email").value
        + "<br>Subject: " + document.getElementById("subject").value
        + "<br>Message: " + document.getElementById("message").value

      
    }).then(
      message => alert("Thankyou," + document.getElementById("name").value + "  your message has been sent")
    );
}
