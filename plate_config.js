var RELAYplate = require('pi-plates').RELAYplate;
var DAQCplate = require('pi-plates').DAQCplate;
var MOTORplate = require('pi-plates').MOTORplate;

module.exports = function (RED) {
    function PlateNode(config) {
        RED.nodes.createNode(this, config);
        this.model = config.model;
        this.address = config.address;

	var addr = parseInt(this.address, 10);

        switch (this.model) {
            case "RELAYplate":
                this.plate = new RELAYplate(addr);
                break;
            case "DAQCplate":
                this.plate = new DAQCplate(addr);
                break;
            case "MOTORplate":
                this.plate = new MOTORplate(addr);
                break;
            default:
                this.error('incorrect plate specifier');
                break;
        }
    }
    RED.nodes.registerType("pi_plate", PlateNode);
}
