const printPromesa = () => {
    return new Promise((resolve, reject)=> {
        if(true){
            resolve('Hey')
        }else{
            reject('ups!');
        }
    } )
}

printPromesa()
    .then(response => console.log(response))
    .catch(err => console.log(err))

const printPromesa2 = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(()=>{
                resolve('setTimeout true');
            },2000)
        }else{
            const error = new Error('Ocurrio un error');
            reject(error);
        }
    })
}

printPromesa2()
    .then(response => console.log(response))
    .catch(err=> console.error(err))


Promise.all([printPromesa(),printPromesa2()])
    .then( response => {
        console.log('Array de result',response)
    })
    .catch( err => {
        console.error(err)
    })