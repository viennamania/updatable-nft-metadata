import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "polygon");

const addNFTs = async () => {
  const drop = await sdk.getContract(
    ////"0xa048448153712f72714c9d8A17d449E4445Ae3a7",
    "0xAdC05ca4766ee90B68d8B75D8AdedB00ca6C5846",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/viennamania/updatable-nft-metadata/nfts/1",
      "https://my-json-server.typicode.com/viennamania/updatable-nft-metadata/nfts/2",
      "https://my-json-server.typicode.com/viennamania/updatable-nft-metadata/nfts/3",
      "https://my-json-server.typicode.com/viennamania/updatable-nft-metadata/nfts/4",
      "https://my-json-server.typicode.com/viennamania/updatable-nft-metadata/nfts/5",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();
