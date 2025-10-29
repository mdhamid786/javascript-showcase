

let count = 10;

let countDown = setInterval(()=> {
    
    count--;
    console.log(count);

    if(count===1) {
        console.log("Offer Started");

        clearInterval(countDown)
        
    }

},1000)

