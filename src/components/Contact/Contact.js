import React, { Component } from 'react';

class Contact extends Component {

	render() {
		return (
			<div className='contact_main_box main_box'>
				<div className='contact_left'>
					<h3 className='uppercase'>Contact</h3>
				
				</div>
				<div className='contact_right'>
					<form>
						<label>
							<input/>
						</label>
						<label>
							<input/>
						</label>
						<label>
							<input/>
						</label>
						<label>
							<textarea/>
						</label>
					</form>
					<button>Send message</button>
				</div>
			</div>
		);
	}

}

export default Contact;
