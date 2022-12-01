const delay = (time) => {

    return new Promise((resolve, reject) => {
        if (time > 0) {
            console.log("time OK")
        }else {
            reject("Error")
        }
    })
}

delay(3000)
    .then(() => console.log('Fire after 3 sec'))
    .catch(() => console.log('Error!'));

delay(0)
    .then(() => console.log('Fire after 3 sec'))
    .catch(rej => console.log(rej));