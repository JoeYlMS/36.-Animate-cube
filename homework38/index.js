function httpGet(url){
    return new Promise(function (resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send()
        xhr.onload = function (event){
            if (xhr.status !== 200){
                reject('Error: '+xhr.status)
            }else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = function (event){
            console.log('onerror',onerror)
        }
    })
}

httpGet("https://jsonplaceholder.typicode.com/posts")
    .then((resolve) => JSON.parse(resolve))
    .then(result => console.log(result))
    .catch(reject => console.log(reject));