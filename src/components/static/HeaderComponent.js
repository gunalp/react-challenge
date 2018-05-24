import React from 'react';
class HeaderComponent extends React.Component{

	constructor(props) {
		super(props)
	}

	render() {
		return (
					<div>
						<div className="row header-shadow" style={{ backgroundColor: 'rgb(2,127,255)', paddingTop: 10, paddingBottom: 10 }}>
							<div className="col-md-9">
								<h1 style={{ fontSize: 33, fontWeight: 'bold', color: 'white', paddingLeft: 80 }}>DEMO Streaming</h1>
							</div>
							<div className="col-md-3">
								<div>
									<span style={{ color: 'white', marginRight: 10 }}>Login</span>
									<span style={{ color: 'white', backgroundColor: '#999999', padding: '2px 5px' }}>Start your free trial</span>
								</div>
							</div>
						</div>
						<div style={{ backgroundColor: '#474747', paddingLeft: 80, paddingRight: 80, paddingTop: 10, paddingBottom: 10 }}>
							<span style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Popular Series</span>
						</div>
					</div>
		);
	}

}

export default HeaderComponent