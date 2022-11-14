function poz(){
    let x=document.getElementsByName("num1");
    let y=document.getElementsByName("num2");
    const isNumber=/^\d*\.?\d+$/;
    if(isNumber.test(x[0].value)==false || isNumber.test(y[0].value)==false || x[0].value==0 || y[0].value==0){
        alert("Введите корректные данные!");
    }
    else{
        let result=document.getElementById("answer");
        x[0]=Number.parseInt(x[0]);
        y[0]=Number.parseInt(y[0]);
        var p=x[0].value*y[0].value;
        result.innerHTML="Стоимость вашего заказа: " + p + " руб.";
    }  
}
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("my-button");
    b.addEventListener("click", poz);
  });
