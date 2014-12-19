//JavaScript to calculate the date and put it in a human readable format
function displayDate()
{
	
	//Array for days of week
	var weekday = new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	//Array for months of year
	var monthsOfYear = new Array(12);
	monthsOfYear[0]="January";
	monthsOfYear[1]="February";
	monthsOfYear[2]="March";
	monthsOfYear[3]="April";
	monthsOfYear[4]="May";
	monthsOfYear[5]="June";
	monthsOfYear[6]="July";
	monthsOfYear[7]="August";
	monthsOfYear[8]="September";
	monthsOfYear[9]="October";
	monthsOfYear[10]="November";
	monthsOfYear[11]="December";

	//get today's date
	var todaysDate = new Date();

	//Variables for each part of the date to make more human readable
	var theDay = weekday[todaysDate.getDay()];
	var theDate = todaysDate.getDate();
	var theMonth = monthsOfYear[todaysDate.getMonth()];
	var theYear = todaysDate.getFullYear();

	//display message
	document.getElementById("date").innerHTML = theDay + ", " + theDate + " " + theMonth + " " + theYear;
}

//JavaScript to get user's location
function getLocation()
{
  if (navigator.geolocation)
  {
	navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{info.innerHTML="Geolocation is not supported by this browser.";}
}

function showPosition(position)
{
	var lat= position.coords.latitude;
	var lon= position.coords.longitude;

  	document.getElementById("info").innerHTML="Latitude: " + lat + 
  	"<br>Longitude: " + lon;	

	var map = confirm("Do you want to disply your location on a map?");

	if(map)
	{
		location="http://www.openstreetmap.org/#map=17/"+ lat + "/" + lon;
	}
}

//form validation on contact Page
function validateForm()
{
	//get form values
    var fname = document.getElementById("fname").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    //validate first name
    if (fname == null || fname == "")
    {
        alert("Please enter a first name");
        document.myForm.fname.focus();
        return false;
    }

    //validate surname
    if (surname == null || surname == "")
    {
        alert("Please enter a surname");
        document.myForm.surname.focus();
        return false;
    }

    //validate email
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Please enter a valid e-mail address");
        document.myForm.email.focus();
       return false;
    }

    //validate message
    if (message == null || message == "")
    {
        alert("Please enter a message");
        document.myForm.message.focus();
        return false;
    }
}

//accordion on Work Experience Page
function accordion()
{
    $("dt").on("click", function () {
    	$("dd").slideUp();
        $(this).next().toggle();
    })
}