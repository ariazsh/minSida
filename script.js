// deklarera input för pasword och username och knappen log in och knappen log out
let inpUser = document.getElementById("username");
let inpPass = document.getElementById("password");
let btnLogging = document.getElementById("btnLogging");
let btnOut = document.getElementById("btnOut");
// deklarera html texter

let pError = document.getElementById("pErr");
let h3Text = document.getElementById("h3Text").style.visibility = "hidden";
let h3Text2 = document.getElementById("h3Text2").style.visibility = "hidden";
let div1 = document.getElementById("div").style.visibility ="hidden";
// deklarea rätt lösnord och username
let namn = "test";
let password = "1234";
// deklarera två variabel som localStorage
let namnLoc = localStorage.getItem("username");
let passLoc = localStorage.getItem("password");

// göm btnOut när man inte trycker på knappen
if (namnLoc != namn && passLoc != password){
    document.getElementById("btnOut").style.visibility = "hidden";

}


// göm första sidan och visa username och password
if (namnLoc == namn && passLoc == password){
    document.getElementById("h3Text").style.visibility = "visible"; //change
    document.getElementById("h3Text2").style.visibility = "visible"; //change
    

    document.getElementById("btnLogging").style.visibility = "hidden";
    document.getElementById("username").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";
    document.getElementById("pErr").style.visibility = "hidden";
    
}

// logga ut med knappen
btnOut.addEventListener("click", function(){
    //rensa localStorage som användaren har skapat
    localStorage.clear();
    // visa rätt sida när du loggar ut
    document.getElementById("h3Text").style.visibility = "hidden";
    document.getElementById("h3Text2").style.visibility = "hidden";
    document.getElementById("btnOut").style.visibility = "hidden";
    document.getElementById("div").style.visibility ="hidden";

    document.getElementById("username").style.visibility = "visible";
    document.getElementById("password").style.visibility = "visible";
    document.getElementById("btnLogging").style.visibility = "visible";
    document.getElementById("pErr").style.visibility = "visible";
    pError.innerHTML = "Right input only";
    
    
    
   
})
// log in knappen
btnLogging.addEventListener("click", function(){
    // kolla om användaren har skrivit rätt pass och username
    if (inpUser.value == namn && inpPass.value == password){
        console.log("yes");
        // spara localStorage med rätt pass och username
        localStorage.setItem("username", "test");
        localStorage.setItem("password", 1234);
        let name1 = localStorage.getItem("username");
        let pass1 = localStorage.getItem("password");

        console.log(name1);
        console.log(pass1);

        // visa rätt sida när funktionen anrops
        document.getElementById("btnLogging").style.visibility = "hidden";
        document.getElementById("username").style.visibility = "hidden";
        document.getElementById("password").style.visibility = "hidden";
        document.getElementById("pErr").style.visibility = "hidden";
        document.getElementById("div").style.visibility ="hidden";
        
        document.getElementById("btnOut").style.visibility = "visible";
        document.getElementById("h3Text").style.visibility = "visible"; //change
        document.getElementById("h3Text2").style.visibility = "visible"; //change

    }
    else {
        // om användaren skriver in fel username eller pass, varna hen
        console.log("no");
        pError.innerHTML = "try again";
        document.getElementById("div").style.visibility ="visible";
    }
    
})