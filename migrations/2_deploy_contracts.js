//Import Contract
const DeStore = artifacts.require("DeStore");

module.exports = function(deployer) {
	//Deploy Contract
	deployer.deploy(DeStore);
};
