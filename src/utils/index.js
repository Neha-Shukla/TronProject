const contractAddress = 'TFVfbXv3q94Uz6gqjyVKyK4JBsAgeXPi5U'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;

