let buttons = document.querySelectorAll('.bttns');
let input = document.querySelector("#screen");
let reset = document.querySelector(".resetbttn");

const resetcalc = () => {
    input.value = '';
    string = '';                
}

let string = ""
Array.from(buttons).forEach((bttns) => {
    bttns.addEventListener("click", (e) => {
        if(e.target.innerHTML === "="){
            string = eval(string)
            input.value = string
        }else {

            string = string + e.target.innerHTML;
            input.value = string;  
        }   
        
        })
})
reset.addEventListener("click",resetcalc);