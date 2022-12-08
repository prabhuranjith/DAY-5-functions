//1..Do the below programs in anonymous function & IIFE....
///a.Print odd numbers in an array.....?

var arr =[11,12,13,14,15,16,17,18,19,20]
var result =[];
var Odd = function(arr){
    for ( var i=0; i<arr.length; i++ ){
        if (arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(Odd(arr));

//output=[ 11,13,15, 17,19]

//b...Convert all the strings to title caps in a string array..?

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("Guvi Greek"));

  //output=Guvi Greek


  //c.Sum of all numbers in an array


  var arr = [4, 8, 7, 13, 12]
  
  
      var sum = 0;
  
      arr.forEach(x => {
          sum += x;
      });
  
     console.log("Sum is " + sum);
        
      //output=44

////d.Return all the prime numbers in an array

function primenumber(){
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    numArray=numArray.filter((number) => {
        for(var i=2;i<=Math.sqrt(number);i++){
            if(number % i === 0)
                return false;
        }
        return true;
    });

    console.log(numArray);
}
    primenumber();

    //output=[2, 3, 5, 7]


//e.Return all the palindromes in an array
palindrome=(arr)=>{
    if(arr===arr.split("").reverse().join(""))
    {
        return arr +  " " + "is palindrome";
    }

    else
    {
        return arr + " "+ "not palindrome";
    }
};
let array=["malayalam","hindi","english","telgu","tamil"];
result=array.map(palindrome);
console.log(result);

//f.Return medianof two sorted arrays of the same size...???
  

var medium =function(a,b,n){
    var x = 0;
    var y = 0;
    var count ;
    var m1 = -1;
    var m2 = -1;
    for (count =0; count <=n; count++) {
        if (x==n){
            m1=m2;
            m2=b[0];
            break;
        }
        else if (y==n){
            m1=m2;
            m2=a[0];
            break;
        }
        if(a[x]<=b[y]){
            m1=m2;
            m2=a[x];
            x++;
        }
        else{
            m1=m2;
            m2=b[y];
            y++;
        }
    }
    return((m1+m2))
};
console.log(median([1,2,3,4,5],[6,7,8,9,10],5))

//g.Remove duplicates from an array.???

const d = [];
const c = [1,2,3,4,1,2,3,4,]
arr.forEach((e) => { 
  if (arr.filter(x => x == e).length === 1) {    
    d.push(e);    
  }   
}) 

console.log(d);
//output=5) [4, 8, 7, 13, 12]

//h.rotate an array by k times...??? 

var rotate = function(a,k){
    for (var i=0;i<k;i++){
        a.unshift(a.pop())

    }
    return a;
}
console.log(rotate([1,2,3,4,5],3))

//output=[3, 4, 5, 1, 2]