module.exports = function toReadable (number) {
    if(number === 0) {
        return 'zero';
      }
      let arrBeg = [' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
      let arrTen = [' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
      let result = [];

      let ones = number % 10;
      let tens = Math.floor(number % 100 / 10);
      let hundred = Math.floor(number / 100);
      
      if(hundred != 0) {
        result.push(arrBeg[hundred-1] + ' hundred');
      } 
    
      if(tens >= 2) {
        result.push(arrTen[tens - 2]);
        result.push(arrBeg[ones - 1]);
      } else {
        result.push(arrBeg[number % 100 - 1]);
      }
      return result.join('').trim();
}
