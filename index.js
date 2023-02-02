//alert("hi");
addtocart=0;
$(".button-in-cart").click(function(){
   alert("added to cart");
   addtocart++;
   alert("added items is "+addtocart+"items");
   

});
$(".download-buttens").click(function(){
   $(".download-buttens").fadeIn(100).fadeOut(100).fadeIn(100);
   alert("downloading....");
   
});
$(".fa-brands").click(function(){
   animatePress();
});

$("input").click(function(){
   var mail=prompt("enter mail id:");
   alert("your mailid is "+mail);
});
$(".search").click(function(){
 
  alert("this is link");
});
$(".signin").click(function(){
 
   alert("signing");
 });
 


function animatePress() {
   $(".fa-brands").addClass("pressed");
   setTimeout(function () {
     $(".fa-brands").removeClass("pressed");
   }, 100);
 }
 