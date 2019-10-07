module.exports = function main(inputs) {
    var store = [];
    var total = 0;
    var current = '';
    var receipt = '***<store earning no money>Receipt ***\n';
    for (var x = 0; x < inputs.length; x++) {
        var totalBottles = 0;
        var unitPrice = inputs[x].Price;
        var subTotal = 0;
        for (var y = x; y < inputs.length; y++) { 
            if(inputs[y].Name == inputs[x].Name){
                totalBottles++;
                subTotal += unitPrice;
            } else{
                total += subTotal;
                receipt += 'Name: ' + inputs[x].Name + ', Quantity: ' + totalBottles + ', Unit price: ' + unitPrice + '.00 (yuan), Subtotal: '  + subTotal + ' (yuan)\n';
                x = y;
                break;
            }
        }
        x -= 1;
        if(x + 1 == inputs.length){
            receipt += '----------------------\n';
            receipt += 'Total: ' + total + '.00 (yuan)\n';
            receipt += '**********************\n';
        }
    }
    return receipt;
};