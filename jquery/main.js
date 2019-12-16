$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
    });
    var scrollLink = $('nav li a, #dodatak');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate ({
            scrollTop: $(this.hash).offset().top -60
        }, 1000);
        $(this).closest('nav').removeClass('active');
    })

});


