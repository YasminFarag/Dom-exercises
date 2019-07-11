let placeholderApi= 'http://jsonplaceholder.typicode.com/todos/1'

fetch(placeholderApi)
    .then(res=>{
        console.log(res);
        return res.json()
        
    })
    .then(res=> res.map(user => user.userNames))
    .then(userNames => {
        console.log(userNames);
        document.getElementById('result').innerHTML= userNames
    });