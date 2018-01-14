$(document).ready(readySetGo);

function readySetGo() {
    console.log('readySetGo working');

    // Display tasks from database table
    getTasks();

    // Event Listeners
    $('#addTask').on('click', addTask);
    $('.table').on('click', '.completeButton', completeTask);
    $('.table').on('click', '.deleteButton', deleteTask);

} // End readySetGo

//Get the current table data and populate the DOM with all
function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/toDo',
        success: function(response) {
            // empty the list on the DOM as to avoid appending
            $('#table').empty();
            console.log('response from getTask', response);
            for (let i = 0; i < response.length; i++) {
                const taskResponse = response[i];

                // Update the following to use template literals - back ticks

                // Check to see bool results of complete field and
                //      set a string with yes or no and
                //      set up completed button to show
                //      set up the color of the row by using bootstrap
                let completed = 'No';
                let setRowColor = `class="danger toDoItem"`;
                let completeButtonShow = `<td><button class="completeButton btn btn-info">Click to mark complete</button></td>`;
                if (taskResponse.task_complete){
                    completed = 'Yes';
                    completeButtonShow =  `<td></td>`;
                    setRowColor = `class="success toDoItem"`;
                }
                // Create a new row with all the returned data for each instance in the returned object
                //    Also store the data-id info in each row in case it is needed from the html in the future
                $('.table').append(`<tr ${setRowColor} data-id="${taskResponse.id}">
                    <td>${taskResponse.task_name}</td> 
                    <td>${taskResponse.task_owner}</td>
                    <td>${taskResponse.task_priority}</td>
                    <td>${completed}</td>
                    <td>${taskResponse.notes}</td>
                    <td><button class="editButton btn btn-info">Edit</button></td>
                    <td><button class="deleteButton btn btn-info">Delete</button></td>
                    <!--<td><button class="completeButton btn btn-info">Click to mark complete</button></td>-->
                    ${completeButtonShow}
                    </tr>`);
            }
        }
    });
} // End getTasks function

//Mark the matching entry that it is complete in the database and reload the page
function completeTask() {
        const buttonId = $(this).closest('.toDoItem').data('id');
        $.ajax({
            method: 'PUT',
            url: '/toDo/' + buttonId,
            data: { task_complete: 'Y' },
            success: function(response) {
                console.log('response:', response);
                //update the DOM
                $('#tableBody').empty();
                getTasks();
            }
        });
}// End completeTask function

function deleteTask () {
    const buttonId = $(this).parents('.toDoItem').data('id');
    $.ajax({
        method: 'DELETE',
        url: '/toDo/' + buttonId,
        success: function(response) {
            console.log('response', response);
            $('#tableBody').empty();
            getTasks();
        }
    });
}

function addTask() {
    let newTask = {
        task_name: $('#taskInput').val(),
        task_owner: $('#assigneeInput').val(),
        task_priority: $('#priorityInput').val(),
        //task_complete: $('#readyToTransfer').val(),
        notes: $('#taskNotesInput').val()
    };

    $.ajax({
        method: 'POST',
        url: '/toDo',
        data: newTask,
        success: function(response) {
            console.log('response:', response);
            $('#tableBody').empty();
            getTasks();
        },
        error: function(response) {
            alert('Fill out all input fields.');
        }
    });
}






