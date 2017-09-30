function showdata(){
   var name=document.getElementById('name').value;
   var age=document.getElementById('age').value;
   var data="my name is" + " " + name + " " +"my age is" + " " + age;
   document.getElementById('show').innerHTML=data;
   document.getElementById('name').value='';
   document.getElementById('age').value='';
}






function add(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;


if (num1==''){
    alert("enter first number");
}
else if(num2==''){
    alert("enter second number");

}
else{
    var result=parseInt(num1)+parseInt(num2);
    document.getElementById('showadd').innerHTML=result;
    document.getElementById('num1').value='';
    document.getElementById('num2').value='';
}
}





function calculate(operator){
    var num1=document.getElementById('firstnum').value;
    var num2=document.getElementById('secondnum').value;

    if (num1==''){
     alert("enter first number")
     }
    else if(num2==''){
      alert("enter second number")
    }
    else{
     num1=parseInt(num1);
     num2=parseInt(num2);
    }
    if(operator =='+'){
     var result=num1+num2;
     showResult(result);
    } 
     else if (operator=='-'){
     var result=num1-num2;
     showResult(result);
    }
     else if(operator=='*'){
     var result=num1*num2;
     showResult(result);  
    }
}

function showResult(result) {
    document.getElementById('showAdd').innerHTML = result;
    document.getElementById('firstnum').value = '';
    document.getElementById('secondnum').value = '';

}