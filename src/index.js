 module.exports = function toReadable (number) {
  let word ='';
  let a,b,c,d;
  let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']; 
  let beforeTwenty = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];  
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    a = Math.floor(number/100) ;
    b = number%100;
    c = Math.floor(b/10);
    d = b%10;
    if (number===0) {
        return word= units[10];
    } 
    if (a>=1) {
        word +=units[a]+" hundred";

    } if (b>=10 && b<=19) {
        word += " " + beforeTwenty[b-10];
        return word.trim();
    } if (b<10) {
        word+= " " + units[b];
        return word.trim();

    } if (b>19 && b<100) {
        word += " " + dozens[c-2] + ' ' + units[d];
        return word.trim();
    }
}
