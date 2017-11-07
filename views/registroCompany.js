const formRegister = document.querySelector(#Register)
const formData = new formData(formRegister)
	
formLogin.addEventListener('submit', event => {
	event.defaulPrevented()
	fetch('/sign', {
		method: 'POST',
		body: formData
	})
	.then(res => res.json())
	.then(data => console.log(data))