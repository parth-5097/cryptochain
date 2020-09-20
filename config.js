const MINE_RATE = 1000; //this is in second
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: "----",
  hash: "hash-genesis",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
}; //screen case syntax to get attension

const STARTING_BALANCE = 1000;

const REWARD_INPUT = { address: "*authorized-reward*" };

const MINING_REWARD = 50;

module.exports = {
  GENESIS_DATA,
  MINE_RATE,
  STARTING_BALANCE,
  REWARD_INPUT,
  MINING_REWARD,
};
