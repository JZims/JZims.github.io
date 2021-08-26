

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
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

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'tomato'){
		document.getElementById('theme-style').href = 'tomato.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
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