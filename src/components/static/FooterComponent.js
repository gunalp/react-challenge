import React from 'react';
import '../../style/App.css';

class FooterComponent extends React.Component{

	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="menu">
								<ul>
									<li>
										<a href="/">Home</a>
									</li>
									<li>
										<a href="/">Terms and Conditions</a>
									</li>
									<li>
										<a href="/">Privacy Policy</a>
									</li>
									<li>
										<a href="/">Collection Statement</a>
									</li>
									<li>
										<a href="/">Help</a>
									</li>
									<li>
										<a href="/">Manage Account</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="copyright">Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="social">
								<ul>
									<li>
										<a href="/">
											<img src="/assets/facebook.png" alt="" />
										</a>
									</li>
									<li>
										<a href="/">
											<img src="/assets/twitter.png" alt=""/>
										</a>
									</li>
									<li>
										<a href="/">
											<img src="/assets/instagram.png" alt=""/>
										</a>
									</li>
									<div className="clearfix"></div>
								</ul>
							</div>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-6">
							<div className="market">
								<ul>
									<li>
										<a href="/">
											<img src="/assets/apple.png" alt=""/>
										</a>
									</li>
									<li>
										<a href="/">
											<img src="/assets/google.png" alt=""/>
										</a>
									</li>
									<li>
										<a href="/">
											<img src="/assets/microsoft.png" alt=""/>
										</a>
									</li>
									<div className="clearfix"></div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			
			</footer>
		);
	}

}

export default FooterComponent