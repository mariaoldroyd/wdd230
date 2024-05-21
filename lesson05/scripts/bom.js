const list = document.getElementById('list');
        const input = document.getElementById('favchapter');
        const addButton = document.getElementById('submit');
        function addChapter() {
            const inputValue = input.value.trim();
            if (inputValue !== '') {
                input.value= '';
                const listItem = document.createElement('li');
                const span = document.createElement('span');
                const deleteButton = document.createElement('button');

                span.textContent = inputValue;
                deleteButton.textContent = 'Delete';
                listItem.appendChild(span);
                listItem.appendChild(deleteButton);

          // Append the list item as a child of the list
                list.appendChild(listItem);

          // Attach an event handler to the delete button
          deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
          });

          input.focus();
        }
        
    }
      
    addButton.addEventListener('click', addChapter);
    input.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            addChapter();
        }
    });