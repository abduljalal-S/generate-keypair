import { Keypair } from "@solana/web3.js";


const generatedKeypair = Keypair.generate();


console.log(`The public key is:`, generatedKeypair.publicKey.toBase58());
console.log(`The secret key is: `, generatedKeypair.secretKey);
console.log(`✅ Finished!`);

// loading an existing keypair from an .env
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);