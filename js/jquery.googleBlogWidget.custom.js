$(document).ready(function(){
  
  let url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent("{{site.blogfeed}}")
		$.ajax({
			url      : url,
			dataType : 'json',
			success  : function (data) {
				if (data.responseData.feed && data.responseData.feed.entries) {
					$.each(data.responseData.feed.entries, function (i, e) {
						$('#blogArticles').append("<a target='_blank' href='" + e.link + "'>" + e.title + "</a><br><br>")
					});
				}
			},
			error: function(err) {

			}
		});
});
