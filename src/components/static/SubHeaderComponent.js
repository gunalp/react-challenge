import React from 'react';
import '../../style/App.css';

class SubHeaderComponent extends React.Component{

	render() {
		return (
			
			<header className="pre-header">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<span className="logo">Popular {this.props.title}</span>
						</div>
					</div>
				</div>
			</header>
			
		);
	}

}

export default SubHeaderComponent