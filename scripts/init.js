var menu = document.querySelector('nav'),
    btn = document.querySelector('button');

btn.addEventListener('click', function(e){
    btn.classList.toggle('is-active');
    menu.classList.toggle('active');
    menu.style.height = document.documentElement.scrollHeight+'px';
    e.preventDefault();
});


