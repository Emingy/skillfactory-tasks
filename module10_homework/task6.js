var arr = [1,1,3,2,1,4,5,6]
let result = [];
var i = 0
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }else{i+=1}}if(i==0){console.log(false)}else{console.log(true)}