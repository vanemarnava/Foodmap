

$(document).ready(function(){
	
  // vista spash
  $('.black').delay(3000).fadeOut("slow");


	// setTimeout(function() {
 //    $(".firstLogo").fadeOut(2500);
 //  },2000);

	// $(".loader").fadeOut("3500");

	// $(".secondLogo").hide(3000);

 //  setTimeout(function() {
 //    $(".secondLogo").fadeIn(2500);
 //  },2000);

 	// --------------------------------------
  // --------------------------------------
 
  $(function() {

    // todos escondidos
    $(".japaneseFood").hide();
    $(".mexicanFood").hide();
    $(".italianFood").hide();

    $("#options").change(function(){

      // si la opcion seleccionada es japonesa, mostrar comida japonesa y esconder lo demas
      if($("#options").val() == "japonesa")
      {
        $(".japaneseFood").show();
        $(".mexicanFood").hide();
        $(".italianFood").hide();
      } 
      
      // si la opcion seleccionada es japonesa, mostrar comida mexicana y esconder lo demas
      if($("#options").val() == "mexicana")
      {
        $(".japaneseFood").hide();
        $(".mexicanFood").show();
        $(".italianFood").hide();
      } 
      
      // si la opcion seleccionada es italiana, mostrar comida japonesa y esconder lo demas
      if($("#options").val() == "italiana")
      {
        $(".japaneseFood").hide();
        $(".mexicanFood").hide();
        $(".italianFood").show();
      } 

    });
      
  });

  // funcion mouseover en comida japonesa
  $('.container').mouseover(function (){
    
    $('.jap1').show();
      }).mouseout(function () {
    
    $('.jap1').hide();
  });

  // funcion mouseover en comida japonesa2
  $('.container').mouseover(function (){
    
    $('.jap2').show();
      }).mouseout(function () {
    
    $('.jap2').hide();
  });

   // funcion mouseover en comida japonesa3
  $('.container').mouseover(function (){
    
    $('.jap3').show();
      }).mouseout(function () {
    
    $('.jap3').hide();
  });

   // funcion mouseover en comida japonesa5
  $('.container').mouseover(function (){
    
    $('.jap5').show();
      }).mouseout(function () {
    
    $('.jap5').hide();
  });

   // funcion mouseover en comida japonesa6
  $('.container').mouseover(function (){
    
    $('.jap6').show();
      }).mouseout(function () {
    
    $('.jap6').hide();
  });


//------------------------------------------------
//------------------------------------------------


   // funcion mouseover en comida mexicana
  $('.container').mouseover(function (){
    
    $('.mex1').show();
      }).mouseout(function () {
    
    $('.mex1').hide();
  });

  // funcion mouseover en comida mexicana2
  $('.container').mouseover(function (){
    
    $('.mex2').show();
      }).mouseout(function () {
    
    $('.mex2').hide(); 
  });

   // funcion mouseover en comida mexicana3
  $('.container').mouseover(function (){
    
    $('.mex3').show();
      }).mouseout(function () {
    
    $('.mex3').hide(); 
  });

   // funcion mouseover en comida mexicana4
  $('.container').mouseover(function (){
    
    $('.mex4').show();
      }).mouseout(function () {
    
    $('.mex4').hide();
  });

   // funcion mouseover en comida mexicana5
  $('.container').mouseover(function (){
    
    $('.mex5').show();
      }).mouseout(function () {
    
    $('.mex5').hide();
  });

  //------------------------------------------------
//------------------------------------------------


   // funcion mouseover en comida italiana
  $('.container').mouseover(function (){
    
    $('.ita1').show();
      }).mouseout(function () {
    
    $('.ita1').hide();
  });

  // funcion mouseover en comida italiana2
  $('.container').mouseover(function (){
    
    $('.ita2').show();
      }).mouseout(function () {
    
    $('.ita2').hide(); 
  });

   // funcion mouseover en comida italiana3
  $('.container').mouseover(function (){
    
    $('.ita3').show();
      }).mouseout(function () {
    
    $('.ita3').hide(); 
  });

   // funcion mouseover en comida italiana4
  $('.container').mouseover(function (){
    
    $('.ita4').show();
      }).mouseout(function () {
    
    $('.ita4').hide();
  });

   // funcion mouseover en comida italiana5
  $('.container').mouseover(function (){
    
    $('.ita5').show();
      }).mouseout(function () {
    
    $('.ita5').hide();
  });

}); //fin ready