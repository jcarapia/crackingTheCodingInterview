/*
Find maximum single sell profit 

Given a list of day stock prices (integeres for simplicity), find the maximum single sell profit. 

We need to maximize the single buy/sell profit and in case we can't make any profit, we'll try 
to minimize the loss. For below examples, buy and sell priced for making the maximium profit are
highlighted. 

	[8, 5, 12, 9, 19, 1] => buy = 5, sell = 9
	[21, 12, 11, 9, 6, 3] => buy = 12, sell = 11
*/

// Naive solution first in O(n^2) time
var testArray_1 = [8, 5, 12, 9, 19, 1];
var testArray_2 = [21, 12, 11, 9, 6, 3];

function maxSingleProfit(array) {
	let buy = array[0];
	let sell = array[1];
	let profit = sell - buy;

	for(var i = 0; i < array.length-1; i++){
		for(var j = i+1; j < array.length; j++) {
			let current_profit = array[j] - array[i]
			if(current_profit > profit) {
				buy = array[i];
				sell = array[j];
				profit = current_profit;
			}
		}
	}
	return [buy, sell, profit];
}

console.log(maxSingleProfit(testArray_1));