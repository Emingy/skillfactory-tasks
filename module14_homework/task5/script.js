window.onload = function (){
    var local = localStorage.getItem('hello')
    if(local==null){
        var data = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')
        var date = new Date()
        var datef = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        localStorage.setItem("hello", `${data},${datef}`)
    }else{
        var res = local.split(',')
        alert(`Добрый день, ${res[0]}! Давно не виделись. В последний раз вы были у нас ${res[1]}`)
    }
}