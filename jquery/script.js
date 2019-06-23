$(document).ready(function () { //вместо DOMContentLoaded
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function () {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function () {
        $('.image:odd').animate(
            {
                opacity: "toggle",
                height: 'toggle',
                width: "toggle"
            }, 3000
        );  
    });

});

// document.querySelectorAll(".list-item").forEach():
// .classList
// .addEventListener
// $.ajax - fetch
// animations

/* В целом нативный JS уже использует все плюсы Jquery,
но знать его нужно так как очень многие популярные 
продукты - 80%(плагины, библиотеки написаны на Jquery) */