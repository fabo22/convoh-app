const editButton = document.getElementById('edit-button');
const edit = document.getElementById('update-delete');

let starterVal = 0;
edit.style.display = 'none'

editButton.addEventListener('click', function() {
    if(edit.style.display === 'none') edit.style.display = 'block';
    else edit.style.display = 'none';
});

