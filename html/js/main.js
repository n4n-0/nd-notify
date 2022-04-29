const ICONS_TYPES = {
  'primary': '<i class="fa-solid fa-circle-info"></i>',
  "error": '<i class="fa-solid fa-circle-exclamation"></i>',
  "success": '<i class="fa-solid fa-check"></i>',
  "police": '<i class="fa-solid fa-handcuffs"></i>'
}
const ICON_DEFAULT_TYPE = 'primary'
const STYLES_TYPES = ['primary',"error","success", "police"]
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
  const $notification = $(document.createElement('div'));
   const l = STYLES_TYPES.find(e => e === data.type) ? data.type : ICON_DEFAULT_TYPE
  const $icon = ICONS_TYPES.hasOwnProperty(data.type) === true ? ICONS_TYPES[data.type] : ICONS_TYPES[ICON_DEFAULT_TYPE]
  const TEXT = escapeHtml(data.text)
  $notification.addClass('notification').addClass(l);
  $notification.html($icon + ' ' + TEXT);
  $notification.fadeIn(1000);
  if (data.style !== undefined) {
    Object.keys(data.style).forEach(function(css) {
      $notification.css(css, data.style[css])
    });
  }else{
   $notification.addClass(l)
  }
  return $notification;
}
const ShowNotification = (data) => {
  const $notification = CreateNotification(data);
  $('.notification_container').append($notification);
  setTimeout(function() {
    $.when($notification.fadeOut()).done(function() {
      $notification.remove()
    });
  }, data.length != null ? data.length : 2500);
}
