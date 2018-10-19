import React, { Component } from 'react';

class Portfolio extends Component {

	render() {
		return (
			<div className='portfolio_main_box main_box'>
				<div className='container'>
					<h3 className='uppercase'>Portfolio</h3>
					<div className='portfolio_row'>
						<div className='portfolio_col-1-4 col-1'>
							<div className="smaller_image"></div>
						</div>
						<div className='portfolio_col-1-4 col-2'>
							<div className="smaller_image"></div>
						</div>
						<div className='portfolio_col-1-4 col-3'>
							<div className="bigger_image"></div>
						</div>
						<div className='portfolio_col-1-4 col-4'>
							<ul>
								<li><a href='/'> Industrial design </a></li>
								<li><a href='/'> Web design </a></li>
								<li><a href='/'> Photography </a></li>
							</ul>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default Portfolio;
