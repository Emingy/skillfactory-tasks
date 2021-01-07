window.onload = function () {
	if (localStorage.req) {
		document.getElementById('list').innerHTML=localStorage.req
	}
}
function request(val1, val2, list, alertBlock) {
	if (1>=val1<=10&&1>=val2<=10) {
		alertBlock.innerHTML=''
		fetch(`https://picsum.photos/v2/list?page=${val1}&limit=${val2}`)
		  		.then((response) => {
				    return response.json();
				})
				.then((data) => {
					list.innerHTML=''
					if (data.length!=0) {
						data.map(item=>{
							console.log(item)
							list.innerHTML+=`<img src="${item['download_url']}" width="740px" height="480px" alt="${item['author']}">`

						})
						localStorage.req = list.innerHTML;
					}else{
						alert('Пользователь с указанным id не найден')
					}
				});
	}else if ((10>val1<1 || Number.isInteger(val1)) && (10>val2<1 || Number.isInteger(val2))) {
		alertBlock.innerHTML='Номер страницы и лимит вне диапазона от 1 до 10'
	}else if(10>val1<1 || Number.isInteger(val1)){
		alertBlock.innerHTML='Номер страницы вне диапазона от 1 до 10'
	}else if(10>val2<1 || Number.isInteger(val2)){
		alertBlock.innerHTML='Лимит вне диапазона от 1 до 10'
	}
}