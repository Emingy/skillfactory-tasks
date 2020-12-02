function con(str,obj){
    if (obj.hasOwnProperty(str)) {
        return true
    }else{
        return false
    }   
}

const person = {

    city: "Moscow"

}

// создаем объект с прототипом

const student = Object.create(person);

// добавляем собственное свойство объекту student
    
student.ownCity = "Piter";

console.log(con('ownCity',student))