const upper = /[A-Z]/g;
const lower = /[a-z]/g;
const num = /[0-9]/g;
const symbols = /[!@#$%^&*()]/g;
let input = document.querySelector("input")
let meter = document.querySelector(".meter")
let text = document.querySelector("p")
input.addEventListener("input", () =>{
    let value = input.value
    if(
        value.match(upper) != null &&
        value.match(lower) != null &&
        value.match(num) != null &&
        value.match(symbols) != null &&
        value.length >= 8 ){
        meter.style.backgroundColor = "green"
        meter.style.width = "100%"
        text.textContent = "Hackers will take years to crack this password"              
    }
    else if (
        value.match(upper) != null &&
        value.match(lower) != null &&
        value.match(num) != null &&
        value.match(symbols) != null  ||
        value.match(upper) != null &&
        value.match(lower) != null &&
        value.match(num) != null &&
        value.length >= 8 ||
        value.match(upper) != null &&
        value.match(lower) != null &&
        value.match(symbols) != null &&
        value.length >= 8 ||
        value.match(upper) != null &&
        value.match(num) != null &&
        value.match(symbols) != null &&
        value.length >= 8 ||
        value.match(lower) != null &&
        value.match(num) != null &&
        value.match(symbols) != null &&
        value.length >= 8 
    ) {
        meter.style.backgroundColor = "yellow"
        meter.style.width = "70%"
        text.textContent = "Your password is moderate"     
    }
    else if (
        value.match(upper) != null &&
        value.match(lower) != null  ||

        value.match(upper) != null &&
        value.match(num) != null ||

        value.match(upper) != null &&
        value.match(symbols) != null ||

        value.match(lower) != null &&
        value.match(num) != null ||

        value.match(lower) != null &&
        value.match(symbols) != null ||

       
        value.match(num) != null &&
        value.match(symbols) != null  ||


        value.match(num) != null &&
        value.length >= 8 ||
        
        value.match(symbols) != null &&
        value.length >= 8 ||
        
        value.match(lower) != null &&
        value.length >= 8 ||
        
        value.match(upper) != null &&
        value.length >= 8   
    ){
        meter.style.backgroundColor = "orange"
        meter.style.width = "30%"
        text.textContent = "weak"         
    }
    else if(value.match(upper) != null ||
    value.match(lower) != null ||
    value.match(num) != null ||
    value.match(symbols) != null ||
    value.length >= 8){
        meter.style.backgroundColor = "red"
        meter.style.width = "15%"
        text.textContent = "very weak"           
    }
   else{
    meter.style.backgroundColor = "beige"
        meter.style.width = "100%"
        text.textContent = "your password is like an open door"
   }
})
console.log(input)
