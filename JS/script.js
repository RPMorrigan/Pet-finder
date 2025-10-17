// credentials for our API
const apiKey = "p5QUYRn42EF9Lomnyk4ttV9GQYCOD7YfNDqEaBtCYty3LPx79S";
const secret = "NlHMu48QRrFSB22FCw6E8N2y4vDiV6vkXXx2E17U";

// variables
const form = document.getElementById("petForm");
form.addEventListener("submit", usrData);

// first, lets collect our user data
function usrData (e) {
  e.preventDefault();
  
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);

    getAdoptablePets(formData);

}

function getToken() {
	return fetch("https://api.petfinder.com/v2/oauth2/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams({
			grant_type: "client_credentials",
			client_id: apiKey,
			client_secret: secret
		})
	})
		.then((res) => res.json())
		.then((data) => data.access_token);
}


function getAdoptablePets(formData) {
//first need to call the getToken function, then once that value is returned, you can use the token in the API call
//they will have to research how to build their link
	getToken().then((token) => {
		fetch(	 `https://api.petfinder.com/v2/animals?type=${formData.type}&location=${formData.zip}&color=${formData.colorSelect}`,
			{//note the token is being used in the header, which they will learn more about in backend
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
			.then((res) => res.json())
			.then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
	});
}