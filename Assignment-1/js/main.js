// PART 2 of the Assingment, make sure you've done PART 1 first!

// Step 1: Select the body of the HTML document and append an h2 element
// with the text "Starting Part 2! We're Learning D3"


// Step 2: Select the body again and append a div with the id dynamic-content



// Step 3: Select the div you just created (using its id!) and append a
// paragraph with some text of your choice (you can also style this if you want!)



// PART II: Binding data

var schools = [
    { name: "Harvard", signups: 4695, region: "Northeast" },
    { name: "UW Madison", signups: 4232, region: "Midwest" },
    { name: "WashU", signups: 3880, region: "Midwest" },
    { name: "Brown", signups: 2603, region: "Northeast" },
    { name: "UChicago", signups: 2088, region: "Midwest" },
    { name: "UW", signups: 2042, region: "West" }
];

// Step 1: Append a new SVG element to HTML document with D3
// (width = 500px, height = 500px)
var SVG = d3.select("#svg");

// Step 2: Append a new SVG circle for every object in the schools array
const circle = [];
for (var i = 0; i < schools.length; i++) {
    circle[i] = SVG.append("circle");
};


// Step 3: Define the following dynamic properties for each circle:
//   - Position: set the x/y coordinates and make sure that the circles don’t overlap each other
//   - Radius: schools with over 3500 signups should be twice as big as schools with less than 2500 signups
//   - Colors: use a different color for each region
//   - Border: add a border to every circle (SVG property: stroke)
var lx = 0;
var ly = 60;
for (var i = 0; i < schools.length; i++) {
    circle[i].style("stroke", "10");
    if (schools[i].signups > 3500) {
        circle[i].attr("cx", lx + 65).attr("cy", ly).attr("r", 30 * 2);
        lx = lx + 125;
    } else if (schools[i].signups <= 2500) {
        circle[i].attr("cx", lx + 35).attr("cy", ly).attr("r", 30);
        lx = lx + 65;
    } else {
        circle[i].attr("cx", lx + 50).attr("cy", ly).attr("r", 30 * 1.5);
        lx = lx + 95;
    };
    if (lx > 400) {
        lx = 0;
        ly = ly + 120;
    };
    if (schools[i].region == "Northeast") {
        circle[i].attr("fill", "blue");
    } else if (schools[i].region == "Midwest") {
        circle[i].attr("fill", "red");
    } else if (schools[i].region == "West") {
        circle[i].attr("fill", "green");
    }
};


// PART III: Loading data

// Step 1: Use D3 to load the CSV file "schools.csv". then, print the data
// to the console and inspect it in your browser


// Step 2: Filter the dataset: Filter the dataset to only include schools that are
// part of the Datamatch Schools (using the datamatchSchool variable).




// Step 3: Append a new paragraph to your HTML document that shows the
// number of Datamatch schools


// Step 4: Prepare the data - each value of the CSV file is stored as a string,
// but we want numerical values to be numbers.



// Step 5: Draw an SVG circle for each school in the filtered dataset
//   - All the elements (drawing area + circles) should be added dynamically with D3
//   - SVG container: width = 700px, height = 550px
//   - Use the randomly generated x/y coordinates for each school from the dataset to position the circles



// Step 6: Change the radius of the circle to be data-dependent
//   - The radius should be 5px for schools with signups less than 500
//   - The radius for all other schools should be 10px



// Step 7: Add labels with the names of the schools
//   - Use the SVG text element
//   - All the elements should be the class of school-label
//   - The labels should only be visible for schools with signups greater than 500



// Step 8: Styling - in the external stylesheet, do some styling
//   - Make sure to at least style school-label with font size = 11 px and
//   text anchor = middle


// Optional bonus step: add tooltips displaying the country for each school
// https://bl.ocks.org/d3noob/257c360b3650b9f0a52dd8257d7a2d73