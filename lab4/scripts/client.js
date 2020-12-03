
fetch('https://my-json-server.typicode.com/nekt2111/labsJS/products').then((response) => {
    return response.json();
})
    .then((data) => {
        console.log(data);
    });