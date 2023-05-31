import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "polygon");

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0xa048448153712f72714c9d8A17d449E4445Ae3a7",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/viennamania/updatable-nft-metadata/nfts/69",
      "https://my-json-server.typicode.com/viennamania/updatable-nft-metadata/nfts/70",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();
