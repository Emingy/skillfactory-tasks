function createObj(){
    const obj = Object.create(null)
    if(typeof(obj)=='object'){
        return obj
    }else{
        return 'Error in create object'
    }
}

console.log(createObj())