   // mobil_menu

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



setHeights  = function()

{
    var $list       = $( '.posts-wrap' ).not('.a-height');
    $list.each(function(){
        $items      = $(this).find( '.post-item-title' );

        $items.css( 'height', 'auto' );

        var perRow = Math.floor( $(this).width() / $items.width() );
        if( perRow == null || perRow < 2 ) return true;

        for( var i = 0, j = $items.length; i < j; i += perRow )
        {

            var maxHeight   = 0,
                $row        = $items.slice( i, i + perRow );

            $row.each( function()
            {
                var itemHeight = parseInt( $( this ).outerHeight() );
                if ( itemHeight > maxHeight ) maxHeight = itemHeight;
            });
            $row.css( 'height', maxHeight );
            // console.log($row);
        }
    });

};
setHeights();
$( window ).on( 'resize', function(){setTimeout(function(){ setHeights()}, 1000) });




// select

let clsD = document.getElementById('activ-lang');
clsD.addEventListener('click',function () {
    let elem = document.getElementById('ul-lang');
    let sty = elem.style.display;
    if(sty === ''){
        elem.style.display = 'block';
    }else if(sty === 'none'){
        elem.style.display = 'block';
    }else{
        elem.style.display = 'none';
    }
},false)





$('.section_fifth_silder_box .owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


$('.third_ceneter_container .owl-carousel').owlCarousel({
    loop:true,
    items:6,
    margin:10,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,

        },
        600:{
            items:5,

        },
        1000:{
            items:8,


        }
    }
})


let ada = document.getElementById('activ-lang_2');
ada.addEventListener('click',function () {
    let elem = document.getElementById('ul-lang_2');
    let sty = elem.style.display;
    if(sty === ''){
        elem.style.display = 'block';
    }else if(sty === 'none'){
        elem.style.display = 'block';
    }else{
        elem.style.display = 'none';
    }
},false);


$(document).ready(function () {
    $(".mobil_icon").click(function (){
        $(".mobil_container").slideDown();
    })
    $(".close_icon ").click(function (){
        $(".mobil_container").slideUp();
    })
});

   AOS.init({
       duration: 1200,
   });

   $('.animate-1').hover(function() {
       $( this ).addClass("animate-1");
   }, function() {
       $( this ).removeClass("animate-1");
   });








  // bee_anime

    //TweenMax.set('#flower', {x: -700});
    //TweenMax.set('#cloud', {x: -200})
    //TweenMax.to('#flower', 25, { x: 800, repeat: -1})
    //TweenMax.to('#cloud', 25, {x: 800, repeat: -1})
    //TweenMax.to('#sunshine', 25, {x: 800, repeat: -1})


    var tl = new TimelineMax({repeat: 0});

    tl.add(
    TweenMax.from('#text', .3, {drawSVG: 0, repeat: 0,}))

    tl.add(
    TweenMax.from('#text-2', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-3', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-4', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-5', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-6', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-7', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-8', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-9', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-10', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-11', .3, {drawSVG: 0, repeat: 0}))

    tl.add(
    TweenMax.from('#text-12', .3 , {drawSVG: 0, repeat: 0}))

