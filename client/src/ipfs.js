const projectId = '2MM84X6W4EEwklk9tum5duJBKiy'
const projectSecret = '078e0d0eabde31a6a60bf7af60729e67'
const auth = 'Basic ' + Buffer.from(`${projectId}:${projectSecret}`).toString('base64');



const IPFS = require('ipfs-http-client');

const ipfs = new IPFS({ 
    host: 'ipfs.infura.io', 
    port: 5001, 
    protocol: 'https',
    config: {
        headers: {
            authorization: auth
        }
    }
});

export default ipfs;
