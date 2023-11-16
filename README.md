# CryptoChain

CryptoChain is a full-stack web application that demonstrates a decentralized blockchain network involving the "CryptoChain" cryptocurrency for transactions.

## Libraries Used

- **Frontend**: React
- **Backend**: Express
- **Runtime Environment**: Node

## Dependencies

These dependencies are required to run this project on a localhost environment:

- Node.js
- Redis

## Instructions

1. Clone the repository.
2. Install the required modules by running `npm install` in the project directory.
3. Start the project on the root node with `npm run start` (PORT:3000).
4. To start different peers/nodes in the network, use `npm run start-peer` in the terminal. The server will start on a random PORT, noted as listening on `PORT:3XXX`.

## Roadmap & Issues

- Implement authentication for accessing the front-end (signup/login portal). Successful sign-ups reward users with CryptoChain coins to maintain currency flow.
- Decentralize the network by enabling nodes to sync with each other, not solely with the root node.
- Enable blockchain backups by allowing download to the file system (e.g., JSON format) to prevent blockchain loss if all nodes go down.
- Address issues related to a 51% attack and the generation of orphaned blocks.
- Replace transaction pool polling with real-time updates using socket.io to prevent server overload.
- Utilize Redux for handling various front-end issues.
- Implement a solution to prevent tracking public key usage throughout transactions for enhanced security.
- Enhance the proof-of-work algorithm by increasing the MINING_RATE and display real-time feedback on the frontend.
- Scale redis server connections by implementing a cluster of redis URLs to handle increasing connections.

