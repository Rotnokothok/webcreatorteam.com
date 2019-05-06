

jQuery("document").ready(function($){

	var nav = $('.nav-container');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("navbar-fixed");
		} else {
			nav.removeClass("navbar-fixed");
		}
	});

});


function demo() {
    var time = document.getElementById('time');
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var myWatch = hours + ' : ' + minutes + ' : ' + seconds;
    time.innerHTML = myWatch;
}

setInterval(demo, 1000);


$('#headingtype').typeIt({
     strings: ["Welcome.......",
         "Welcome To Our Official Website",
         "We are a Bangladeshi Web Developer Team",
         "We are small and discipline Team",
         "We know lots of Web Technology",
         "Lots of Web Programing Language",
         "We Provide smooth website",
         "Just Contact for yor won website",
         "Tell Us your Plan we will help you to improve",
         "Life Time Support and Redesign fee only 50%"],
         
     speed: 200,
     breakLines: false,
     autoStart: false,
     
     
}); 


