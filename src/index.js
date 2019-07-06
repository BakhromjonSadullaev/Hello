// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
      const Values = {
      H:50,
      Q:25,
      D:10,
      N:5,
      P:1,
    }
    if(currency > 0 && currency <= 10000){
      let result = {};
      Object.keys(Values).forEach((name) => {
         while (Values[name] <= currency) {
          result[name]? result[name]++ : result[name] = 1;
          currency -= Values[name];
        }
      });
      return result;
    }
    return currency > 10000 ? {error: "You are rich, my friend! We don't have so much coins for exchange"} : {};
}

