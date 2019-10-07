module.exports = function main(inputs) {
    var total = 0;
    var currentName = '';
    var unitPrice = 0;
    var unit = '';
    var totalBottles = 0;
    var subTotal = 0;
    var receipt = '***<store earning no money>Receipt ***\n';
    for (var x = 0; x < inputs.length; x++) {    
        if(currentName == ''){
            currentName = inputs[x].Name;
            unitPrice = inputs[x].Price;
            unit = inputs[x].Unit;
        }
        if(inputs[x].Name == currentName){
            totalBottles++;
            subTotal += unitPrice;
            if(x + 1 == inputs.length){
                total += subTotal;
                if(unit == 'bottle'){
                    receipt += 'Name: ' + currentName + ', Quantity: ' + totalBottles + ' ' + unit + 's, Unit price: ' + 
                    unitPrice + '.00 (yuan), Subtotal: '  + subTotal + '.00 (yuan)\n';
                } else{
                    receipt += 'Name: ' + currentName + ', Quantity: ' + totalBottles + ', Unit price: ' + 
                    unitPrice + '.00 (yuan), Subtotal: '  + subTotal + '.00 (yuan)\n';
                }
            }
        } else{
            total += subTotal;
            if(unit == 'bottle'){
                receipt += 'Name: ' + currentName + ', Quantity: ' + totalBottles + ' ' + unit + 's, Unit price: ' + 
                unitPrice + '.00 (yuan), Subtotal: '  + subTotal + '.00 (yuan)\n';
            } else{
                receipt += 'Name: ' + currentName + ', Quantity: ' + totalBottles + ', Unit price: ' + 
                unitPrice + '.00 (yuan), Subtotal: '  + subTotal + '.00 (yuan)\n';
            }
            x -= 1;
            currentName = '';
            unitPrice = '';
            unit = '';
            totalBottles = 0;
            subTotal = 0;
        }
        if(x + 1 == inputs.length){
            receipt += '----------------------\n';
            receipt += 'Total: ' + total + '.00 (yuan)\n';
            receipt += '**********************\n';
        }
    }
    return receipt;
};