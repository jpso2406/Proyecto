$(document).ready(function () {

    // Set idle time
    $(document).idleTimer(5000);

});

$(document).on("idle.idleTimer", function (event, elem, obj) {
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": 8000
    }

    toastr.warning('You can call any function after idle timeout.', 'Idle time');
    $('.custom-alert').fadeIn();
    $('.custom-alert-active').fadeOut();

});

$(document).on("active.idleTimer", function (event, elem, obj, triggerevent) {
    // function you want to fire when the user becomes active again
    toastr.clear();
    $('.custom-alert').fadeOut();
    toastr.success('Great that you decided to move a mouse.', 'You are back. ');
});