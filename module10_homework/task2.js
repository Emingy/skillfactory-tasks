var x = prompt('Введите число');
var type = typeof(x);
switch (type){ 
	case 'number': 
		console.log('x - число');
		break; 
	case 'string':
		console.log('х - строка');
		break;
	case 'boolean':
		console.log('x - логический');
		break;
	default:
		console.log('х не равен ни числу, ни строке, ни логическому типу');}