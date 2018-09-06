const ApiClient = require('./api-client');
const apiClient = new ApiClient('config');

// https://cmxlocationsandbox.cisco.com/apidocs/configuration-api

class Configuration {
	async getAllBuildings() {
		return apiClient.get('v1/maps/building/list');
	}

	async getAllMaps() {
		return apiClient.get('v1/maps');
	}
}

module.exports = Configuration;