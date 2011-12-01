jQuery(document).ready(function($){

  $('#github').mouseover(function(){
    $('#mousing').text("GitHub");
  });

  $('#github').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#twitter').mouseover(function(){
    $('#mousing').text("Twitter");
  });

  $('#twitter').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#rss').mouseover(function(){
    $('#mousing').text("RSS");
  });

  $('#rss').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });
  
  //use tipsy for tooltip hover
  $('.boastful img').tipsy({
	html:true,
	title:function(){ return $(this).parent().parent().children('.boastful_tweet').html(); },
	gravity:'s',
	fade:true
  });

});
