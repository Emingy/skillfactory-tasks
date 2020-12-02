const person = {

city: "Moscow"

}

// создаем объект с прототипом

const student = Object.create(person);

// добавляем собственное свойство объекту student
   
student.ownCity = "Piter";

function con(obj){
	for (let key in obj) {

		if (obj.hasOwnProperty(key)) {
			console.log(key+':"'+obj[key]+'"');
		}   
	}
}

con(student)