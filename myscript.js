var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
    'api-key': "c6653e8185d24a4e80f3d58f258d98b6"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {

    //what happens if it gets data back

    console.log(result);
    console.log(JSON.stringify(result.status));
    console.log(JSON.stringify(result.copyright));
    console.log(JSON.stringify(result.last_updated));
    console.log(JSON.stringify(result.num_results));

    $('#copyright').text(result.copyright);

    //how to access data itself, specifically at index 0
    console.log(JSON.stringify(result.results[0]))
    //section: console.log(JSON.stringify(result.results[0].section))
    //$('.author').text(result.results[0].byline);



    //for first story:
    //$('#maintitle).text(result.results[0].title);
    //$('#mainauthor).text(result.results[0].byline);
    //$('#maindate).text(result.results[0].created_date);

    //regarding loops

    for(i = 0; i<result.results.length; i++){
        console.log(result.results.length)
        console.log(JSON.stringify(result.results[i].byline));

    //took pics on phone of code for here at 7:30-7:45

    var template = '<div class="article">';
    template += '<a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a>';
    template += '<h2>' + result.results[i].title + '</h2>';
    template += '<p class="author">' +result.results[i].byline + '</p>';
    template += '<p class="date">' +result.results[i].created_date + '</p>';
    template += '</div>';

    var template = '<div class="article">';
    + '<a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a>';
    + '<h2>' + result.results[i].title + '</h2>';
    + '<p class="author">' +result.results[i].byline + '</p>';
    + '<p class="date">' +result.results[i].created_date + '</p>';
    + '</div>';

    $('#wrapper').append(template);

    }

    // the end of what happens if we get data back

}).fail(function(err) {
    throw err;
});