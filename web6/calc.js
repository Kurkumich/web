function poz() {
    let x= document.getElementById("num");
    x.addEventListener('input',function(){poz();});
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = select.value == "2" ? "block" : "none";
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = select.value == "3" ? "block" : "none";
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });
    let prodPrice = document.getElementById("prodPrice");
    let x1=document.getElementById("num").value;
    s[0].addEventListener('change', function () {
        if (select.value === '1') {
            document.getElementById('prodPrice').innerHTML ="Стоимость заказа: " + prices.prodTypes[0] * x1 + " рублей";
        }
        else if (select.value === '2') {
            document.getElementById('prodPrice').innerHTML ="Стоимость заказа: " + prices.prodTypes[1] * x1 + " рублей";
        }
        else if (select.value === '3') {
            document.getElementById('prodPrice').innerHTML ="Стоимость заказа: " + prices.prodTypes[2] * x1 + " рублей";
        }
    });
    prodPrice.innerHTML ="Стоимость заказа: "  + price*x1 + " рублей";
}
function getPrices() {
    return {
        prodTypes: [4500, 2300, 3300],
        prodOptions: {
            option2: 780,
            option3: 640,
        },
        prodProperties: {
            prop1: 2500,
            prop2: 2100,
        },
    };
}
window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function (event) {
        poz();
    });
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            poz();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
        poz();
    });
});
poz();
});
function cifra(){
    if(event.keyCode<48 || event.keyCode>57)
    event.returnValue=false;
}
