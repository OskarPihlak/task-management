$(document).keydown(e=> {
    console.log(e);
    switch (e.which){
        case 13:
            $( '#btn-check').click();
            console.log('enter ');
            document.querySelector('#button-add-task').click();
            break;
        case 39:
            $( '#btn-next').click();
            break;
        case 49:
            $( '.question-0').click();
            break;
        case 50:
            $( '.question-1').click();
            break;
        case 51:
            $( '.question-2').click();
            break;
        case 52:
            $( '.question-3').click();
            break;
        case 53:
            $( '.question-4').click();
            break;
        case 54:
            $( '.question-5').click();
            break;
        case 55:
            $( '.question-6').click();
            break;
        case 56:
            $( '.question-7').click();
            break;
        case 57:
            $( '.question-8').click();
            break;
        case 58:
            $( '.question-9').click();
            break;
    }
});

function addTask(){
    const inputValue = document.querySelector('#add-task').value;
    let taskCount =document.querySelectorAll('.task').length + 1;
    console.log(taskCount);
    document.querySelector('.container-tasks').innerHTML+= `
     <div id="task-${taskCount}" class="task blue darken-4">
            <div class="task-description">
                <p class="task-count">${taskCount}</p>
                <p class="task-content">${inputValue}</p>
            </div>
            <button class="waves-effect waves-light btn-small red darken-4 btn-task-remove" onclick="removeTask(${taskCount})">Eemalda</button>
        </div>
    `;

    $.ajax({
        type: "POST",
        url: "/tasks",
        dataType:'JSON',
        data: {id: taskCount, post_data: inputValue},
        success: function(msg){
            console.log('added to database');
        }
    });
    console.log('added to databse');
}

function sendMail(){
    console.log('mailSent');
    const inputValue = document.querySelector('#add-task').value;
}
function removeTask(number){

    const value = document.querySelector(`#task-${number} > div > p.task-content`).innerHTML;

    console.log(value);
    console.log('removed task' + number);
    $.ajax({
        type: "DELETE",
        url: "/tasks",
        data: {delete_data: value},
        success: function(msg){
          console.log('deleted from database');
        }
    });
    document.querySelector(`#task-${number}`).remove();
}
