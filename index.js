

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('dark')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

const formSubmit = document.getElementById('contact-form')

formSubmit.addEventListener('submit', handleFormsubmit)


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'style.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'dark.css'
	}

	localStorage.setItem('theme', mode)
}

function handleFormsubmit(event){
	event.preventDefault()

	const contactName = event.target.name.value
	const contactSubject = event.target.subject.value
	const contactEmail = event.target.email.value
	const contactMessage = event.target.message.value

	window.open(`mailto:JZimmsCodes@outlook.com?subject=${contactSubject}&body= Hey Josh, it's ${contactName}. ${contactMessage}`);


}