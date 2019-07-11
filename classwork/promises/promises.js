let promise= new Promise(function(resolve,reject){
    resolve(
        setTimeout(function(){
            alert('job is done')
        }, 1000)
    )

});


let promise2 = new Promise(function(resolve,reject){

    setTimeout(()=> reject(new Error('Woops!')),2000)
});


let promise3= new Promise(function(resolve,reject){
    resolve(console.log('job done!')
    )

    reject(console.log('job not done')
    )

    setTimeout(()=> resolve('....'));
})


let promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(new Error('job not done!'))
    },4000)
});

promise4.then(
   result=> alert(result),
  //  error=> alert(error)
).catch(error =>(alert(error)))


// .finally


new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('result'),2000

    )
})
.finally(()=>alert('promise ready'))
.then(result=>alert(result)) // then handles the result
.catch(err=>alert(error))    // handles the error object


// async


async function myFunc() {
    let myVar= 'hello';
    
}

myFunc().then(alert('async promise'))

// await

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('resolved')
        },2000)
    });


async function asyncCAll(){
    console.log('calling');
    var result= await resolveAfter2Seconds();
    console.log(result);

    // expected output: 'resolved'
    
    
}
    
}