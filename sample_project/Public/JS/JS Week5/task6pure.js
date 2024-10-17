function getSum(accumulator, item){
    return accumulator += parseFloat(item.value)
}



function totup(myForm){
    let total = 0;
    entries = myForm.elements.entry
    total = entries.reduce(getSum,0);
    total += parseFloat( myForm.elements.entry[1].value)
    
    document.getElementById("totalled").innerHTML = total.toFixed(2);
}
