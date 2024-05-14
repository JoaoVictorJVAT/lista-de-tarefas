
$(document).ready(function(){
    $('form').submit(function(e) {
        e.preventDefault();

        let taskName = $('input[type="text"]').val().trim();

        if (taskName !== ''){
            $('ul').append(`<li>${taskName}</li>`);
            $('input[type="text"]').val('');

            $('li').last().click(function(){
                $(this).toggleClass('completa');
            })
        }
    })
})