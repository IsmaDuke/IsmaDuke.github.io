$(document).ready(function(){
    //menu hamburguesa
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
  });
  $(".cerrar").click(function(){
     $(".menu").animate({width:"toggle"},500);
   });
   $(".burger2").click(function(){
    
                $(".burger2").toggleClass("abierto");
                $(".menu2").animate({width:"toggle"},500);
                $(".menu2 a").toggleClass("aparicion");
      });
   $("a").on("click", function(){
        if (this.hash !== ""){
              var hash = this.hash;
             $("html, body").animate({
                   scrollTop: $(hash).offset().top
             }, 800); 
        }
  });
  //Ventana Modal
$(".open").click(function(){
    $(".modal, .overlay").addClass("visible")
});
$(".close, .overlay").click(function(){
    $(".modal, .overlay").removeClass("visible")
});
  //Cambio de estilo header
  $(window).on("scroll",function(){
        var posicion = $("#primera").offset();
        console.log(posicion);
        if ($(window).scrollTop() > posicion.top - 50){
            $("header").addClass("normal");
            $(".logo-naranja").show();
            $(".logo-blanco").hide();
        } else {
            $("header").removeClass("normal");            
            $(".logo-naranja").hide();
            $(".logo-blanco").show(); 
        }
  });
});