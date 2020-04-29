//QUERY STYLE
$(document).ready(function(){

    


    //GOGOPHER POSITION----------------------------------------------

    $('#gogopher').toggleClass('position-absolute');

    //DEFAULT COLOR ON LOAD----------------------------------------------
    $('.navbar').toggleClass('navGradientRed');
    $('.left-tab-bar').toggleClass('navGradientRed');
    $('.accordionWrapper').toggleClass('navGradientRed');
    
    //buttons----------------------------------------------
        $('.rgb').hide();
        //DARK
        $("#dark").click(function(){ 
            x = Math.floor(Math.random()*6);
            rndColor=['navy', '#800000', 'darkred', '#051428', '#850612', 'black'];
            $('body').css("background", rndColor[x]);

            $('.noflier').removeClass('flier');

            $("#placarelectrik").css('background-image', 'none');
            $("#placarelectrik").removeClass('shake shake-constant');

            $(".left-tab-bar > h5").css('color', 'khaki');
            
            //colorsLOL
            if($('.navbar').hasClass('navGradientRainbow')){
                $('.navbar').toggleClass('navGradientRed');
                $('.left-tab-bar').toggleClass('navGradientRed');
                $('.accordionWrapper').toggleClass('navGradientRed');
                $('.navbar').toggleClass('navGradientRainbow');
                $('.left-tab-bar').toggleClass('navGradientRainbow');
                $('.accordionWrapper').toggleClass('navGradientRainbow');
            };

            //gogopherPposition
            if($('#gogopher').hasClass('position-relative')){
                $('#gogopher').toggleClass('position-absolute');
                $('#gogopher').toggleClass('position-relative');
            };
        });

        //LIGHT
        $("#light").click(function(){ 
            x = Math.floor(Math.random()*6);
            rndColor=['#dda0dd', '#87d3f8', 'khaki', '#fee347', 'antiquewhite', 'white'];
            $('body').css("background", rndColor[x]);
            
            $('.noflier').removeClass('flier');

            $("#placarelectrik").css('background-image', 'none');
            $("#placarelectrik").removeClass('shake shake-constant');
            $("#placarelectrik").css('border', '2px solid goldenrod');

            $(".left-tab-bar > h5").css('color', '#860010');

            //colorsLOL
            if($('.navbar').hasClass('navGradientRainbow')){
                $('.navbar').toggleClass('navGradientRed');
                $('.left-tab-bar').toggleClass('navGradientRed');
                $('.accordionWrapper').toggleClass('navGradientRed');
                $('.navbar').toggleClass('navGradientRainbow');
                $('.left-tab-bar').toggleClass('navGradientRainbow');
                $('.accordionWrapper').toggleClass('navGradientRainbow');
            };
            //gogopherPposition
            if($('#gogopher').hasClass('position-relative')){
                $('#gogopher').toggleClass('position-absolute');
                $('#gogopher').toggleClass('position-relative');
            };
        });

        //WTF!
        $("#wtf").click(function(){ 
            x = Math.floor(Math.random()*7);
            rndPic=['url(assets/wtf/asciicogmind.gif)', 'url(assets/wtf/asciiColor.gif)', 
                'url(assets/wtf/demoscene.gif)', 'url(assets/wtf/gol2.gif)', 'url(assets/wtf/moss.gif)', 
                'url(assets/wtf/redscreensnow.gif)', 'url(assets/wtf/retropatricles.gif)'];
            $('body').css('background-image', rndPic[x]);

            $('.noflier').addClass('flier');

            $("#placarelectrik").css('background-image', 'url(assets/wtf/dangerfire.gif)');
            $("#placarelectrik").css('border', '3px solid #ce0018');
            $("#placarelectrik").addClass('shake shake-constant');

            $(".left-tab-bar > h5").css('color', 'khaki');

            // /test
            $('.rgb').show();
                
            //colorsLOL
            if($('.navbar').hasClass('navGradientRed')){
                $('.navbar').toggleClass('navGradientRed');
                $('.left-tab-bar').toggleClass('navGradientRed');
                $('.accordionWrapper').toggleClass('navGradientRed');
                $('.navbar').toggleClass('navGradientRainbow');
                $('.left-tab-bar').toggleClass('navGradientRainbow');
                $('.accordionWrapper').toggleClass('navGradientRainbow');
            };
            //gogopherPposition
            if($('#gogopher').hasClass('position-absolute')){
                $('#gogopher').toggleClass('position-absolute');
                $('#gogopher').toggleClass('position-relative');
            };
        });

        // RANDOM RGB FUNCTION !!!
        $('.rgb').click(function(){
            r = Math.round(Math.random()*255);
            g = Math.round(Math.random()*255);
            b = Math.round(Math.random()*255);
            console.log('RGB => '+r+' , '+g+' , '+b);
            $('body').css('background', 'rgb('+r+','+g+','+b+')');
        });

    //left-tabs----------------------------------------------
    step = 0;
    $('.left-tab').each(function(){
        $(this).css("top", step+"px");
        step=step+50;
    });

    //ACCORDION !!----------------------------------------------
    $('.accordionItem.close').click(function(){
        if($('.accordionItem').not(this).hasClass('open')){
            $('.accordionItem').addClass('close');
            $('.accordionItem').removeClass('open');

            $(this).toggleClass('open');
            $(this).toggleClass('close');

        } else {
            $(this).toggleClass('open');
            $(this).toggleClass('close');
        }
    });   

    //PLACARELECTRIK----------------------------------------------
    $('#electric').click(function(){
        $('#placarelectrik').css('pointer-events','all');
        $('#placarelectrik').css('visibility','visible');
    });
    //DRAGGABLE----------------------------------------------
    $( function(){
        $(".draggable").draggable();
    });

    //FLIP MAIN------------------------------------------------------
    $('.flip').click(function(){
        $('#main-card').toggleClass('active');
        $('.flip-card-front-main').toggle();
    });

});