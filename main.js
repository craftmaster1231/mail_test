export function send_external(message){
    var data = {
        service_id: 'service_hh0c2tl',
        template_id: 'service_hh0c2tl',
        user_id: 'wNZUYGOa76yi2qXHg',
        template_params: JSON.stringify({'to_name': 'дружище','from_name': 'GitHub', 'message': message})
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
}
