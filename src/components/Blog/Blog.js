import React, { Component } from 'react';

class Blog extends Component {

	render() {
		return (
			<div className='blog_main_box main_box'>
				<div className='container'>
					<div className='hero_text'>
						<h3 className='uppercase'>Recent blog</h3>
					</div>
					<div className='content'>
						<div className='blog_image'></div>
						<div className='content_text_left'>
								<h4 className='uppercase'>Ridiculus fring illa vulputate</h4>
								<span>Photography / Today / by Crophis</span>
						</div>
						<div className='content_text_right'>
							<h5 className='uppercase'>Quam sit ridiculus</h5>
							<span>Industrial design / Yesterday / by John Doe</span>
							<hr/>
							<h5 className='uppercase'>Ligua mattis tellus</h5>
							<span>Photography / June. 18. 2016 / by Michael Doe</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default Blog;
