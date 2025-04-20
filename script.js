const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

function generatePassword() {
    let passwordLength = document.getElementById ("pwd-input").value
        let password1 = ""
        let password2 = ""
    for ( let i = 0; i < passwordLength; i++) {
        let randomPassword1 = Math.floor(Math.random() * characters.length)
        let randomPassword2 = Math.floor(Math.random() * characters.length)

        if (passwordLength < 8 || passwordLength > 20)  {
            password1 += ""
            password2 += ""
        } else {
            password1 += characters[randomPassword1]
            password2 += characters[randomPassword2]
        }
    }

    document.getElementById("password1").textContent = password1
    document.getElementById("password2").textContent = password2
}

document.getElementById("pwd-btn").addEventListener("click", generatePassword);
