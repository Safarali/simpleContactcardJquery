$(document).ready(function() {
    $('.registration').submit(function () {
        var name = $('#name').val();
        var last = $('#last_name').val();
        var email = $('#email').val();
        var tel = $('#tel').val();


        var newData = "<tr><td>"+name+"</td><td>"+last+"</td><td>"+email+"</td><td>"+tel+"</td></tr>";
        $('tbody').append(newData);
        $('#name').val("");
        $('#last_name').val("");
        $('#email').val("");
        $('#tel').val("")
        return false;
    });

});
