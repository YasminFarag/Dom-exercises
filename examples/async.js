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

// we can track the progress of the request through event listener 
request.addEventListener('readystatechange', ()=>{

    console.log(request, request.readyState);
    
    if(request.readyState=== 4 && request.status === 200){
        console.log(request.responseText); // property which contains the response data
        
    } else if(request.readyState=== 4){
        console.log('cant fetch the  data ');
        
    }
})

// open method takes two arguments, 1st is a string and it's the type of the request we want, when we get some data we make a GET request

// 2nd argument is where we want to make the request what is the end point we want to get data from
  



// port to update data

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')


request.send();