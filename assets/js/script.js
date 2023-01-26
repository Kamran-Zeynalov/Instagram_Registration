let btn = document.getElementById("btn");

btn.onclick = function () {
    let name = document.getElementById("firstname").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("mail").value.indexOf("@");
    let password = document.getElementById("pass").value;


    if (name.length >= 3 && surname.length >= 3 && email != -1 && password.length >7) {
        window.open(
            "https://www.instagram.com/", "_blank");
        return true;
    }
    else if(name.length >= 3 && surname.length >= 3 && email == -1 && password.length <=7){
        document.querySelector(".erorAccount").innerHTML = "This mail or password cannot be obtained. Please try again";
        return false;
    }

    else if(name.length < 3 && surname.length < 3 && email == -1 && password.length <=7){
        document.querySelector(".erorNick").innerHTML = "This name and surname cannot be obtained. Please try again";
        return false;
    }
    else {
        document.querySelector(".erorNick").innerHTML = "This name and surname  cannot be obtained. Please try again";
        document.querySelector(".erorAccount").innerHTML = "This mail or password cannot be obtained. Please try again";
        return false;
    }
}