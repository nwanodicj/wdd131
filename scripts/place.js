let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = ""


// returns: Tuesday, December 16, 2017 11:09:42
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		nLastModif: "full",
	}
).format(nLastModif)
}`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


// Here we use array to store the data using the object module
const windchills = [{
	name: 'Weather',

	image: 'images/weather-forecast-icon.webp',

	rating: {
		count: '23'
	}
}];


let windchillsHTML = ''
// Here we call the forEach() function and inside the forEach() function, we generated the html
windchills.forEach((windchill) => {
	windchillsHTML += `
	<div class="weather-container">
        <div>
            <h1>${windchill.name}</h1>
        </div>
        <div class="wind-chill-factor-container">
            <img class="wind-chill-factor" src="${windchill.image}" alt="Windchill Factor">
        </div>
        <div class="information">
            <p>
                <h3>Temperature: 10c</h3>
                <h3>Conditions: Partly Cloudly</h3>
                <h3>Wind: 5 km/h</h3>
                <h3>Wind Chil: 9.8 C</h3>
            </p>
        </div>
    </div>`
	console.log(windchillsHTML)
});

//Here the code display the windchill on the screen

document.querySelector('.js-wind-chill-container').innerHTML = 	windchillsHTML;


