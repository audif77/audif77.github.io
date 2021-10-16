const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const gender = document.getElementsByName('gender');
const terms = document.getElementById('terms');

name.addEventListener('input', (e) => {
    if(name.value === ''){
        setErrorFor(name, 'Name cannot be blank');
    }else{
        setSuccessFor(name);
    }
});

email.addEventListener('input', (e) => {
    if(email.value.length == 0){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(email.value)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }
});

password.addEventListener('input', (e) => {
    var numbers = /[0-9]/g;
    if(password.value === ''){
        setErrorFor(password, 'Password cannot be blank');
    }else{
        if (password.value.length > 16){
            setErrorFor(password, 'Password limit is 16 characters');
        }else if (password.value.length < 8){
            setErrorFor(password, 'Password must have more than 7 characters');
        }else{
            if (!password.value.match(numbers)){
                setErrorFor(password, 'Password must have at least 1 number');
            }else{
                setSuccessFor(password);
            }           
        }
    }
});

form.addEventListener('submit', (e) => {
    if(name.value === ''){
        setErrorFor(name, 'Name cannot be blank');
        e.preventDefault();
    }else{
        setSuccessFor(name);
    }

    var numbers = /[0-9]/g;
    if(password.value === ''){
        setErrorFor(password, 'Password cannot be blank');
        e.preventDefault();
    }else{
        if (password.value.length > 16){
            setErrorFor(password, 'Password limit is 16 characters');
            e.preventDefault();
        }else if (password.value.length < 8){
            setErrorFor(password, 'Password must have more than 7 characters');
            e.preventDefault();
        }else{
            if (!password.value.match(numbers)){
                setErrorFor(password, 'Password must have at least 1 number');
                e.preventDefault();
            }else{
                setSuccessFor(password);
            }           
        }
    }

    var genValue = false;

    for(var i=0; i<gender.length;i++){
        if(gender[i].checked == true){
            genValue = true;
            break;
        }
    }
    
    if(!genValue){
        about = document.getElementById('error');
        about.style.display='block';
        about.style.color='#e74c3c';  
        e.preventDefault();  
    }else{
        about = document.getElementById('error');
        about.style.display='none';
        about.style.color='black';
    }

    if(terms.checked==false){
        about = document.getElementById('error2');
        about.style.display='block';
        about.style.color='#e74c3c';
        e.preventDefault(); 
    }else{
        about = document.getElementById('error2');
        about.style.display='none';
        about.style.color='black';
    }
});

form.addEventListener("submit", (e) => {
    if(email.value === ''){
        setErrorFor(email, 'Email cannot be blank');
        e.preventDefault();
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
        e.preventDefault();
    }else{
        setSuccessFor(email);
    }
});

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
