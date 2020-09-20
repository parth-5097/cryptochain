const crypto = require("crypto");
const hexToBinary = require("hex-to-binary");

const cryptoHash = (...inputs) => {
  // (...inputs) combines all the argument given to this function in array
  const hash = crypto.createHash("SHA256");

  hash.update(
    inputs
      .map((input) => JSON.stringify(input))
      .sort()
      .join(" ")
  );

  return hash.digest("hex"); // it is represent result of the hash
};

module.exports = cryptoHash;
