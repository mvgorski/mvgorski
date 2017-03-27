
var items = [
{
    "artist": "Paper Holland",
    "title": "Fast Food",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261646020&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": "Mastered",
    "date": "April 2016"
},
{
    "artist": "Bo Triplex",
    "title": "'Thump-Tastic'",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208483102&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true",
    "duties": ["Mixed", "Mastered"],
    "date": "June 2015"
}

]

    
$('.portfolio-link').click(function() {

	$('#myModal h3').text(items[0].artist);
	$('#myModal h4').text(items[0].title);

	$('#myModal h5').text(items[0].date);


});