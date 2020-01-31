export class Question {
	static create(question) {
		return fetch('https://quastions-app.firebaseio.com/questions.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(question)
		})
			.then(response => response.json())
			.then(response => {
				question.id = response.name
				return question
			})
			.then(addToLocalStorage)
	}
}

function addToLocalStorage(question) {
	const all = getQuestionsFromLocalStorage()
	all.push(question)
	localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionsFromLocalStorage() {
	return JSON.parse(localStorage.getItem('questions') || '[]')
}