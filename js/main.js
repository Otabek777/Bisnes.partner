$(document).ready(function(){
    $(function(){
        $('.nav__item').click(function(){
             var target = $(this).attr('href');
             $('html, body').animate({scrollTop: $(target).offset().top}, 800);
             return false; 
        }); 
     });
    
    var time = 2,
    cc = 1;
    
    if (cc < 2) {
        $(".num").addClass("viz");
        $('div').each(function() {
            var
            i = 1,
            num = $(this).data('num'),
            step = 3000 * time / num,
            that = $(this),
            int = setInterval(function() {
                if (i <= num) {
                that.html(i);
                } else {
                cc = cc + 2;
                clearInterval(int);
                }
                i++;
            }, step);
        });
    };
});

