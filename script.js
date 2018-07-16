var todoList = {                                      // create the variable 'todoList' as an object
  todos: [],                                          // set the todos object property to an empty array
  displayTodos: function() {                          // create the 'displayTodos' method
         if (this.todos.length === 0) {               // use 'if' statement (adds logic to the program) to check if there are todos
    console.log('Your todo list is empty!');          // print out comment if above statement is true
   } else {                                           // start of the 'else' statement - second part of logic 
      console.log('My Todos:');                       // print out Todos to the Console
      for (var i = 0; i < this.todos.length; i++) {   // start basic 'for' loop. Uses 'this.todos.length' so all elements in array can be checked and incremement by 1
        if (this.todos[i].completed === true) {       // 'if' logic checks the value of [i] to see if todos are strictly equal to completed 
          console.log('(x)', this.todos[i].todoText); // print out '(X)' check box using 'this.todos' indicating todos are complete/checked
      } else {                                        // else statement logic to follow from above if not true, will then run the next line of code
          console.log('( )', this.todos[i].todoText); // prints out empty check box '( )'
        }
      }
    }
  },
  addTodo: function(todoText) {               // create add 'todoText' method which will equal the value passed in by user
    this.todos.push({                         // using 'this.todos.push'method to add the text input by user to todos array
    todoText: todoText,                       // first 'todoText' is the name of property on the object, second 'todoText' is the Parameter that is passed in by the user from the first line 
    completed: false                          // Boolean property of the todoText object set to false by default because it is a new todo, it will not be completed by default
   });
    this.displayTodos();                      // prints out todos
  },
  changeTodo: function(position, todoText) {  // create 'changeTodo' method with two parameters, one for position to identify which todo to change, the second for the item pased in by user
    this.todos[position].todoText = todoText; // take the new todoText input and position set by user and updates the to todos array 
    this.displayTodos();                      // display the todos
  },
  deleteTodo: function(position) {            // create the 'deleteTodo' method with one parameter for position that identifies the todo to be deleted
    this.todos.splice(position, 1);           // use .splice method to delete todo given its position, second argument defines amount of todos to be deleted = 1 
    this.displayTodos();                      // display the todos 
  },
  toggleCompleted: function(position){        // create Toggle Completed method, one parameter for position
  var todo = this.todos[position];            // create variable todo, set it equal to todos 
    todo.completed = !todo.completed;         // check the todos that do NOT equal completed
    this.displayTodos();                      // display the todos
  },  
  toggleAll: function() {                     // create the toggle all method
    var totalTodos = this.todos.length;       // create variable totalTodos, set it equal to todos variable total length
    var completedTodos = 0;                   // create variable completedTodos, set it to equal 0 
     for (var i = 0; i < totalTodos; i++) {   // use the for loop to run over totalTodos variable 
      if (this.todos[i].completed === true) { // use if statement to check if todos are completed
        completedTodos++;                     // increment by one each time in the for loop
      }
    }
    if (completedTodos === totalTodos) {      // check if the completed Todos are stricly equal to total Todos
      for (var i = 0; i < totalTodos; i++) {  //  use the for loop to run over totalTodos variable 
        this.todos[i].completed = false;      // set todos completed to false, or unchecked
      }
  } else {                                    // the else statement will run if the above is true 
       for (var i = 0; i < totalTodos; i++)   // for loop runs over totalTodos
         this.todos[i].completed = true;      // sets todos to completed, or checked
  }
    this.displayTodos();                      // display the todos
 }
};
