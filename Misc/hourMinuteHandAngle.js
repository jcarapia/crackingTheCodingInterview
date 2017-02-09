/*

Given the time of day and an analog clock. Find the angle between 
the minute hand and  the hour hand given the time. 

Example: 
input: "03:00"
output: 45 

input: "06:00"
output: 180

*/

function hourMinuteHandAngle(time) {
	
	var time_array = time.split(":");
	var hours = Number(time_array[0]);
	var minutes = Number(time_array[1]);

	var degree_per_minute = 360/60;
	var degree_per_hour = 360/12;
	var hour_hand_degree_per_minute = 30/60;

	//Find the location of the minutes hand:
	var minute_hand_location = minutes * degree_per_minute;

	//Find the location of the hour hand:
	var hour_hand_location = hours * degree_per_hour + (hour_hand_degree_per_minute * minutes);

	//Subtract the difference
	var difference = Math.abs(minute_hand_location - hour_hand_location);

	//always return the smaller angle between the hands
	if(difference > 180){
		difference = 360 - difference;
	}

	return difference;
};

console.log(hourMinuteHandAngle('2:02'));

