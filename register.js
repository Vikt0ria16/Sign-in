
function redirectToInfotelecom() {
    var password1 = document.getElementById("psw1").value;
    var password2 = document.getElementById("psw2").value;
    
    if (password1 !== password2) {
        document.getElementById("error-message").innerHTML = "Please check the passwords!";
        return; 
    }

    window.location.href = "https://infotelecom-ics.com/sq/krye/";
    
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        redirectToInfotelecom(); 
    });
});



    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector("form").addEventListener("reset", function() {
            var inputs = document.querySelectorAll("input");
            inputs.forEach(function(input) {
                input.value = ""; 
            });

            var textarea = document.querySelector("textarea");
            textarea.value = ""; 
        });
    });


   
