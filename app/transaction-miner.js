class TransactionMiner {
    constructor({ blockchain, transactionPool, wallet, pubsub }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.pubsub = pubsub;
    }
    
    mineTransaction() {
        // get the transationpool's valid transaction

        // generate the miner's reward

        // add a block consisting of these transaction to the blockchain

        // broadcast the updated blockchain

        // clear the pool
    }
}

module.exports = TransactionMiner;