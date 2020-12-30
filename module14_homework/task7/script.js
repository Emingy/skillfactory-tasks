function request(val, list) {
	fetch(`https://jsonplaceholder.typicode.com/users/${val}/todos`)
  		.then((response) => {
		    return response.json();
		})
		.then((data) => {
			list.innerHTML=''
			if (data.length!=0) {
				data.map(item=>{
					if (item.completed) {
						list.innerHTML+=`<li>${item.title}</li>`
					}else{
						list.innerHTML+=`<li style="text-decoration: line-through
">${item.title}</li>`
					}
				})
			}else{
				alert('Пользователь с указанным id не найден')
			}
		});
}