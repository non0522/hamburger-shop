$(window).on('load',function(){
    $('.typ').delay(500).queue(function(){
        // ここから文字を<span></span>で囲む記述
        $('.typ').children().andSelf().contents().each(function() {
            if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
            }
        });
        // ここから一文字ずつフェードインさせる記述
        $('.typ').css({'opacity':1});
        for (var i = 0; i <= $('.typ').children().size(); i++) {
            $('.typ').children('span:eq('+i+')').delay(80*i).animate({'opacity':1},50);
        };
    });
});

$(window).on('load',function(){
    $('.typ2').delay(8000).queue(function(){
        // ここから文字を<span></span>で囲む記述
        $('.typ2').children().andSelf().contents().each(function() {
            if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
            }
        });
        // ここから一文字ずつフェードインさせる記述
        $('.typ2').css({'opacity':1});
        for (var i = 0; i <= $('.typ2').children().size(); i++) {
            $('.typ2').children('span:eq('+i+')').delay(80*i).animate({'opacity':1},50);
        };
    });
});