
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.min';
import './sass/style.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const hS = document.querySelector('.hide-s');
const hC = document.querySelector('.hide-c');
const hE = document.querySelector('.hide-e');
window.onload = () => {
    hS.classList.remove('hide-s');
    hC.classList.remove('hide-c');
    hE.classList.remove('hide-e');
};

const navLink = document.querySelectorAll(".navbar ul>li>a");
    for (let n =0; n < navLink.length; n++){
        navLink[n].addEventListener("click", function (e) {
            let target = "#" + navLink[n].getAttribute("href");
            e.preventDefault();
            window.scrollTo({
                top: document.querySelector(target).offsetTop - 70,
                behavior: 'smooth'
            });
        });
    };
    const section = document.querySelectorAll('.section');
        window.onscroll = () => {
            let scrollPosition = document.documentElement.scrollTop + 200 || document.body.scrollTop + 75;
            for (let s = 0; s < section.length; s++) {
                if (section[s] && section[s].offsetTop <= scrollPosition){
                    let id = section[s].getAttribute("id");
                    document.querySelector('.active').classList.remove('active');
                    document.querySelector("a[href*=" + id + "]").classList.add('active');
                }
            }
        };
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})();
document.getElementById('fullYear').innerHTML = new Date().getFullYear();