document.addEventListener('DOMContentLoaded', () => {
const input = document.querySelector("#favchapter");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => displayList(chapter));

//Add event listener button and check input is not blank
button.addEventListener("click", () => {
    if (input.value !== "") {  
        
        // call the function that outputs the submitted chapter
      displayList(input.value); 
      //add input value to chaptersArray
      chaptersArray.push(input.value);  
    // update the localStorage with the new array
      setChapterList(); 
      // clear the input
      input.value = ""; 
      // set the focus back to the input
      input.focus(); 
    } else {
        input.focus();
    }

  });


  //Function to display list with one parameter named "item"
  function displayList(item) {
    //Create a lsit and delete button
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item; // note the use of the displayList parameter 'item'
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete"); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    //append delete button
    li.append(deleteButton);
    list.append(li);
    //add evemt listener to delete button 
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      deleteChapter(item); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });    
  }

  //function "setCahpterList" set to the local storagge item and use JSON.stringify()to stringify the array
  function setChapterList() {
    localStorage.setItem("myfavBomList", JSON.stringify(chaptersArray));
  }

  //function to get chapter list from 'localStorage.no parameter needed use JSON.parse
  function getChapterList() {
    return JSON.parse(localStorage.getItem("myfavBomList"));

  }

  // Function to delete a chapter
function deleteChapter(chapter) {
    // Remove the last character (the '❌')
    chapter = chapter.slice(0, chapter.length - 1);
    // Filter chaptersArray to exclude the chapter to be deleted
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    // Update the localStorage with the new array
    setChapterList();
  }
});
