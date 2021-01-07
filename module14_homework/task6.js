const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let val = Math.floor(Math.random() * Math.floor(101))
    if (val%2==0) {
    	resolve(`Завершено успешно. Сгенерированное число — ${val}`)
    }else{
    	reject(`Завершено с ошибкой. Сгенерированное число — ${val}`)
    }
  }, 300);
});