export type DepositData = {
  recipient: string;
  tokenAddress: string;
  amount: string;
  destinationChainId: string;
  sourceChainId: string;
  relayerFeePct: string;
  quoteTimestamp: string;
  message: string;
  maxCount: string;
  txValue: string;
};

export type Deposit = {
  type: "Deposit";
  auctionId: string;
  deposit: DepositData;
  bidDeadlineMs: number;
};

export type Bid = {
  type: "Bid";
  auctionId: string;
  relayerAddress: string;
};

export type AuctionComplete = {
  type: "AuctionComplete";
  auctionId: string;
  winningRelayer: string;
};

export type AuctionEvent = Deposit | Bid | AuctionComplete;

export type Auction = {
  auctionId: string;
  status: "active" | "complete";
  deposit: DepositData;
  bidDeadlineMs: number;
  winningRelayer?: string;
  bids: Bid[];
};
