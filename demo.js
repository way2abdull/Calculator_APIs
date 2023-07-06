var sum = 0;
function add(){

    let array = Array.from(arguments);
    for(let i = 0; i < arguments.length; i++){
        
        sum = sum + array[i];

    }
    console.log(sum);


}
add(15, 25, 28, 95, 23);
console.log(sum);