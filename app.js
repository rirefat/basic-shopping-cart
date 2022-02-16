// Function of Clearing Products From Cart 
function clear(product){
    document.getElementById(product+'-total').innerText = 0;
    document.getElementById(product+'-number').value = 0;
}

// Update Product from the cart page
function updatePhone(product, price, isIncreasing){
    let productQuantity = document.getElementById(product+'-number');
    let productNumber = productQuantity.value;
    if(isIncreasing == true){
        productQuantity.value = parseInt(productNumber)+1;        
    }
    else if(productNumber > 0){
        productQuantity.value = parseInt(productNumber)-1;        
    }
    let productTotalPrice = productQuantity.value * price;
    document.getElementById(product+'-total').innerText= productTotalPrice;

    // Total Price Calculation 
    calculation();
} 

// Phone Event Handle 
document.getElementById('phone-plus').addEventListener('click', function(){
    updatePhone("phone",1259,true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updatePhone("phone",1259,false);
});
document.getElementById('clear-phone').addEventListener('click', function(){
    clear('phone');
})

// Case Event Handle 
document.getElementById('case-plus').addEventListener('click', function(){
    updatePhone("case",59,true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updatePhone("case",59,false);
});
document.getElementById('clear-case').addEventListener('click', function(){
    clear('case');
})

// Price Calculation
function calculation(){
    let PhonePrice = parseInt(document.getElementById('phone-total').innerText);
    let casePrice = parseInt(document.getElementById('case-total').innerText);
    let subTotal = PhonePrice + casePrice;
    document.getElementById('sub-total').innerText = subTotal;    
}


