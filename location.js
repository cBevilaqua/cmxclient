const ApiClient = require('./api-client');
const apiClient = new ApiClient('location');

// https://cmxlocationsandbox.cisco.com/apidocs/location-api

class Location {
	async getAllActiveClients() {
		return apiClient.get('v3/clients');
	}
}

module.exports = Location;