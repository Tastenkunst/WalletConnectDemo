import { NamespaceMetadata, ChainMetadata, ChainsMap } from "../helpers";

export const CardanoChainData: ChainsMap = {
  "1-764824073": {
    id: "cip34:1-764824073",
    name: "Cardano Mainnet",
    rpc: [],
    slip44: 1815,
    testnet: false,
  },
  "0-1": {
    id: "cip34:0-1",
    name: "Cardano Pre-prod",
    rpc: [],
    slip44: 1815,
    testnet: true,
  },
  "0-2": {
    id: "cip34:0-2",
    name: "Cardano Preview",
    rpc: [],
    slip44: 1815,
    testnet: true,
  },

};

export const CardanoMetadata: NamespaceMetadata = {
  // Cardano Mainnet
  "1-764824073": {
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
    rgb: "183, 62, 49",
  },
  // Cardano Pre-prod
  "0-1": {
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
    rgb: "183, 62, 49",
  },
  // Cardano Preview
  "0-2": {
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
    rgb: "183, 62, 49",
  },
};

export function getChainMetadata(chainId: string): ChainMetadata {

  console.log('getting chain metadata for cardano', chainId)

  const reference = chainId.split(":")[1];
  const metadata = CardanoMetadata[reference];
  if (typeof metadata === "undefined") {
    throw new Error(`No chain metadata found for chainId: ${chainId}`);
  }
  return metadata;
}
