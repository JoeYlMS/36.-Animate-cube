const delay = (time) => {

    return new Promise((resolve, reject) => {
        if (time > 0) {
            setTimeout(()=>{
                resolve(`Fire after ${time/1000} sec`)
            }, time)

        }else {
            reject("Error")
        }
    })
}

delay(3000)
    .then(() => console.log('Fire after 3 sec'))
    .catch(() => console.log('Error!'));

delay(0)
    .then((res) => console.log(res))
    .catch(rej => console.log(rej));