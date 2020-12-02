var numberFirst = 5;
var numberSecond = 15;

printNumbersInConsole(numberFirst, numberSecond);

function printNumbersInConsole(num1, num2){
    i=num1
    var intervalId = setInterval(function(){
        if(i<=num2){
            console.log(i);
            i++;
        }else{
            clearInterval(intervalId)
        }
    },1000, 1,  2)
    
}