$(document).ready(function(){


//first row of pricing-table (one fn for each button)
  $("tr:first td:first").click(function(){
    $(this).toggleClass("selected");
    $("tr:nth-child(2) td:nth-child(-n+3)").toggleClass("top");
    $(this).siblings().removeClass("selected");
    $("tr:nth-child(2) td:nth-child(n+4)").removeClass("top");
    $("tr:nth-child(2) td:nth-child(-n+3)").removeClass("selected");
    $("tr:nth-child(3) td").removeClass("top");
  });
  $("tr:first td:last").click(function(){
    $(this).toggleClass("selected");
    $("tr:nth-child(2) td:nth-child(n+4)").toggleClass("top");
    $(this).siblings().removeClass("selected");
    $("tr:nth-child(2) td:nth-child(-n+3)").removeClass("top");
    $("tr:nth-child(2) td:nth-child(n+4)").removeClass("selected");
    $("tr:nth-child(3) td").removeClass("top");
  });
// second row of pircing-table (six buttons)

  $("tr:nth-child(2) td:first").click(function(){
    $(this).toggleClass("selected");
    $("tr:nth-child(3) td:nth-child(1)").toggleClass("top");
    $(this).siblings().removeClass("selected");
    $("tr:nth-child(3) td:nth-child(1)").siblings().removeClass("top");
});
 $("tr:nth-child(2) td:nth-child(2)").click(function(){
   $(this).toggleClass("selected");
   $("tr:nth-child(3) td:nth-child(2)").toggleClass("top");
   $(this).siblings().removeClass("selected");
   $("tr:nth-child(3) td:nth-child(2)").siblings().removeClass("top");

  });
  $("tr:nth-child(2) td:nth-child(3)").click(function(){
    $(this).toggleClass("selected");
    $("tr:nth-child(3) td:nth-child(3)").toggleClass("top");
    $(this).siblings().removeClass("selected");
    $("tr:nth-child(3) td:nth-child(3)").siblings().removeClass("top");

   });
   $("tr:nth-child(2) td:nth-child(4)").click(function(){
     $(this).toggleClass("selected");
     $("tr:nth-child(3) td:nth-child(4)").toggleClass("top");
     $(this).siblings().removeClass("selected");
     $("tr:nth-child(3) td:nth-child(4)").siblings().removeClass("top");

    });
    $("tr:nth-child(2) td:nth-child(5)").click(function(){
      $(this).toggleClass("selected");
      $("tr:nth-child(3) td:nth-child(5)").toggleClass("top");
      $(this).siblings().removeClass("selected");
      $("tr:nth-child(3) td:nth-child(5)").siblings().removeClass("top");

     });
     $("tr:nth-child(2) td:nth-child(6)").click(function(){
       $(this).toggleClass("selected");
       $("tr:nth-child(3) td:nth-child(6)").toggleClass("top");
       $(this).siblings().removeClass("selected");
       $("tr:nth-child(3) td:nth-child(6)").siblings().removeClass("top");

      });

  //tablet menu

    $(".menu").click(function(){
      $(".dropdown").toggle();

    });

    $('.menu').keypress(function (e) {
if (e.which == 13) {
  $('.dropdown').toggle();
  return false;}
});


});
