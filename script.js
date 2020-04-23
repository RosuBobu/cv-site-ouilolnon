//QUERY STYLE
$(document).ready(function(){
    //buttons
        $("#dark").click(function(){ 
            x = Math.floor(Math.random()*6);
            rndColor=['#641700', '#6d002a', '#004d69', '#00624b', '#000061', 'black'];
            $('body').css("background", rndColor[x]);

            $('.noflier').removeClass('flier');

            $("#placarelectrik").css('background-image', 'none');
            $("#placarelectrik").removeClass('shake shake-constant');

            $(".left-tab-bar > h5").css('color', 'khaki');
        });

        $("#light").click(function(){ 
            x = Math.floor(Math.random()*6);
            rndColor=['#ff7348', '#ff71a8', '#93e2ff', '#9affe7', '#a7a7ff', 'white'];
            $('body').css("background", rndColor[x]);
            
            $('.noflier').removeClass('flier');

            $("#placarelectrik").css('background-image', 'none');
            $("#placarelectrik").removeClass('shake shake-constant');
            $("#placarelectrik").css('border', '2px solid goldenrod');

            $(".left-tab-bar > h5").css('color', '#860010');
        });

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
        });

        $('#electric').click(function(){
            $('#placarelectrik').css('pointer-events','all');
            $('#placarelectrik').css('visibility','visible');
        });

    //left-tabs
    step = 0;
    $('.left-tab').each(function(){
        $(this).css("top", step+"px");
        step=step+50;
    });

    // ACCORDEON
    function getClickable(){
        let acWrapDivs = document.querySelectorAll('.accordionWrapper > div');
        for(let i =0; i<acWrapDivs.length; i++){
            acWrapDivs[i].addEventListener('click', changeClass);
        }
    }
    function changeClass(){
        if (this.className == "accordionItem open"){
            this.className = "accordionItem close";    
        }else{
            this.className = "accordionItem open";        
        }
    }
    function customAccordion(){
        //accordionItem : div
        let accordionItem = document.createElement('div');
        accordionItem.className = 'accordionItem close';
        accordionWrapper.appendChild(accordionItem);
        //accordionItem : content h2
        let h2 = document.createElement('h2');
        h2.className = 'accordionItemHeading';
        accordionItem.appendChild(h2);
        h2.innerText = title;
        //accordionItem : content div and p
        let divP = document.createElement('div');
        accordionItem.appendChild(divP);
        divP.className = 'accordionItemContent';
        divP.innerHTML = '<p>'+content+'</p>';
        //getting clickables properties
        getClickable();
    }
    getClickable();
    //draggable
    $( function(){
        $(".draggable").draggable();
    });

});