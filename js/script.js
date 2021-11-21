$('#contact-fm').submit(
    function () {
        let name = $('#name').val()
        let email = $('#email').val()
        let message = $('#message').vaal()
        let myForm = $('#contact-fm')[0]



        if (!name || !email || !message) {
            alert('Fill in all the values')
            return false;
        }
        else {
            myForm.method = 'post';
            myForm.action = 'https://trevtech.us20.list-manage.com/subscribe/post?u=1b43229f8cd7931c59b9af39a&amp;id=c06893c692'
            alert('Form Submitted succesfully')
            return true
        }
    }
)