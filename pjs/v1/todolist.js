var todoList = {
  todos: [], 
  addTodo: function(todoText) {
    this.todos.push({
        todoText: todoText,
        completed: false
    });      
  },
  editTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;    
  },
  deleteTodo: function (position) {
    this.todos.splice(position , 1);   
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;   
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });   
       
    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;               
      }      
    });
  } 
};

var handlers = {
   addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput'); 
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value ='';
    view.displayTodos();
  },
  editTodo: function() {
    // get the position of the todo to be edited
    var editTodoTextPosition = document.getElementById('editTodoTextPosition');
    // get the new todo text input entered
    var editTodoTextInput = document.getElementById('editTodoTextInput');
    // update the DOM element with the new text
    todoList.editTodo(editTodoTextPosition.valueAsNumber, editTodoTextInput.value);
    // clear the text input field
    editTodoTextPosition.value='';
    editTodoTextInput.value='';
    view.displayTodos();
  },
  // editTodoTextPosition: function() {
  //   var currentTodoTextPosition = document.getElementById('currentTodoTextPosition');

  //   var newTodoTextPosition = document.getElementById('newTodoTextPosition');

  //   todoList.editTodo()
  // },
  deleteTodo: function(position) { 
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      if (toggleCompletedPositionInput === 0) {
        return;
      }
    toggleCompletedPositionInput.value='';
    view.displayTodos();  
    }    
  };

  var view = {
    displayTodos: function() {  
      var todosUl = document.querySelector('ul');
      todosUl.innerHTML = '';
      
      todoList.todos.forEach(function(todo, position) {            
        var todoLi = document.createElement('li');   
        var todoTextWithCompletion = '';

        if (todo.completed === true) {
          todoTextWithCompletion = '( * ) ' + todo.todoText;
        } else {
          todoTextWithCompletion = '(  ) ' + todo.todoText;
        }

        todoLi.id = position;  
        todoLi.innerText = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function() {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButton';
      return deleteButton;
    },
    setUpEventListeners: function() {
      var todosUl= document.querySelector('ul');
 
      todosUl.addEventListener('click', function(event) {
        var elementClicked = event.target;
        if (elementClicked.className === 'deleteButton') {
          handlers.deleteTodo(parseInt(elementClicked.parentNode.id));  
        }
      });
    }
  };

  view.setUpEventListeners();
