/*
Colleen is turning  years old! She has  candles of various 
heights on her cake, and candle has height . Because the 
taller candles tower over the shorter ones, Colleen can 
only blow out the tallest candles.

Given the  for each individual candle, find and print the
 number of candles she can successfully blow out.
 */

/*
1. Initiate a count variable to track number of candles that 
  can be blown
2. Initate a highest varible to keep track of the highest candle 
  so far as we iterate over the array. 
3. If a candle is as tall, or taller than the highest, then 
  it can be blown. 
4. If the current candle is taller than the current highest, 
 then replace the highest with the current. 


*/

let candles = [5, 3, 2,1, 3, 4, 1];
//Expected output: 2

birthdayCandles = (candleArray) => {
  let count = 0;
  let highest = 0;

  return candleArray.filter((candle) => {
    if(candle >= highest){
      count++
      highest = candle;
    }
    return candle >= highest
  }).length;
};

console.log(birthdayCandles(candles))

