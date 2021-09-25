//selectors
let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');

//event listener 1 (for submit)
form.addEventListener('submit', function(e){
    e.preventDefault();
})
//event listener  (for reset button)
resetButton.addEventListener('click', function(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = " ";
    email.value = " ";
    message.value = " ";
})
//event listener 3 (for send button)
sendButton.addEventListener('click', function(){
    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name = name.value;
localStorage.setItem('name', name);

    email = email.value;
localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);

    

})