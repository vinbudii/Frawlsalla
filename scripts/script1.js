const form = document.getElementById("RegistrationForm")
const errorMessage = document.getElementById("errorMessage")

function handleSubmit(e){
 const formData = new FormData(form)

 const name = formData.get("name")
 const email = formData.get("email")
 const password = formData.get("password")
 const gender = formData.get("gender")
 const terms = formData.get("terms")
 let error = []

 //VALIDATION
 if(!name){
    error.push("We Need Your Name :)")
 } else if(!email){
     error.push("We Need Your Email :)")
 } else if(!password){
    error.push("You Need Password :)")
 }else if(!gender){
    error.push("Ehm Sorry We Need Your Gender :)")
 } else if(!terms){
    error.push("You Have to Agree to the Terms and Condition")
 }


 if(error.length> 0){
    alert(error.join("\n"))
    errorMessage.innerHTML = error.join("</br>")
    e.preventDefault()
 } else {
    if(!confirm("Create Account?")){
        e.preventDefault()
        }
    }
}

//CALLBACK FUNCTION
form.addEventListener('submit', handleSubmit)