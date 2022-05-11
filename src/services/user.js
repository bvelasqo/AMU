export async function loginUser(credentials) {
	// return fetch('http://localhost:8080/login', {
	//   method: 'POST',
	//   headers: {
	//     'Content-Type': 'application/json'
	//   },
	//   body: JSON.stringify(credentials)
	// })
	//   .then(data => data.json())
	return {
		token: "123456789",
		user: {
			name: "",
			email: "",
			id: "",
		},
		credentials,
	};
}
