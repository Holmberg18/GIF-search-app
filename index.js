



$('.search-input').submit(function(){
  event.preventDefault();
  getGif();

});

function getGif() {

        var searchTerm = $('.new-search-input').val();

        var endpoint = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`;
      // console.log(endpoint);

           $.ajax({
             url:endpoint,
             type:"GET",
             contentType:"application/json; charset=utf-8",
             dataType:"json",
             success: function(data){
                $('.search-results-container').html('');
                for(var i = 0; i < 5; i++){
                    var gif = data.data[i];
                    $('.search-results').append(`<div class='gif-box gif'><img src='${gif.images.fixed_height.url}'/></div>`);
                }
             },error:function(err){
                console.log(err);
             }
        });

    }
