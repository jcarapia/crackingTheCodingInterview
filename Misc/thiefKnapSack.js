// var knapsack = function(items) {
//   var maxWeight = 100; //allow the thief to carr a max of 100 lb.
//   var sack = {};
//   var currentWeight = 0;
  
//   //console.log(items)
//   for(var i = 0; i < items.length; i++){
//     if(!sack[items[i][0]] && currentWeight + items[i][2] <= 100 ){
//       sack[items[i][0]] = [items[i][1], items[i][2]];
//       currentWeight += items[i][2]
//     }
//   }
  
//   var itemArray = [];
//   for(var key in sack){
//   	itemArray.push(sack[key]);
//   }

//   //console.log(itemArray)
//   totalCost = 0; 
//   itemArray.forEach(function(tuple){
//   	totalCost += tuple[0]
//   });
  
//   return [totalCost, currentWeight]
// }
// /*
// //items will be in the form of [name, cost, weight];
//  //first create a solution that adds itmes up to the max weight
//  //regardless of cost
 
// */
// var testArray1 = [['mask', 10, 20], ['tank', 20, 30],
//                 ['speargun', 30, 40],['suit', 40, 50],
//                 ['belt', 50, 60]];
// console.log(knapsack(testArray1))                

// // TODO: Write test cases!
// function assert(expectedBehavior, actualBehavior){
//     if(!expectedBehavior){
//         console.log(actualBehavior)
//     } else {
//         console.log('test passed')
//     }
// }

// assert(knapsack(testArray1) === 80, 'expect max weight to be 80');

function getRandomIntInclusive(min, max) {
  return (Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntInclusive(4,5))


