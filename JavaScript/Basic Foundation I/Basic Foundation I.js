//Get 1 to 255 
function count(){
var arr=[];
var i=1;
    for (i=1; i<=255; i++){
    arr.push(i);
    }
    
return(arr);
}

//Get even 1000 
function evensum(){
var i=1;
var sum=0;
    for(i=1; i<=1000; i++ ){
        if(i%2 == 0){
        sum=sum+i;
        }
    }
    console.log(sum);
}

//Sum odd 5000

function sumodd(){
    var i=1;
    var sum=0;
        for(i=1; i<=5000; i++){
            if(i%2 != 0){
                sum=sum+i;
            }
        }
        return(sum);

}
//Iterate an array
var arr=[];
function sumArr(arr){
var i=0;
var sum=0;
    for(i=0; i<arr.length; i++){
            sum=sum+arr[i];
        }
return(sum);
}

//Find max
var arr=[];
var i=0;
function FindMax(arr){
var max=arr[i];
    for(i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
return(max);   
}

//Find average
var arr=[];
function FindAvg(arr){
var i=0;
var sum=0;
var avg;
    for(i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    avg=sum/arr.length;
    return(avg);
}

//Array odd 

function Oddarr(){
var arr=[];
var i=1;
    for(i=1; i<50; i++){
            arr.push(i);
        
    }
   return(arr);

}
//Greater than Y
var arr=[]
var y;
function greatY(y,arr){
var counter=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>y){
            counter++
        }
    }
    return(counter);
}

//Squares
var arr=[]
function square(arr){
var i;
    for(i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return(arr);
    }

//Negatives
var arr=[];
function noNeg(arr){
var i=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return(arr);
}
//Max/Min/Avg
var arr=[];
function Data(arr){
var i=0;
var max=arr[i];
var min=arr[i];
var sum=0;
var avg;
var newarr=[];
    for(i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        sum=sum+arr[i];
        avg=sum/arr.length;
    }
    newarr.push(max);
    newarr.push(min);
    newarr.push(avg);
    return(newarr);
    }
   
//Swap Values
var arr=[];
function swap(arr){
var i;
var temp;
    if(arr.length>2){
        temp=arr[0];
        arr[0]=arr[arr.length-1];
        arr[arr.length-1]=temp;
    }
    return(arr);
    }
//Number to String
var arr;
function NumStr(arr){
var i;
    for(i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return(arr);
}
