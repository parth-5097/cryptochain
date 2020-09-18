// const lightningHash = (data) => {
//     return data + '*';
// }

const { GENESIS_DATA, MINE_RATE } = require("../config");
const { cryptoHash } = require("../util");
const hexToBinary = require('hex-to-binary');

class Block {
    constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) { // we are using curly brace bcz latter we don't have to remember the order of argument
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }
    static genesis() {
        return new this(GENESIS_DATA); // you can use Block or this
    }

    static mineBlock({ lastBlock, data }) {
        let hash, timestamp;
        let lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
        } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({ timestamp, lastHash, data, difficulty, nonce, hash });
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }
}



module.exports = Block;

// const block = new Block({
//     timestamp:'01/03/09',
//     hash:'hash', 
//     data: 'data',
//     lastHash:'lasthash'});
// console.log(block);

// class Blockchain{
//     constructor(){
//         const genesis = new Block('gen-data', 'gen-hash', 'gen-lastHash');

//         this.chain = [genesis];
//     }

//     addBlock(data){
//         const lastHash = this.chain[this.chain.length-1].hash;
//         const hash = lightningHash(data + lastHash);
//         const block = new Block(data, hash, lastHash);
//         this.chain.push(block);
//     }
// }

// const blockchain = new Blockchain();
// blockchain.addBlock('one');
// blockchain.addBlock('two');
// blockchain.addBlock('three');

// console.log(blockchain);
