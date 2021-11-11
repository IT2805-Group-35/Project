function validation_mail()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid"
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address"
        text.style.color = "#ff0000";
    }
    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

function validation_tlf()
{
    var form_2 = document.getElementById("form");
    var telephone = document.getElementById("telephone").value;
    var text_2 = document.getElementById("text_2");
    var pattern_2 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (telephone.match(pattern_2))
    {
        form_2.classList.add("valid");
        form_2.classList.remove("invalid");
        text_2.innerHTML = "Riktig format på telefon"
        text_2.style.color = "#00ff00";
    }
    else
    {
        form_2.classList.remove("valid");
        form_2.classList.add("invalid");
        text_2.innerHTML = "Skriv inn riktig format på telefonr"
        text_2.style.color = "#ff0000";
    }
    if (telephone == "")
    {
        form_2.classList.remove("valid");
        form_2.classList.remove("invalid");
        text_2.innerHTML = "";
        text_2.style.color = "#00ff00";
    }
    

}

function validation_name()
{
    var form_3 = document.getElementById("form");
    var name = document.getElementById("name").value;
    var text_3 = document.getElementById("text_3");
    var pattern_3 = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (name.match(pattern_3))
    {
        form_3.classList.add("valid");
        form_3.classList.remove("invalid");
        text_3.innerHTML = "Skriv inn både fornavn og etternavn"
        text_3.style.color = "#00ff00";
    }
    else
    {
        form_3.classList.remove("valid");
        form_3.classList.add("invalid");
        text_3.innerHTML = "Skriv inn både fornavn og etternavn"
        text_3.style.color = "#ff0000";
    }
    if (name == "")
    {
        form_3.classList.remove("valid");
        form_3.classList.remove("invalid");
        text_3.innerHTML = "";
        text_3.style.color = "#00ff00";
    }
}
