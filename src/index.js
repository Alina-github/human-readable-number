module.exports = function toReadable(number) {
        let ones = ['zero', 'one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let teens = ['ten', 'eleven', 'twelve', 'thirteen', ones[4]+'teen', 'fifteen', ones[6]+'teen', ones[7]+'teen', ones[8]+'teen', ones[9]+'teen'];
        let dozens = ['', '', 'twenty', 'thirty', 'fourty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let hundreds = ['hundred']
        
        
        if (number < 10) {
        return ones[number];}
        
        if (number > 9 && number < 20) {
        return teens[number%10];}
        
        
        if (number > 100) {
        let b = number%100;
        
         if (b < 100 && b%10 !== 0 && !(b > 9 && b < 20) && b > 9) {
        return ones[Math.floor(number/100)] + " " + hundreds[0] + " " + dozens[Math.floor(b/10)] + " " + ones[b%10];
        } else if (b > 9 && b < 20) {return ones[Math.floor(number/100)] + " " + hundreds[0] + " " + teens[b%10];}
        else if (b < 10) {return ones[Math.floor(number/100)] + " " + hundreds[0] + " " + ones[b%10];}
        else {return ones[Math.floor(number/100)] + " " + hundreds[0] + " " + dozens[Math.floor((number%100)/10)];}
        }
        
        if (number < 100 && number%10 !== 0) {
        return dozens[Math.floor(number/10)] + " " + ones[number%10];
        } else {
        return dozens[number/10];
        } 
        }
