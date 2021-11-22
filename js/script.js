$('#contact-fm').submit(
    function () {
        let name = $('#name').val()
        let email = $('#email').val()
        let message = $('#message').val()
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





$(document).ready(function(){
    $(".img1").click(function(){
        $(".design-1").toggle("slow");
        $(".img1").hide()
    })
})
    
$(document).ready(function(){
    $(".design-1").click(function(){
        $(".img1").show()
        $(".design-1").hide();
    })

})










$(document).ready(function(){
    $(".img2").click(function(){
        $(".development-1").toggle("slow");
        $(".img2").hide()
    })
})
    
$(document).ready(function(){
    $(".development-1").click(function(){
        $(".img2").show()
        $(".development-1").hide();
    })

})






$(document).ready(function(){
    $(".img3").click(function(){
        $(".product-1").toggle("slow");
        $(".img3").hide()
    })
})
    
$(document).ready(function(){
    $(".product-1").click(function(){
        $(".img3").show()
        $(".product-1").hide();
    })

})
