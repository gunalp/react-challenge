import React from 'react';
import '../../style/footer.css';

class FooterComponent extends React.Component{

	render() {
		return (
			<footer style={{ paddingTop: 20, paddingBottom: 20, paddingRight: 80, paddingLeft: 80 }}>
				<div className="row">
					Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account
				</div>
				<div className="row" style={{ marginTop: 20 }}>
					Copyright (C)
				</div>
					<div className="row" style={{ marginTop: 50 }}>
						<div className="col-md-6">
								<img src="/assets/social/facebook-white.svg" alt="" style={{ width: 20, marginRight: 15 }}/>
								<img src="/assets/social/instagram-white.svg" alt="" style={{ width: 30, marginRight: 15  }}/>
								<img src="/assets/social/twitter-white.svg" alt="" style={{ width: 30 }}/>
						</div>
						<div className="col-md-6 pull-right">
							<img className="fb" src="/assets/store/app-store.svg" alt="" style={{ width: 200 }}/>
							<img className="fb" src="/assets/store/play-store.svg" alt="" style={{ width: 200 }}/>
							<img className="fb" src="/assets/store/windows-store.svg" alt="" style={{ width: 170 }}/>
						</div>
					</div>
			</footer>

		);
	}

}

export default FooterComponent