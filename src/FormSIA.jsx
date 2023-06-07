import './FormSIA.css'
import { useState } from 'react'

const FormSIA = () => {

	const [completed, setCompleted] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault()
		setCompleted(true)
	}
	return ( 
		<div class = "container" >
		<div class = "container" >

		<div class = "card-panel white" >

		{
			completed ?
			(
				<div>
				<h5>Submission Complete</h5>
				<p>Thank you for providing your details</p>
				</div>
			)
			:
			(

				<div class = "row" >
		
				<form class = "col s12" >
				<div class = "row" >
				<div class = "input-field col s6" >
				<input 
				id = "first_name"
				type = "text"
				class = "validate" />
				
				<label
				for = "first_name" > First Name </label> 
				</div> 
				
				<div class = "input-field col s6" >
				<input 
				id = "last_name"
				type = "text"
				class = "validate" />
				<label
				for = "last_name" > Last Name < /label> 
				</div > 
				</div>

				<div class = "row" >
				<div class = "input-field col s12" >
				<input 
				id = "email"
				type = "email"
				class = "validate" />
				
				<label
				for = "email" > Email < /label> 
				</div > 
				</div> 

				<div class = "row" >
				<div class = "input-field col s12" >
				<input 
				id = "phone"
				type = "text"
				class = "validate" />
				
				<label
				for = "phone" > Phone Number < /label> 
				</div >
				</div>

				<div class = "row" >
				<div class = "input-field col s12" >
				<input 
				id = "area"
				type = "text"
				class = "validate" />
				
				<label
				for = "area" > Town / City < /label> 
				</div > 
				</div>

				<div class = "row" >

				<p>Do you currently hold a valid SIA license?</p> 
				<p>
				<label>
				<input 
				name = "group1"
				type = "radio" />
				<span> Yes </span> 
				</label> 
				</p> 

				<p>
				<label>
				<input 
				name = "group1"
				type = "radio" />
				<span> No </span> 
				</label > 
				</p>
				</div> 

				<div class = "row" >
				<div class = "col s12" >
				Expiry date of current license :
				<div class = "input-field inline" >
				<input 
				id = "expiry-inline"
				type = "text"
				class = "datepicker" />
				<label
				for = "expiry-inline" > < /label> 
				<span class = "helper-text"> DD / MM / YYYY </span>

				</div> 
				</div>

				<button 
				class = "btn waves-effect waves-light"
				onClick = {e=>handleSubmit(e)} 
				> Submit 
				</button> 
				</div>

				</form> 
				</div>
			)
		}

		
		</div>



		</div>
		</div>
	);
};

export default FormSIA