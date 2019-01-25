/*global $ ,alert,console */
var mainColor = '#33D9B2' ;
$(function () {
    "use strict";
    
    // trigger nice scroll
    $("body").niceScroll({
        cursorcolor: mainColor,
        cursorwidth: "12px",
        cursorborder: "1px solid "+mainColor,
        cursorborderradius: "5px"
        
    });
    

    //adjust header height
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height()); 
    });
    
    
    // buuton to sections
    $(".header .overlay .main .buttons  .hire").click(function () {
        $("html,body").animate({
            scrollTop: $(".contact").offset().top + 20
        }, 1000);
    });
    
    
    $(".header .overlay .main .buttons  .work").click(function () {
        $("html,body").animate({ 
            scrollTop: $(".our-work").offset().top + 20
        }, 1000); 
    });
    
    
    // chevron to next second section (features)
    $(".header .overlay .last-icon i").click(function () {
        $("html,body").animate({ 
            scrollTop: $(".features").offset().top - 40
        }, 700);
        
    });
    

    // hovering on image items
    $(".our-work .items").hover(function () {
        $(this).find(".image-over").fadeIn(700);
    }, function () {
        $(this).find(".image-over").fadeOut("fast");
    });
    
    
    // trigger show more for image items
    $(".our-work .work-button button").click(function () { 
        $(this).fadeOut();
        $(".our-work .hidden").fadeIn(700);
    });
    
    
    // animate work-overflow
    $(".our-work .items ").hover(function () {
        
        $(".our-work .items .image-over h3").animate({
            transition: "all .3s ease",
            left: "0px"
        }, 900);
    
        $(".our-work .items .image-over p").animate({
            transition: "all .3s ease",
            left: "0px"
        }, 900);
    
        
    }, function () {
        $(".our-work .items .image-over h3").animate({
            left: "-345px"
        }, 1);
    
        $(".our-work .items .image-over p").animate({
            left: "345px"
        }, 1);
    
    });
        
    
    
   
    // check testimonials
    
    var rightArrow = $(".fa-chevron-right"),
        leftArrow = $(".fa-chevron-left");
    
    
    function checkClients() {
        if ($(".testimonails .client:first").hasClass("active")) { 
            leftArrow.hide(); 
        } else {
            leftArrow.fadeIn();
        }
        
    
        if ($(".testimonails .client:last").hasClass("active")) {
            rightArrow.hide(); 
        } else {
            rightArrow.show();
        } 
    }

    checkClients();
    
    $(".testimonails i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".testimonails .active").fadeOut(300, function () { 
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                checkClients(); 
            });
        } 
    });
    
    $(".testimonails i").click(function () {
        if ($(this).hasClass("fa-chevron-left")) {
            $(".testimonails .active").fadeOut(300, function () { 
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClients(); 
            });
        }  
    });
    
});