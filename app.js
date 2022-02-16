// Function of Clearing Products From Cart 
function clear(product){
    document.getElementById(product+'-total').innerText = 0;
    document.getElementById(product+'-number').value = 0;
}

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
    // console.log('clicked +')
});

document.getElementById('case-minus').addEventListener('click', function(){
    updatePhone("case",59,false);
    // console.log('clicked -')
});
document.getElementById('clear-case').addEventListener('click', function(){
    clear('case');
})




