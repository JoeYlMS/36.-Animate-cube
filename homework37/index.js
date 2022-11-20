const postUser = document.querySelector('form')
const title = postUser.querySelector('#title')
const body = postUser.querySelector('#body')
const idUser = postUser.querySelector('select')
const response = document.querySelector('.response')

postUser.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!isValid([title, body])) return

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: idUser.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
        .then(data => {
            if (response.children[0].tagName === "SPAN") response.innerHTML = renderPost(data)
            else response.insertAdjacentHTML('beforeend', renderPost(data))
        })
    postUser.reset()
})

function isValid(arr) {
    let res = true;
    arr.forEach((el) => {
        if (el.value === "") {
            res = false;
            el.classList.add('error')
        } else {
            el.classList.remove('error')
        }
    })
    return res
}

function renderPost({id, body, title, userId}) {
    return `
    <div class="post">
    <h3>Title: ${title}</h3>
    <span class="post_id">Post id: ${id}</span>
    <span class="post_body">${body}</span>
    <span class="post_user_id">User: ${userId}</span>
</div>
    `
}