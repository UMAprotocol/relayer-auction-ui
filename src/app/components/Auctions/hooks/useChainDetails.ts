import * as chains from "viem/chains";

export function useChainDetails(chainIdString: string | undefined) {
  const chainId = Number(chainIdString);
  if (!chainId || isNaN(chainId)) return;
  const chainsList = Object.values(chains);
  const chainIds = chainsList.map((chain) => chain.id);
  if (!chainIds.includes(chainId)) {
    throw new Error(`Unknown chainId ${chainId}`);
  }
  const chain = chainsList.find((chain) => chain.id === chainId);

  return chain;
}
