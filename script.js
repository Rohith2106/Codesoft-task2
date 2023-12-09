let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber =>{
    inputNumber.oninput = () =>{
        if(inputNumber.value.length > inputNumber.maxlength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxlength);
    };
});

let btn = document.querySelector(".fa-heart");

btn.addEventListener('click' ,() => {
    btn.style.backgroundColor = '#FF0000';
});

 let lmail = document.getElementById('lmail');
 let lpass = document.getElementById('lpass');

 let mail = [];
 let pass = [];

 let rmail = document.getElementById('rmail');
 let rpass = document.getElementById('rpass');

 let savelogin = () => {
    mail.push(rmail);
    mail.push(rpass);
    window.location.replace("login.html");
 }

let login = () =>{
    let num ;
    num = mail.indexOf('lmail');
    if (lpass == pass[num]){
        window.location.replace("index.html");
    }
}