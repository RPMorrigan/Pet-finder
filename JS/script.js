// credentials for our API
const apiKey = "p5QUYRn42EF9Lomnyk4ttV9GQYCOD7YfNDqEaBtCYty3LPx79S";
const secret = "NlHMu48QRrFSB22FCw6E8N2y4vDiV6vkXXx2E17U";

// variables
const form = document.getElementById("petForm");
form.addEventListener("submit", usrData);

// first, lets collect our user data
function usrData (event) {
  event.preventDefault();
  
  const formData = new FormData(target.event);
  const data = Object.fromEntries(formData.entries());
}

function getToken() {
	return fetch("https://api.petfinder.com/v2/oauth2/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams({
			grant_type: "client_credentials",
			client_id: "ADD HERE",
			client_secret: "ADD HERE"
		})
	})
		.then((res) => res.json())
		.then((data) => data.access_token);
}


function getAdoptablePets(formData) {
//first need to call the getToken function, then once that value is returned, you can use the token in the API call
//they will have to research how to build their link
	getToken().then((token) => {
		fetch(	 `ADD URL`,
			{//note the token is being used in the header, which they will learn more about in backend
				headers: {
					Authorization: `Bearer${token}`
				}
			}
		)
			.then((res) => res.json())
			.then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
	});
}