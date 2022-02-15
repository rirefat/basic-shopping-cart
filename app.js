// Update functionality of phone quantity 
document.getElementById('phone-plus').addEventListener('click', function(){
    let phoneQnty = document.getElementById('phone-number').value;
    let  phoneQntyTotal = parseInt(phoneQnty) + 1;
    document.getElementById('phone-number').value = phoneQntyTotal;
    
    document.getElementById('phone-minus').disabled = false;
    console.log(phoneQntyTotal);

    let phonePrice = phoneQntyTotal * 1219;
    document.getElementById('phone-total').innerText = phonePrice;
})

document.getElementById('phone-minus').addEventListener('click', function(){
    let  phoneQnty = document.getElementById('phone-number').value;
    // debugger;
    let  phoneQntyTotal = parseInt(phoneQnty) - 1;
    if(phoneQntyTotal <= 0 ){
        document.getElementById('phone-number').value = phoneQntyTotal;
        document.getElementById('phone-minus').disabled = true;
    }
    else{
        document.getElementById('phone-number').value = phoneQntyTotal;
        console.log(phoneQntyTotal);
    }

    let phonePrice = phoneQntyTotal * 1219;
    document.getElementById('phone-total').innerText = phonePrice;
    
})


// Update functionality of phone's casing quantity 
document.getElementById('case-plus').addEventListener('click', function(){
    let caseQnty = document.getElementById('case-number').value;
    let  caseQntyTotal = parseInt(caseQnty) + 1;
    document.getElementById('case-number').value = caseQntyTotal;
    
    document.getElementById('case-minus').disabled = false;
    console.log(caseQntyTotal);

    let casePrice = caseQntyTotal * 59;
    document.getElementById('case-total').innerText = casePrice;
})

document.getElementById('case-minus').addEventListener('click', function(){
    let  caseQnty = document.getElementById('case-number').value;
    // debugger;
    let  caseQntyTotal = parseInt(caseQnty) - 1;
    if(caseQntyTotal <= 0 ){
        document.getElementById('case-number').value = caseQntyTotal;
        document.getElementById('case-minus').disabled = true;
    }
    else{
        document.getElementById('case-number').value = caseQntyTotal;
        console.log(caseQntyTotal);
    }

    let casePrice = caseQntyTotal * 59;
    document.getElementById('case-total').innerText = casePrice;
    
})

// Total Price
let subTotal = document.getElementById('sub-total').innerText;
let subTotalValue = parseInt(subTotal);
