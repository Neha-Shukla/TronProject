const contractAddress = 'TBnAViZ52ChjorXuyjjDDGKdQwy1Y3babt'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
};

export default utils;

