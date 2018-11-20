// Higher order functions vs callback functions

// `runWithDebugger` is the higher order function, the function with no parameters is the callback function.
runWithDebugger(function() {
  for (var i = 0, i <10; i++) {
    console.log(i);
  }
});

// `setTimeOut` is the higher order function, the function with no parameters is the callback function.
setTimeout(function() {
  console.log('Wakey wakey, Dan!');
}, 5000);


// `forEach` is the higher order function, and the function with student as the parameter is the callback function.
var pets = ['Baxter', 'Bella', 'Tink', 'Miley'];

forEach(students, function(student) {
  console.log(student)
});

// `addEventListener` is the higher order function, and the function that passes in the event object is the callback function.
tutorialsElement.addEventListener('click', function(event) {
  console.log('The tutorials element was clicked!');
});

// A quick look at Handlebars templating

var htmlTemplate = '<div>{{title}}</div>';
var handlebarsTemplate = Handlebars.compile(htmlTemplate);

handlebarsTemplate({{title: 'This is a quick look at handlebars templating.'}});
