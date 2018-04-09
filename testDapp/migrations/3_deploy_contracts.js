var TransferTestToken = artifacts.require("TransferTestToken");

module.exports = function (deployer) {
    deployer.deploy(TransferTestToken);
};