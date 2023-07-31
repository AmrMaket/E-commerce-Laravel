loginButton = () => {
  loginButton.addEventListener('click',(event)=>{
      event.preventDefault();

  const userNameInput = document.querySelector('#login-user-name');
  const passwordInput = document.querySelector('#login-password');
   
  let data = new FormData(); 
  data.append('username', username);
  data.append('password', password);
   
  fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            body: formdata,
            })
            .then(response => response.json())
            .then(data => {
                if(data.authorization.token){
                    localStorage.setItem('user_id', data.user.id)
                    localStorage.setItem('usertype', data.user.role_id)
                    window.location.href='/E-commerce-Frontend/src/pages/shop.html'
                }
            })
            .catch(error => console.log('error', error));

    })

}
login();