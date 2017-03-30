// Flatten the object:
/*
var o = {
  a: {
    m: {
      x: "1",
      y: "2"
    },
        z: 15,
        k: {
            char: "warlie"
        }
  },
  b: "3",
  c: {
    m: "4"
  }
};
output:
{
  a.m.x: 1,
  a.m.y: 2,
  b: 3,
  c.m: 4
}
*/

function flattenObject(object) {
	
	var results = {};
	var flat_obj;
	
	for(var key in object) {
		if( typeof(object[key]) === 'object') {
			 //flat_obj = 
			 flatten(key, object[key]);
			 //for(var key in flat_obj) {
			 	//results[key] = flat_obj[key];
			 //}
		} else {
			results[key] = object[key];
		}
	};

	function flatten(string, object) {

		var flat_key;
		for(var key in object) {

			if(typeof(object[key]) === 'object') {
				flat_key = string + '.' + key;

				flatten(flat_key, object[key]);
			} else {

				flat_key = string + '.' + key;
				results[flat_key] = object[key];
			}
		}
	}

	return results;
};

// calls flatten with (b, {c:2})
var o = {
  a: {
    m: {
      x: "1",
      y: "2"
    },
        z: 15,
        k: {
            char: "warlie"
        }
  },
  b: "3",
  c: {
    m: "4"
  }
};


console.log(flattenObject(o))









