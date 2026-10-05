let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button')
let string = "";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            console.log("result: ",string)
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }    
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value= string
        }
            
        else {
             console.log("Currently entered value:", e.target.innerHTML)
            string += e.target.innerHTML;
            console.log("added to string:", string)
            input.value = string;
        }
    }
    )

})
