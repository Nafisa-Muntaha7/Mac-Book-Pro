//--------------
function productsCost(inputId, amount) {
    const products = document.getElementById(inputId);
    const productInput = products.innerText;
    const productTotal = parseFloat(productInput);
    products.innerText = productTotal + amount;
    if (products.innerText > amount) {
        products.innerText = amount;
    }
    return products;
}
//----------------
function defaultAmount(idName, zeroAmount) {
    const feature = document.getElementById(idName);
    const featureInput = feature.innerText;
    const featureCost = parseFloat(featureInput);
    total = featureCost * zeroAmount;
    feature.innerText = total;
    return feature;
}
//---------------------



//----------------
document.getElementById('memory1').addEventListener('click', function () {
    defaultAmount('memory-cost', 0);
});

//------------------
document.getElementById('memory2').addEventListener('click', function () {
    productsCost('memory-cost', 180);
});

//----------------
document.getElementById('storage1').addEventListener('click', function () {
    defaultAmount('storage-cost', 0);
});

//--------------------
document.getElementById('storage2').addEventListener('click', function () {
    productsCost('storage-cost', 100);
});

//-------------------
document.getElementById('storage3').addEventListener('click', function () {
    productsCost('storage-cost', 180);
});

//---------------------
document.getElementById('delivery1').addEventListener('click', function () {
    defaultAmount('delivery-cost', 0);
});

//---------------------
document.getElementById('delivery2').addEventListener('click', function () {
    productsCost('delivery-cost', 20);
});

document.getElementById('apply').addEventListener('click', function () {

});
