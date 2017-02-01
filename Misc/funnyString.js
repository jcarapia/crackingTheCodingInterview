function processData(input) {
    //Enter your code here
    var input_array = input.split("\n");
    for(var j = 1; j < input_array.length; j++) {
      console.log(funny(input_array[j]));
    }
};

function funny(string) {
  var s_0, s_1, r_0, r_1, s_diff, r_diff;
  
  var rev_string = string.split("").reverse().join("");
  
  for(var i = 1; i < string.length; i++){
    s_0 = string.charCodeAt(i-1);
    s_1 = string.charCodeAt(i);
    r_0 = rev_string.charCodeAt(i-1);
    r_1 = rev_string.charCodeAt(i);
    
    s_diff = Math.abs(s_1 - s_0);
    r_diff = Math.abs(r_1 - r_0);
    
    if(s_diff !== r_diff) {
      return "Not Funny";
    };
  };
  return "Funny";
};
