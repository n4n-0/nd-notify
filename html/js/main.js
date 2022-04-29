
// $(document).ready(function() {
//     ShowNotification({
//         type: 'inform',
//         text: 'This is a test notification.',
//         length: 5000
//     })
// });

window.addEventListener('message', function(e) {
    ShowNotification(e.data);
})
function escapeHtml(unsafe)
{
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
const CreateNotification = (data) => {
    var $notification = $(document.createElement('div'));
    let text = escapeHtml(data.text)
    switch (data.type) {
        case 'primary':
            var $icon = '<i class="fa-solid fa-circle-info"></i>'
            break;
        case 'error':
            var $icon = '<i class="fa-solid fa-circle-exclamation"></i>'
            break;
        case 'success':
            var $icon = '<i class="fa-solid fa-check"></i>'
            break;
        case 'police':
            var $icon = '<i class="fa-solid fa-handcuffs"></i>';
            break;
    }
    $notification.addClass('notification').addClass(data.type);
    $notification.html($icon + ' ' + text);
    $notification.fadeIn(1000);
    if (data.style !== undefined) {
        Object.keys(data.style).forEach(function(css) {
            $notification.css(css, data.style[css])
        });
    }

    return $notification;
}

const ShowNotification = (data) => {
    var $notification = CreateNotification(data);
    $('.notification_container').append($notification);
    setTimeout(function() {
        $.when($notification.fadeOut()).done(function() {
            $notification.remove()
        });
    }, data.length != null ? data.length : 2500);
}
