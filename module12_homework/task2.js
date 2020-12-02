var num = prompt('Введите число до 1000')
num++
var arrEasyNum = [];
checkEasyNum(num)
function checkEasyNum(number){
    if(number<=1000 && typeof(number)!='string'){
        check: for (let i = 2; i <= number; i++) {

            for (let j = 2; j < i; j++) {
              if (i % j == 0) continue check;
            }
          
            arrEasyNum.push(i);
        }
    }else{
        alert('Данные неверны')
    }
    if(arrEasyNum.length!=0){
        alert('Простые числа: '+arrEasyNum)
    }else{
        alert('Простые числа не найдены')
    }
}