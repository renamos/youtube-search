$(function () {
  
    $('.submit').click(function (e) {
        e.preventDefault();
        var searchTerm = $('#query').val();
        if (searchTerm == undefined || searchTerm == ''){
              swal('oops')
        }
        else {
        $('iframe').remove();
        console.log(searchTerm);
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id&q=' + searchTerm + '&type=video&key=AIzaSyCgezSnimp3DzfuqbiHko1JJ8K6PyOR9rc'
        var createIframe = function (videoId) {
            var iframe = "";
            iframe += "<iframe class='video-results' width='480' height='270' src='https://www.youtube.com/embed/"
            iframe += videoId + "'"
            iframe += "frameborder='0' allowfullscreen></iframe>"
            return iframe;
        }
        }
        $.getJSON(url, function (response) {
            response.items.forEach(function (video, index) {
                $('#results').append(createIframe(video.id.videoId))
            })
        })
    });
    //alert with "sweet alert"
});