console.log(1);
console.log(2);
console.log(3);

setTimeout(()=>{
    console.log('the call back function fired');
    
},2000);

// this is asynchronous function that starts while the files run , its going to wait 2 sec and will finish later by firing this callback function
console.log(4);
console.log(5);



// hTTP request


const request = new XMLHttpRequest();


request.addEventListener('readystatechange', ()=>{
    if(request.readyState=== 4){
        console.log(request.responseText);
        
    }
})


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send();