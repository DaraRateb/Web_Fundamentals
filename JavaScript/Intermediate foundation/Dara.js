//Sigma
var num;
function sigma(num){
    var sum=0;
    if(num>0){
    for(var i =0;i<=num;i++){
        sum+=i;
    }
    return(sum);
    }
}

//Factorial 
var num;
function factorialnum(num){
    var multi=1;
    if(num>0){
    for(var i =1;i<=num;i++){
        multi*=i;
    }
    return(multi);
    }
}
//Fibonacci

function fibonacci(index){
    var arr=[0,1];
    
        for(var i=2; i<=index; i++){
        arr.push(arr[i-1]+arr[i-2]);
        }
        
    console.log( "fibonacci("+ index+")=" + arr[index] +"("+ arr[index-1]+"+"+arr[index-2]+")");
    
        
    
    }

//Array: Second-to-Last

var arr=[];
function secondtolast(arr){
    if(arr.length>1){
    return(arr[arr.length-2]);
}
}

//Array: Nth-to-Last

var arr=[];
function Ntolast(arr,n){
var n;
    if(arr.length>1){
    return(arr[arr.length-n]);
}
}
//Array: Second-Largest
function secondLarge(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return(arr[arr.length-2]);
}


//Double Trouble:
var arr=[];
function doubletrouble(arr){
var i;
newarr=[];
var j;

    for(i=0; i<arr.length; i++){ 
    newarr.push(i);
    newarr.push(i);
    }  

return(newarr);
}
