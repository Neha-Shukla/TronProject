const contractAddress = 'TWASQpKd5xd2TXvGkAUnZ1q6XhNmTufAi2'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;

