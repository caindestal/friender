const formLogin = document.querySelector(#login)
const formData = new formData(formLogin)
	
formLogin.addEventListener('submit', event => {
	event.defaulPrevented()
	fetch('/logini', {
		method: 'post',
		body: formData
	})
	.then(res => res.json())
	.then(data => console.log(data))