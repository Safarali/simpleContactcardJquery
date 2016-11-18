

$(document).ready(function() {
    $('.registration').submit(function () {
        var name = $('#name').val();
        var last = $('#last_name').val();
        var email = $('#email').val();
        var tel = $('#tel').val();
        var desc = $('#description').val();

        if (name && last && email && tel && desc) {
            $('.details').append(`
                <div class="card">
                    <h4>${name} ${last}</h4>
                    <p class="email">Email: ${email}</p>
                    <p class="tel">Phone $: ${tel}</p>
                    <button id="toggle-btn">Description</button>
                    <button id="delete">Delete</button>
                    <p class="description">About: ${desc}</p>
                </div>`);

                $('#name').val("");
                $('#last_name').val("");
                $('#email').val("");
                $('#tel').val("");
                $('#description').val("");
                $('.description').hide();

        }
        return false;
    });
    $('.details').on('click', '#toggle-btn', function(){
        $(this).siblings('.description').slideToggle(200)
    });
    $('.details').on('click', '#delete', function () {
        $(this).parent().hide();
    })
});
