// This script generates two random passwords based on user input and allows copying them to the clipboard.
// The script uses the Math.random() function to select random characters from a predefined set of characters.


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];
const copyBtns = document.querySelectorAll(".copy-btn")
const copyStatus = document.getElementById("copy-status")

// Generate password function
// This function generates a password based on the length specified in the input field
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

    document.getElementById("password1").value = password1
    document.getElementById("password2").value = password2
}

// Add event listener to the button to generate password when clicked
// This will call the generatePassword function when the button is clicked
document.getElementById("pwd-btn").addEventListener("click", generatePassword);


// Copy password to clipboard
// Get all copy buttons and the status message element
copyBtns.forEach(copyBtn => { // Loop through each button in the collection
    copyBtn.addEventListener("click", () => {
        console.log("Copy button clicked")
        const targetId = copyBtn.getAttribute("data-target") // Get the target ID from the button's data attribute
        const targetPassword = document.getElementById(targetId)
        const passwordValue = targetPassword.value // Get the target element by ID
        if (targetPassword && targetPassword.value) {
            navigator.clipboard.writeText(passwordValue)
                .then(() => {
                    copyStatus.textContent = `${targetId} copied to clipboard!`
                    setTimeout(() => {
                        copyStatus.textContent = ""
                    }, 2000) // Clear the message after 2 seconds
                })
                .catch(err => {
                    copyStatus.textContent = "Copy failed!"
                    console.error(err)
                })
        } else {
            copyStatus.textContent = "No password to copy! Please generate a password."
            setTimeout(() => {
                copyStatus.textContent = ""
            }, 2000) // Clear the message after 2 seconds
        }
    })
    })