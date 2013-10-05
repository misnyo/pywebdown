var content;

function display_html(){
    if ($('#html-code').is(':checked')) {
        $('#content').text(content);
    }else{
        $('#content').html(content);
    }
}

function send_data() {
    $.post(
            '/markdown', 
            {'markdown':$('#markdown').val(),'code':$('#code').is(':checked')},
            function(data){
                content = data;
                display_html();
            }
          );
}

$(document).ready(function(){
    $('#markdown').bind('input propertychange', send_data);
    $('#html-code').change(display_html);
    $('#code').change(send_data);
    send_data();
});
