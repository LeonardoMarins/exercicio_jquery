$(document).ready(function () {

    $('form').on('submit', function (e) { // igual ao addeventlistner
        e.preventDefault();
        const nome = $('#campo-nome').val();
        if (nome == '') {
            alert("o nome nao pode ser vazio");
        } else {
            $('ul').append('<li>' + nome + '<input class="checked" type="checkbox" /> </li>');
        }
    })
    $('ul').on('click', 'li', function () {
        $(this).toggleClass('teste');
    })
});

