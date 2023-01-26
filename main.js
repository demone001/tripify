$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    event.preventDefault();
  },
  false
);

const name = document.getElementById('form');
const email1 = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault();

    validate.inputs();
})

const setError = (element, message) => {
    const inoutControl = element.parentElement;
    const errorDispay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const isValidEmail = email => {
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const nameValue = name.value.trim();
}

if (nameValue === '') {
    setError(name, 'Ime je obavezno');
}else {
    setSuccess(name);
}

if (emailValue === '') {
    setError(email, 'Email je obavezan');
}else if (!isValidEmail(emailValue)){
    }else {
        setSuccess(email);
    }

    

