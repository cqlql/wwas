'use strict';

module.exports = {
	port: 8001,
	mongoUrl: 'mongodb://mongo:27017',
	insightApi: 'https://insight.wificoin.club/insight-api',
	wfcPayUrl: 'https://wfc.wificoin.club/#/wifiPortal/payment?authServer=',
	authDomain: 'https://wifidog.kunteng.org.cn',
	wfcAuthPath: '/wifidog/auth/wfc',
	wxAuthPath: '/wifidog/auth/weixin',
	device_dir: './public/device',
    client_dir: './public/client',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
			secure: false,
			maxAge: 60*60000,
		}
	}
}
