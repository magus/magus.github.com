(function ($) {
  $.fn.boastful = function(options){
    options = options || {}
    var output = $(this)
    var defaults = {
                      location: location.href,
                      empty_message: 'No one\'s mentioned this page on Twitter yet. '+
                                       '<a href="http://twitter.com?status='+(options.empty_message || location.href)+'">'
                                       +'You could be the first</a>.',
                      limit: 50
                   }
    var settings = $.extend(defaults, options)

    function format_tweetback(tweetback) {
      formatted  = ''
      formatted += '<div class="boastful">'
      formatted +=   '<a href="'+tweetback.author.url+'">'
      formatted +=     '<img src="'+tweetback.author.photo_url+'" />'
      formatted +=   '</a>'
      formatted +=   '<div class="boastful_tweet" style="display: none">'
      formatted +=     '<div class="boastful_handle">@'+tweetback.author.url.split('/').pop()+'</div>'
      formatted +=     '<div class="boastful_content">'+tweetback.content+'</div>'
      formatted +=   '</div>'
      formatted += '</div>'
      return formatted
    }

    var parse_request = function(data){
      var author_urls = [];
      if(data.response.list.length > 0) {
        $.each(data.response.list, function(i,tweetback){
          if($.inArray(tweetback.author.url,author_urls) > -1) {
            return true
          }
          author_urls.push(tweetback.author.url);
          output.append(format_tweetback(tweetback));
		  
		  //use tipsy for tooltip hover
		  $('.boastful').tipsy({
			html:true,
			title:function(){ return $(this).children('.boastful_tweet').html(); }
		  });
          
        });
      } else {
        output.append(defaults.empty_message)
      }
    }
    
    $.ajax({
      url:'http://otter.topsy.com/trackbacks.js',
      data:
        {
          url: defaults.location,
          perpage: defaults.limit
        },
      success:parse_request,
      dataType:'jsonp'}
    );
    
    return this
  }
})(jQuery);
