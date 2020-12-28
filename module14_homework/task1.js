const parser = new DOMParser()

const data = `<list>
<student>
  <name lang="en">
	<first>Ivan</first>
	<second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
	<first>Петр</first>
	<second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`

var result = {}
const pr = parser.parseFromString(data, "text/xml");

const list = pr.querySelector("list")
const student = list.querySelectorAll("student")
Object.values(student).map((item,idx)=> {
	var name = item.querySelector("name")
	var first = name.querySelector('first')
	var second = name.querySelector('second')
	var age = item.querySelector('age')
	var prof = item.querySelector('prof')
	
	var lang = name.getAttribute('lang')
	
	result[idx] = {
		lang: lang,
		name: {
			first: first.textContent,
			second: second.textContent
		},
		age:Number(age.textContent),
		prof: prof.textContent
	}

})

console.log(result)