//program for checking given number is prime or not

var num=4;
var flag=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        flag+=1;
        break;
    }
   }
if(flag==0){
    console.log("prime");
}
else{
    console.log("not prime");
}
