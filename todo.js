// Add a new task
document.getElementById("addButton").addEventListener("click", function() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement("li");
        li.setAttribute("draggable", "true"); // Make the task draggable

        // Add task text and delete button
        li.innerHTML = `  ${taskText}
            <button class="delete">Delete</button>`;

        // Add click event to mark task as completed
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Add delete button functionality
        li.querySelector(".delete").addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent the click event from marking the task as completed
            li.remove();
        });

        // Add dragstart event to make the item draggable
        li.addEventListener("dragstart", function (e) {
            // Store the currently dragged item in the 'selected' variable
            selected = e.target;
        });

        // Append the new task directly to the left box
        document.getElementById("left").appendChild(li);

        // Clear input field
        taskInput.value = "";
    }
});

// Get the left and right boxes by their IDs
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

// Variable to hold the currently selected item during dragging
let selected = null;

// Add dragover event listeners to both boxes (to allow dropping)
rightBox.addEventListener("dragover", function (e) {
    e.preventDefault(); // Allow dropping
});

leftBox.addEventListener("dragover", function (e) {
    e.preventDefault(); // Allow dropping
});

// Add drop event listeners to both boxes
rightBox.addEventListener("drop", function (e) {
    e.preventDefault(); // Prevent default handling of the event
    if (selected) {
        // Append the dragged item (selected) to the right box
        rightBox.appendChild(selected);
        // Clear the selected variable since the drop is complete
        selected = null;
    }
});

leftBox.addEventListener("drop", function (e) {
    e.preventDefault(); // Prevent default handling of the event
    if (selected) {
        // Append the dragged item (selected) back to the left box
        leftBox.appendChild(selected);
        // Clear the selected variable since the drop is complete
        selected = null;
    }
});
