// This script generates two random passwords based on user input and allows copying them to the clipboard.
// The script uses the Math.random() function to select random characters from a predefined set of characters.


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]
const copyBtns = document.querySelectorAll(".copy-btn")
const copyStatus = document.getElementById("copy-status")


// Generate password function
// This function generates a password based on the length specified in the input field
function generatePassword() {
        const passwordLength = document.getElementById ("pwd-input").value // Get the password length from the input field
        let password1 = ""
        let password2 = ""
    for ( let i = 0; i < passwordLength; i++) { // Loop through the number of characters specified by the user
        let randomPassword1 = Math.floor(Math.random() * characters.length) // Generate a random index for the characters array
        let randomPassword2 = Math.floor(Math.random() * characters.length)

        if (passwordLength < 8 || passwordLength > 20)  { // Check if the password length is within the specified range (8-20)
            password1 += "" // If not, do not add any characters to the password
            password2 += ""
            copyStatus.textContent = "Warning! Enter the reqired password length (8-20)" // Show a warning message
            setTimeout(() => { // Clear the warning message after 2 seconds
                copyStatus.textContent = ""
            }, 2500)
        } else { // If the password length is valid, add random characters to the password
            password1 += characters[randomPassword1]
            password2 += characters[randomPassword2]
        }
    }
    // Set the generated passwords to the respective input fields
    document.getElementById("password1").value = password1 
    document.getElementById("password2").value = password2
}

// Add event listener to the button to generate password when clicked
// This will call the generatePassword function when the button is clicked
document.getElementById("pwd-btn").addEventListener("click", generatePassword);


// Copy password to clipboard
// Get all copy buttons and the status message element
copyBtns.forEach(copyBtn => { // Loop through each button in the collection
    copyBtn.addEventListener("click", () => { // Add click event listener to each button
        const targetId = copyBtn.getAttribute("data-target") // Get the target ID from the button's data attribute
        const targetPassword = document.getElementById(targetId) // Get the target password input element by ID
        const passwordValue = targetPassword.value // Get the target element by ID
        if (targetPassword && targetPassword.value) { // Check if the target password element exists and has a value
            navigator.clipboard.writeText(passwordValue)
                .then(() => { 
                    copyStatus.textContent = `${targetId} copied to clipboard!` // Show a success message
                    setTimeout(() => {
                        copyStatus.textContent = ""
                    }, 2500) // Clear the success message after 2 seconds
                })
                .catch(err => { // Handle any errors that occur during the copy process
                    copyStatus.textContent = "Copy failed!"
                    console.error(err)
                })
        } else {  // If the target password element does not exist or has no value, show a message
            copyStatus.textContent = "No password to copy! Please generate a password."
            setTimeout(() => {
                copyStatus.textContent = ""
            }, 2500) // Clear the message after 2 seconds
        }
    })
    })