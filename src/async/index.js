const doSomethingAsync = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout (()=> resolve('Ejecuto asyncronamente'),2000)
        }else{
            reject(new Error('Error async'))
        }
    })
}

const doSomething = async() =>{
    const something= await doSomethingAsync()
    console.log(something)
}

console.log('before')
doSomething()
console.log('After')