const pages = {}


const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const userNameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const checkbox = document.querySelector('input[type="checkbox"]');

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (event)=> {
    event.preventDefault();
    if(firstNameInput.value.trim() === ''){
        alert("please enter your name.");
        return;
    }
    if(lastNameInput.value.trim()=== ''){
        alert('please enter your last name.');
        return;
    }
    if(userNameInput.value.trim()=== ''){
        alert('please enter a user name.');
        return;
    }
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(emailInput.value)) {
      alert('Please enter a valid email address');
      return;
    }
   const arr =passwordInput.value.split('')
    if (arr.length <8 ) {
      alert('password must be at least 8 characters.');
      return;
    }
    if(!checkbox.checked){
        alert('read terms and conditions and check the box');
        return;

    } 
   

const userData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    userName: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  const data = JSON.stringify(userData);
  console.log(data);
   

});

let signup_btn = document.getElementById('submit-button');
signup_btn.addEventListener('click', signup);


function signup() {

    let username = document.getElementById('user-name').value;
    let password = document.getElementById('password').value;
    let first_name = document.getElementById('first-name').value;
    let last_name = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;

    let data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('username', username);
    data.append('email', email);
    data.append('password', password);

    axios.post('/api/signup', data)
        .then((response) => {
            console.log(response);
            if (response.data.status === 'success') {
                alert('You have signed up successfully!');
            }
        })
        .catch((error) => {
            console.error(error);
        });
}
