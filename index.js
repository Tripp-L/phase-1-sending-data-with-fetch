function submitData(name, email) {
    const formData = {
    name: "Steve",
    email: "steve@steve.com"
}

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData),
}

return fetch("http://localhost:3000/users", configurationObject)
    .then(function (res) {
    return res.json()
})
.then(function (data) {
    const id = data.id
    document.body.innerHTML += `<p>New ID: ${id}</p>`
    return id
})
.catch(function (error) {
    document.body.innerHTML += `<p>Error: ${error.message}</p>`
    })
}
