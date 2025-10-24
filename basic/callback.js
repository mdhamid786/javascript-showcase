function greet (name , callback) {
   console.log("hello", name);
   callback()
   
}

function nextfunction () {
    console.log("Welcome to javascript export");
    
}

greet("hamid", nextfunction)