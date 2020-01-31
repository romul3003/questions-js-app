import {isValid} from './utils'
import './styles.css'

const form = document.getElementById('form')
const input  = document.querySelector('#question-input')
const submitBtn = document.querySelector('#submit')

form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
	submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
  event.preventDefault()

	if (isValid(input.value)) {
		const question = {
			text: input.value.trim(),
			date: new Date().toJSON()
		}

		submitBtn.disabled = true
		// Async request to server to save question
		console.log('Question', question)

		input.value = ''
		input.className = ''
		submitBtn.disabled = false
	}
}