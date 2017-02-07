/*

*/


function processData(input) {
    //Enter your code here
    var input_array = [];
    var input = input.split("\n");
    var zero_qty = parseInt(input[0].split(" ")[0]);
    var zeros_array = [];
    var start_index; //where do we start adding
    var end_index;  //where do we stop
    var additive;   //the number we add
  
    for(var j = 0; j < zero_qty; j++) {
      zeros_array.push(0);
    };
  
    for(var i = 1; i < input.length; i++) {
      input_array.push(input[i].split(" ").map(function(element){ return Number(element)}))
    };
    
    for(var k = 0; k < input_array.length; k++) {
       start_index = input_array[k][0] -1; // since the 1st element is in the 0th index
       end_index = input_array[k][1] -1; // since the 1st element is in the 0th index
       additive = input_array[k][2];
      
      for(var z = start_index; z <= end_index; z++ ) {
        zeros_array[z] = zeros_array[z] + additive;
      }
    };
  
    var max = Math.max(...zeros_array)
  
    
    console.log(max)
}; 