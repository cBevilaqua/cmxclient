const request = require('request');
const config = require('./config.json');
const API_BASE_URL = 'https://cmxlocationsandbox.cisco.com/api';

class ApiClient {

	constructor(resource) {
		this.resource = resource;
	}

	get(url) {
		return new Promise((resolve, reject) => {
			request({
				method: 'GET',
				uri: `${API_BASE_URL}/${this.resource}/${url}`,
				headers: this.generateHeaders()
			}, function (err, resp, body) {
				if (err) {
					reject(err);
				} else {
					resolve(body);
				}
			});
		});
	}

	generateHeaders() {
		return {
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Buffer.from(`${config.username}:${config.password}`).toString('base64')
		};
	}
}

module.exports = ApiClient;