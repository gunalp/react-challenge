import React from 'react';
import '../../style/App.css';

class HeaderComponent extends React.Component{

	render() {
		return (
			
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<span className="logo">DEMO Streaming</span>
						</div>
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<div className="float-right">
								<a href="/" className="login" style={{textDecoration:'none'}}>Login</a>
								<a href="/" className="trial" style={{textDecoration:'none'}}>Start your free trial</a>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
			</header>
			
		);
	}

}

export default HeaderComponent