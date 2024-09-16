"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_onvif_1 = __importDefault(require("node-onvif"));
console.log('Start the discovery process.');
// Find the ONVIF network cameras.
// It will take about 3 seconds.
node_onvif_1.default.startProbe().then((device_info_list) => {
    console.log(device_info_list.length + ' devices were found.');
    // Show the device name and the URL of the end point.
    device_info_list.forEach((info) => {
        console.log(JSON.stringify(info));
        console.log('- ' + info.urn);
        console.log('  - ' + info.name);
        console.log('  - ' + info.xaddrs[0]);
    });
}).catch((error) => {
    console.error(error);
});
