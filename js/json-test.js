
var items = [
{
    "artist": "Fable & the World Flat",
    "title": "Ladies & Gentlemen",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/111722767&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Recorded","Edited","Arrangements","Produced","Guitar"],
    "date": "Jan 2007 - June 2009"
},
{
    "artist": "Paper Holland",
    "title": "Fast Food",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261646020&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Mastered"],
    "date": "April 2016"
},
{
    "artist": "Bo Triplex",
    "title": "'Thump-Tastic'",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208483102&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true",
    "duties": ["Mixed","Mastered"],
    "date": "June 2015"
},
{
    "artist": "Chris Ayer",
    "title": "'Auld Lang Syne'",
    "url": "http://bandcamp.com/EmbeddedPlayer/album=1247610340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2363901025/transparent=true/",
    "duties": ["Assistant Engineer"],
    "date": "October 2014"
},
{
    "artist": "College Humor",
    "title": "Get Girls By Learning British Things",
    "url": "http://www.youtube.com/embed/v3PZqFjvRis",
    "duties": ["Mixed", "ADR", "Cameo as Drummer/Bartender"],
    "date": "June - Aug 2014"
},
{
    "artist": "Kiki Halliday",
    "title": "One California Day",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/161045162&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Assistant Engineer"],
    "date": "July 2014"
},
{
    "artist": "Scott Frankfurt Studio",
    "title": "Restored MCI 1979 2\" 16-Track",
    "url": "http://player.vimeo.com/video/102858982",
    "duties": ["Assistant Engineer"],
    "date": "June - Aug 2014"
},
{
    "artist": "Klassik with Fresh Cut Collective",
    "title": "Live on PBS 30-Minute Music Hour",
    "url": "http://player.pbs.org/viralplayer/2365220218",
    "duties": ["Drums"],
    "date": "March 2014"
},
{
    "artist": "San Fermin",
    "title": "'Sonsick' Remix by Fable & the World Flat",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/119716035&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Remixed"],
    "date": "November 2013"
},
{
    "artist": "Fable &amp; the World Flat",
    "title": "Dark Flow",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/112790484&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Recorded","Mixed","Produced","Co-written","Arrangements","Guitar","Drums"],
    "date": "April - Sept 2013"
},
{
    "artist": "Midwives",
    "title": "EP",
    "url": "",
    "duties": ["Recorded","Mixed","Mastered"],
    "date": "Aug 2013"
},
{
    "artist": "Fable & the World Flat",
    "title": "The Great Attractor",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89775486&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Recorded","Mixed","Produced","Co-written","Arrangements","Guitar","Drums"],
    "date": "Jan - Apr 2013"
},
{
    "artist": "Boca Prospero",
    "title": "Animal Suite",
    "url": "https://bandcamp.com/EmbeddedPlayer/album=3203799296/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2416946001/transparent=true/",
    "duties": ["Mastered"],
    "date": "Oct 2012"
},
{
    "artist": "Joni Clare",
    "title": "Dividing Silence",
    "url": "",
    "duties": ["Recorded","Mixed","Mastered"],
    "date": "Aug - Oct 2012"
},
{
    "artist": "Fresh Cut Collective",
    "title": "Re-Frame",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/126045590&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Recorded","Mixed","Co-Produced","Guitar","Drums"],
    "date": "Feb 2012"
},
{
    "artist": "Fresh Cut Collective",
    "title": "s/t",
    "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/126046099&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
    "duties": ["Co-Recorded","Co-Mixed","Drums on 'Bumble Bee'"],
    "date": "Jan - April 2011"
}


]

// build modal
$('#portfolio .portfolio-link').click(function() {

    var itemIndex = $('#portfolio .portfolio-link').index(this);
	$('#myModal h3').text(items[itemIndex].artist);
	$('#myModal h4').text(items[itemIndex].title);
    $('#myModal iframe').prop('src', items[itemIndex].url);

    $(items[itemIndex].duties).each(function() {
        $('#myModal .check-list').append('<li><i class="fa fa-check-circle" aria-hidden="true"></i>'+this+'</li>')
    });

	$('#myModal h5').text(items[itemIndex].date);

});

// clear modal info
$('#myModal').on("hidden.bs.modal", function(){

    $('#myModal iframe').prop('src',"");
    $('#myModal .check-list').html("");

});

