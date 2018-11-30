// TodoMVC App `create` method With jQuery

create: function (e) {
			var $input = $(e.target);
			var val = $input.val().trim();

			if (e.which !== ENTER_KEY || !val) {
				return;
			}

			this.todos.push({
				id: util.uuid(),
				title: val,
				completed: false
			});

			$input.val('');

			this.render();
		},
    
  // `create` method without jQuery
  
  create: function (e) {  
      var input = e.target; 
      var val = input.value;        
        if (e.which !== ENTER_KEY || !input) {              
          return;                               
        }			
      this.todos.push({                         				
        id: util.uuid(),                        				 
        title: input.value,                              
				completed: false  
			});			
      
      input.value = '';   			
      this.render();        
		},
