

const userData = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};


const renderUser = ({id,name,address:{geo:{lat,lng},street,suite,city}}) => {
    console.log(id,name,lat,street,suite,city)
let user =`
<div class="card">
<h2>${name}</h2>
<p>id: ${id}</p>
<p>live in : ${city}, ${street}, ${suite}</p>
<p>Geo Location: lat ${lat}, lng ${lng}</p>
</div>
`
document.body.innerHTML = user
}

renderUser(userData);