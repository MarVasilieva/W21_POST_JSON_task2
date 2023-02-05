let errors = [];
     function checkValidity(input){
        let validity = input.validity;
         if (validity.valueMissing) {
          errors.push('Поле  ' + input.placeholder + ' не заполнено ');
         }
         if (validity.patternMismatch) {
          errors.push('Неверный формат заполнения');
         } 
         
      }
      function checkAll() {
        errors = [];
        let inputs = document.querySelectorAll("input") ;
        console.log(inputs);
        for (let input of inputs){
            checkValidity(input);
        }
        document.getElementById('errorMessage').innerHTML =
        errors.join('. <br>'); 
    }
    postButton.onclick = function (event){
        event.preventDefault();
        let user = {
            yourname: document.getElementById("name").value,
            yourfamily: document.getElementById("family").value,
            yourlogin: document.getElementById("login").value,
            yourphone: document.getElementById("tel").value,
            youremail: document.getElementById("email").value,
            yourpassword: document.getElementById("password").value
        }
            console.log(user);
    fetch ("https://httpbin.org/post",
    {
    method: 'POST',
    body  : JSON.stringify(user),
    headers :{
        'Content-Type': 'application/json;charset=utf-8'
    },
    })
    .then (response => response.json())
    .then(user =>{
        console.log(user);
    })
    .catch(error =>console.log(error));
    }