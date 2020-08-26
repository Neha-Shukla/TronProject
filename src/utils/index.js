const contractAddress = 'TK43tXeMuTQ1Hjs1zzkw9Ku634v3yWgBKc'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
};

export default utils;

