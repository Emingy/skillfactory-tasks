num=2;
num2=10;
sumNum = main(num)
sumNum(num2)
function main(num){
    return function second(num2){
        return num+num2;
    }
}
