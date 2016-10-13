$(document).ready(function(){
    $("div").addClass('blya')

    /*if("div").hasClass('1')
        $(".item").css({'right' : '0', 'top' : '0'})*/

   /* $(".item").each(function (e) {
        var that = $(this);
        if(that.hasClass('1')) {
            that.css({'top' : '0', 'right' : '0'});
        }
        if(that.hasClass('2')) {
            that.css({'bottom' : '0', 'right' : '0'});
        }
        if(that.hasClass('3')) {
            that.css({'bottom' : '0', 'left' : '0'});
        }
        if(that.hasClass('4')) {
            that.css({'top' : '0', 'left' : '0'});
        }*/
        /*switch ($(this).hasClass()){
            case '1' :  $(this).css({'right' : '0', 'top' : '0'})
                break;
            case '2' :  $(this).css({'right' : '0', 'bottom' : '0'})
                break;
            case '3' :  $(this).css({'left' : '0', 'bottom' : '0'})
                break;
            case '4' :  $(this).css({'right' : '0', 'bottom' : '0'})
                break;
        }*/
    /*});*/
    $(".add").css({'right' : '0', 'top' : '0', 'width': '20%'});

    /*for (var i = 1; i < 10; i++) {
        if(i == 5){
            $(this).css({'background-color': 'red'});
            }
        }
*/

    $(".item-def:even").each(function (e) {
        var that = $(this);
        $(this).css({'background-color': '#368000'});
        console.log($(this).outerWidth())

    });

    $(".item-def:even").each(function (e) {
        console.log($(this).position());


    });

    if ($(".item").attr({'border': '1px dashed grey'}) == true)
    {
        $(this).css({'background-color': 'green'});
    }

    $(".item-def").click(function(){
        $(this).animate({opacity: '0' }, "slow");

    });










    /*function imgSize(href){
        var img = new Image();
        img.src = href;

        img.onload = function() {
            return img;
        };
        return img;
    }
    var imgZz = imgSize('https://goo.gl/images/lXYHgj');
    alert('ширина: '+imgZz.width+';');
    alert('Высота: '+imgZz.height+';');*/


});