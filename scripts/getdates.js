// select the DOM elements for output
const full = document.querySelector("#last-modification");

// use the date object
const today = new Date();

full.innerHTML = `Last Modification <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}`;

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}`;