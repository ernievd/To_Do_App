$(document).ready(readySetGo);

function readySetGo() {
    console.log('readySetGo working');

    // Display tasks from database table
    getTasks();

    // Event Listeners
    $('#addTask').on('click', addTask);
} // End readySetGo


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
                // let $listItem = $(`<li class="taskItem jumbotron" data-id="${taskResponse.id}">`);
                // $listItem.append(`<h2 class="taskName" data-name="${taskResponse.task_name}">${taskResponse.task_name}</h2>`);
                // $listItem.append(`<p class="taskAssignee" data-assignee="${taskResponse.task_owner}">Owner: ${taskResponse.task_owner}</p>`);
                // $listItem.append(`<p class="gender" data-priorityr="${taskResponse.task_priority}">Priority: ${taskResponse.task_priority}</p>`);
                // $listItem.append(`<p class="notes">${taskResponse.notes}</p>`);
                // // $listItem.append(`<button class="deleteButton btn btn-info">Delete</button>`);
                // // $listItem.append(`<button class="editButton btn btn-info">Edit</button>`);
                // $('#taskList').prepend($listItem);


                // Create a new row with all the returned data for each instance in the returned object
                //    Also store the data-id info in each row in case it is needed from the html in the future
                $('.table').append(`<tr> data-id="${taskResponse.id}
                    <td>${taskResponse.task_name}</td> 
                    <td>${taskResponse.task_owner}</td>
                    <td>${taskResponse.task_priority}</td>
                    <td>${taskResponse.notes}</td>
                    <td><button class="completeButton btn btn-info">Task Completed</button></td>
                    <td><button class="editButton btn btn-info">Edit</button></td>
                    <td><button class="deleteButton btn btn-info">Delete</button></td>
                    </tr>`);
            }
        }
    });
} // End getTasks function










