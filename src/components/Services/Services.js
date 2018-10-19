import React, { Component } from 'react';

class Services extends Component {

	render() {
		return (
			<div className='services_main_box main_box'>
				<div className='container'>
					<div className='uppercase hero_text'>
						<h3>Services</h3>
						<ul>
							<li><a href='/'> Industrial design </a></li>
							<li><a href='/'> Web design </a></li>
							<li><a href='/'> Photography </a></li>
						</ul>
					</div>
					<div className='service_description'>
						<span>P</span>
						<div className='service_box'>
							<h4 className='uppercase'>Photography</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel lorem ante. Quisque pulvinar enim.</p>
						</div>
					</div>
				</div>
				<span className='services_text'>Serv</span>
			</div>
		);
	}

}

export default Services;
