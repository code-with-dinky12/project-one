let buttons = document.querySelectorAll(".btn")
const allbtns = Array.from(buttons)
let string = ""
allbtns.forEach((btns)=>{
    btns.addEventListener("click",function(e){
       let msg = document.querySelector('.msg')
        if(e.target.innerHTML == "="){
                string = eval(string)
                if(typeof string == "undefined"){
                    string = "";
                    msg.innerText = string
                }
                else{
                    msg.innerText = string;
                }
            
       }
       else if(e.target.innerText == "C"){
            string = ""
            msg.innerHTML =string
       }
       else{
           string += e.target.innerText
           msg.innerText = string;

       }

    })
})