// code fragment
var data = {
    service_id: 'service_hh0c2tl',
    template_id: 'service_hh0c2tl',
    user_id: 'wNZUYGOa76yi2qXHg',
    template_params: {
        'to_name': 'дружище',
        'from_name': 'GitHub'
        'message': 'Тут может быть что-то из формы на сайте'
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
// code fragment
