var arr = [0,1,2,3,4,5]
var even = 0;
var notEven = 0;
var nul = 0;

for (let number of arr) {
if (number==0){
	nul+=1
}else{
	switch (number%2){ 
		case 0: 
			even+=1
			break; 
		case 1:
			notEven+=1
			break;
		default:
			console.log('не равен числу');
	}
}
}
console.log('Четных - '+even );
console.log('Нечетных - '+notEven );
console.log('Нулей - '+nul);