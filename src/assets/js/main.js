import $ from 'jquery'

$(document).ready(function() { 
    $(".submit").hover(function() { 
        $("input[type=text]").addClass("input-hover"); 
        $("span.sending-order").addClass("moving-text"); 
    }, function() { 
        $("input[type=text]").removeClass("input-hover");
        $("span.sending-order").removeClass("moving-text");  
    });
}); 