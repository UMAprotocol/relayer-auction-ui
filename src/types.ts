export type DepositData = {
  recipient: string;
  tokenAddress: string;
  amount: string;
  destinationChainId: string;
  relayerFeePct: string;
  quoteTimestamp: string;
  message: string;
  maxCount: string;
  txValue: string;
};

export type AuctionBroadcastData = {
  auctionId: string;
  deposit: DepositData;
  bidDeadline: number;
};

export type BidData = {
  auctionId: string;
  relayerAddress: string;
};

export type AuctionData = {
  deposit: DepositData;
  bids: Map<string, BidData>;
};

export type DepositReturnData = {
  recipient: string;
  relayerFeePct: string;
  message: string;
};
