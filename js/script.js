//---Function to increase value while clicking on specific buttons
function productsCost(inputId, amount) {
    const products = document.getElementById(inputId);
    const productInput = products.innerText;
    const productTotal = parseFloat(productInput);
    products.innerText = productTotal + amount;
    if (products.innerText > amount) {
        products.innerText = amount;
    }
}

//---Function to decrease value to 0 - while clicking specific buttons
function defaultAmount(idName, zeroAmount) {
    const feature = document.getElementById(idName);
    const featureInput = feature.innerText;
    const featureCost = parseFloat(featureInput);
    total = featureCost * zeroAmount;
    feature.innerText = total;
}

//---Clicking on the first memory button which sets the cost 0
document.getElementById('memory1').addEventListener('click', function () {
    defaultAmount('memory-cost', 0);
});

//---Clicking on the second memory button which sets the cost 180
document.getElementById('memory2').addEventListener('click', function () {
    productsCost('memory-cost', 180);
});

//---Clicking on the first storage button which sets the cost 0
document.getElementById('storage1').addEventListener('click', function () {
    defaultAmount('storage-cost', 0);
});

//---Clicking on the second storage button which sets the cost 100
document.getElementById('storage2').addEventListener('click', function () {
    productsCost('storage-cost', 100);
});

//---Clicking on the third storage button which sets the cost 180
document.getElementById('storage3').addEventListener('click', function () {
    productsCost('storage-cost', 180);
});

//---Clicking on the first delivery button which sets the cost 0
document.getElementById('delivery1').addEventListener('click', function () {
    defaultAmount('delivery-cost', 0);
});

//---Clicking on the second delivery button which sets the cost 20
document.getElementById('delivery2').addEventListener('click', function () {
    productsCost('delivery-cost', 20);
});

//---Clicking on the apply button for 20% discount by using a specific promo code 'stevekaku'
document.getElementById('apply').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    const codeInput = promoCode.value;
    //--------
    const totalPrice = document.getElementById('grand-total');
    const total = totalPrice.innerText;
    const a = parseInt(total);
    const discount = a / 100 * 20;
    const grandTotal = total - discount;
    if (codeInput == 'stevekaku') {
        document.getElementById('grand-total').innerText = grandTotal;
        document.getElementById('apply').style.display = 'none';
    };
    promoCode.value = ''
});











