function changeSelect(val, alert, button){
    if(val==0){
        alert.innerHTML = 'Выберите, пожалуйста, год'
        button.setAttribute('disabled','disabled')
    }else{
        alert.innerHTML = ''
        button.removeAttribute('disabled')
    }
}
function Json(val, alert, table){
    if(val!=0){
        const xhr = new XMLHttpRequest();
    
        xhr.onload = function() {
            var res = JSON.parse(xhr.response)
            console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
            res.map(item=>{
                if(item.year==val){
                    table.innerHTML+=`<tr>
                        <td>${item.sales.q1}</td>
                        <td>${item.sales.q2}</td>
                        <td>${item.sales.q3}</td>
                        <td>${item.sales.q4}</td>
                    </tr>`
                    var countSales = item.sales.q1 + item.sales.q2 + item.sales.q3 + item.sales.q4
                    var src = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${val} год',data:[${item.sales.q1},${item.sales.q2},${item.sales.q3},${item.sales.q4}]}]}}`
                    document.querySelector('body').innerHTML+=`<a href="${src}">Открыть график</a>`
                }
            })
        };
    
        xhr.onerror = function() {
        console.log('Ошибка запроса');
        };
    
        xhr.open("get", "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440", true);
        xhr.send();
    }
}