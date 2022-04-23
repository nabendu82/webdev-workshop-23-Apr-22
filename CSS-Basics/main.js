const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const userList = document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' || messageInput.value === ''){
        alert('Please enter all fields');
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${messageInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}