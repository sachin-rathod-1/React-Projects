console.log("Welcome to Awesone Node.js");
for(var i=1; i<=100;i++){
    console.log(i)
    if(i%3==0){
        console.log("foo");
    }
    if(i%5==0){
        console.log("bar")
    }
    if(i%3==0 && i%5==0){
        console.log("foo Bar")
    }
    
}