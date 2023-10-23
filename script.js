const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your cod
	  return sampleObject.hasOwnProperty(key);


}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
