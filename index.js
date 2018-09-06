const Configuration = require('./configuration');
const Location = require('./location');

const configuration = new Configuration();
const location = new Location();

const init = async () => {
	const buildings = await configuration.getAllBuildings();
	console.log('Buildings -> ', buildings);

	const maps = await configuration.getAllMaps();
	console.log('Maps -> ', maps);

	const activeClientsLocation = await location.getAllActiveClients();
	console.log('Active clients Location -> ', activeClientsLocation);
};

init();