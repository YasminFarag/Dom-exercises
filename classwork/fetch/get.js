let placeholderApi= 'https://jsonplaceholder.typicode.com/users'

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


    const myPost= {
        title:"A post...",
        body:"42",
        userId: 2
    }

    const options = {
        method : "POST",
        body: JSON.stringify(myPost),
        headers:{
            'content-type': 'application/json'
        } 
    };

    console.log("options: ", options);
   
    

fetch('https://jsonplaceholder.typicode.com/posts',options)
.then(res=> res.json())
.then(res => console.log(res));


