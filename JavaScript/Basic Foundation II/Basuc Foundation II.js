//Biggie Size
var arr=[];
function makeitBig(arr){
var i;
    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return(arr);
}
//Print Low, Return High
var arr=[];
function PriRet(arr){
var i=0;
var max=arr[i];
var min=arr[i];
    for(i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log(min);
    return(max);
    
}
//Print One, Return Another
var arr=[];
function Printsome(arr){
var i=0;
        console.log(arr[arr.length-2]);
        for(i=0; i<arr.length; i++){
            if(arr[i]%2 != 0){
                retuen(arr[i]);
            }
        }
    }


//Double Vision 
var arr=[];
function double(arr){
var i=0;
var newarr=[];
    for(i=0; i<arr.length; i++){
        newarr.push(arr[i]*2);
    }
    return(newarr);
}
//Count Positives
var arr=[];
function countposit(arr){
var i=0;
var counter=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
            counter++;
        }
    }
    arr[arr.length-1]=counter;
   return(arr);
}

//Evens and Odds 
var arr=[];
function threeinrow(arr){
var i=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 !=0 && arr[i+1]%2 !=0 && arr[i+2]%2 !=0){
            console.log("That's odd!");
        }
        if(arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0){
            console.log("Even more so!");
        }
    }
}
//Increment the Seconds
var arr=[];
var i=0;
function incoddindex(arr){
    
    for(i=0; i<arr.length; i++){
        if (i%2==1){
            arr[i]=arr[i]+1;
            
        }
        console.log(arr[i]);
    }
    return(arr);
}
//Previous Lengths
var arr=[];
var i=0;
function PrevLen(arr){
    for(i=arr.length-1; i>0; i--){
        arr[i]=arr[i-1].length;
    }
    return(arr);
}
//Add Seven
var arr=[];
function addseven(arr){
var i=0;
var newarr=[];
    for(i=0; i<arr.length; i++){
        newarr.push(arr[i]+7);
    }
    return(newarr);
}
//Reverse Array
var arr=[];
function reverseArr(arr){
var i=0;
var temp;
    for(i=0; i<arr.length/2; i++){
        temp=arr[i]
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return(arr);
}
//Outlook: Negative
var arr=[];
function RetNeg(arr){
var i;
var newarr=[];
    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
            newarr.push(arr[i]*-1);
        }
        else {
            newarr.push(arr[i]);
        }
    }
    return(newarr)
}
//Always Hungry
var arr=[];
function foodyum(arr){
var i;
var counter=0
    for(i=0; i<arr.length; i++){
        if(arr[i]=="food"){
            console.log("yummy");
            counter++;
        }
    }
    if(counter==0){
        console.log("I'm hungry");
    }
}
//Swap Toward the Center
var arr=[];
function swapcenter(arr){
var i=0;
var temp;
    for(i=0; i<arr.length/2; i++){
        temp=arr[i]
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return(arr);
}
//Scale the Array
var arr=[];
var num;
function multinum(num,arr){
var i;
    for(i=0; i<arr.length; i++){
        arr[i]=arr[i]*num;
    }
    return(arr);
}
