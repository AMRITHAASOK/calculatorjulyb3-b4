// 1//display number in text box
function displayNumber(num){
result.value += num;
}

//2 clear text box

function clearBox(){
    result.value = "";
}

//3 evaluate expression
function evaluateExpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
}


//4 Remove last item from text box
function removeLastItem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}








































// 1//display number in text box

// function displayNum(num){
//     // console.log(result);
//     result.value+=num;
// }
// //2 clear text box
// function clearBox(){
//     result.value="";
// }
// //3 evaluate expression
// function evaluateExpression(){
//     expression=result.value;
//     output=eval(expression);
//     result.value=output;
// }

// //4 Remove last item from text box
// function removeLastItem(){
//     currentExpression=result.value;
//    result.value=currentExpression.slice(0,-1);
// }

