function newQuote(quotes){
    let randomQuote = quotes[Math.floor((Math.random()* quotes.length))];
    console.log(randomQuote);

    let para= document.querySelector('#quoteoftheday').innerHTML= randomQuote;
}

export {newQuote};