let answerel=document.getElementById("answer")

let currentInput=""
let expression=""
let firstNumber=null
let operator=null

function num(value){
    currentInput+=value
    expression+=value
    answerel.innerText=expression
}

function operation(op){
    if(currentInput==="") return;
    firstNumber=Number(currentInput)
    operator=op
    expression+=" "+op+" "
    answerel.innerText=expression
    currentInput="";
}

function calculate(){
    let secondNumber=Number(currentInput)
    let result=0
    if(operator=='+'){
        result=firstNumber+secondNumber
    }
    else if(operator=='-'){
        result=firstNumber-secondNumber
    }
    else if(operator=='*'){
        result=firstNumber*secondNumber
    }
    else if(operator=="/"){
        result=firstNumber/secondNumber
    }
    expression+=" = "+result
    answerel.innerText=expression
    currentInput = result.toString();
    firstNumber = null;
    operator = null;
    expression = "";
}
function clearAll(){
    currentInput = "";
    firstNumber = null;
    operator = null;
    expression = "";

    answerel.innerText = "";
}