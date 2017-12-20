/* JavaScript

Makes pages dynamic by manipulating the DOM */

// VARIABLES: containers of data

var number = 5;
var boolean = true;
var string = "cat"

/* ARRAYS: sequence of values
[] means array
Remember that array positions begin at 0 */

var numbers = [1, 2, 3, 4, 5];
numbers[2] // retrieve value with bracket notation

var names = ["Henry", "James", "Iris"]
names[1]

/* OBJECTS
{} means object */

var countries = [
  {
    name: "Poland",
    continent: "Europe"
  },
  {
    name: "China",
    continent: "Asia"
  },
  {
    name: "Uruguay",
    continent: "South America"
  }
]

countries[2] // returns {name: "China", continent: "Asia"}
countries[2].continent // returns "South America"

/* JSON: Javascript Object notation
Property names are surrounded by quotation marks */

var country = {
  "name": "Poland",
  "continent": "Europe"
};

// GeoJSON - optimised for storing spatial data

var cities <- {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature",
"properties": { "name": "Warsaw", "country": "Poland", "continent": "Europe"},
"geometry": { "type": "Point", "coordinates": [ 21.01223, 52.22968 ] } },
{ "type": "Feature",
"properties": { "name": "Beijing", "country": "China", "continent": "Asia"},
"geometry": { "type": "Point", "coordinates": [ 116.4074, 39.9042 ] } },
{ "type": "Feature",
"properties": { "name": "Montevideo", "country": "Uruguay", "continent": "South America"},
"geometry": { "type": "Point", "coordinates": [ -56.16453, -34.90111 ] } }
]
}

/* if statements: used to conditionally execute code
if (test) {
 // code to run if true
}
*/

// is it socially acceptable to drink cappuccino at a certain hour of the day?
if (hour > 10) {
    greeting = "You cannot order a cappuccino after 10am";
} else {
    greeting = "Cappuccino is lovely for breakfast";
}
var hour = 8;

/* for loops: used to repeatedly execute code
for (initialisation; test; update){
 // code to repeatedly execute
}
*/

// calculate the mean of an array
var numbers = [80, 77, 88, 95, 68], total = 0, avg = 0;
for(var i = 0; i < numbers.length; i++) {
  total += scores[i];
}
avg = total / numbers.length;

/* FUNCTIONS
*/

// function to calculate the mean of an array
function mean(numbers) {
    var total = 0,
        i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}
