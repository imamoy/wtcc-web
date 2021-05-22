let height = window.innerHeight;
    window.addEventListener('resize', () => {
    height = window.innerHeight;
});

$(document).ready(function() {
    $('.main-dialog-close').click(function(){
        $('.main-dialog').removeClass(show);
        $('.mask-bg').removeClass(show);
    });

    $('.menu-toggle').on('click',function(){
        $('.menu-list').slideToggle();
    });
 });

 $(function(){
    $('input:radio').click(function(){
        var domName = $(this).attr('name');
        var $radio = $(this);
        if ($radio.data('waschecked') == true){
            $radio.prop('checked', false);
            $("input:radio[name='" + domName + "']").data('waschecked',false);
        } else {
            $radio.prop('checked', true);
            $("input:radio[name='" + domName + "']").data('waschecked',false);
            $radio.data('waschecked', true);
        }
        console.log("選中狀態:",$(this).prop("checked"));
        console.log($("input:radio[name='" + domName + "']:checked").val());
    });
});