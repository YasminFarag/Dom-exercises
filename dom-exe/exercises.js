function multiply(){
   
    let num1 = document.getElementById('firstnumber').value
    let num2 = document.getElementById('secondnumber').value
    
    
    
    
        document.getElementById('calc').innerHTML = num1 * num2
        
    }
    
    function divide (){
        let num1 = document.getElementById('firstnumber').value
        let num2 = document.getElementById('secondnumber').value
    
        document.getElementById('calc').innerHTML = num1 / num2
    }
    

    // second exercise
    function press(){
    
    
    let firstBox = document.getElementById('banana')
    let secondBox = document.getElementById('mango')
    let thirdBox = document.getElementById('watermelon')
    
    
    if(firstBox.innerHTML === 'banana'){
        firstBox.innerHTML= 'Yummy!'
        firstBox.style.backgroundColor= 'yellow'
        firstBox.style.height= '50px'
        firstBox.style.width= '200px'
    }else if(secondBox.innerHTML === 'mango'){
       
            secondBox.innerHTML= 'Delicious!'
            secondBox.style.backgroundColor= 'green'
            secondBox.style.height= '50px'
            secondBox.style.width= '200px'
        }else if(thirdBox.innerHTML === 'watermelon'){
            thirdBox.innerHTML= 'woooow!'
            thirdBox.style.backgroundColor= 'red'
            thirdBox.style.height= '50px'
            thirdBox.style.width= '200px'
        }
    }
    
    // third exercise


    
    

    