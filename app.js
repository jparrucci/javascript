// from data.js
var tableData = data;
table(tableData)

// // YOUR CODE HERE!
// movmovieScores.forEach(function(score) {
//     // Add each score to the ratings count
//     sum += score;
//   ieScores.forEach(function(score) {
//     // Add each score to the ratings count
//     sum += score;
// var submit = d3.select("#submit");

function table(ufodata){
        var tbody = d3.select("#ufo-table");
        tbody.html(" ") 
        ufodata.forEach(function(newdata) {
            var trow = tbody.append("tr");
            var datainfo = Object.entries(newdata);
            datainfo.forEach(function(uforows){
            trow.append("td").text(uforows[1]); 

    });
});
}

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value")

//   console.log(inputValue);
//   console.log();

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  table(filteredData)});