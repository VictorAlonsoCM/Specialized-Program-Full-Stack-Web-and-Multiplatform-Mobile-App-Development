/* Example of how to implement a tooltip 
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script> */

$(document).ready(function() {
    $('#myCarousel').carousel({ interval: 2000 });
    //Carousel button
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');

        }else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    /*This is the script only for the Assignment 4*/
    //show and hide the login Modal
    $('.toggleLogin').click(function(){
        $('#loginModal').modal('toggle');
    });
    //show and hide the form Modal
    $('.toggleForm').click(function(){
        $('#modalForm').modal('toggle');
    });
    
});