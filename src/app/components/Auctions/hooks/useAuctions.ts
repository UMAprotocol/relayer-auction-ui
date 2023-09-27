import { Auction, Deposit } from "@/types";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import { useAuctionsSubscription } from "./useAuctionsSubscription";

export function useAuctions() {
  const [auctions, setAuctions] = useImmer<Record<string, Auction>>({});
  const { event } = useAuctionsSubscription();

  useEffect(() => {
    if (!event) return;
    if (event.type === "Deposit") {
      setAuctions((draft) => {
        draft[event.auctionId] = createAuction(event);
        draft[event.auctionId].deposit = event.deposit;
        draft[event.auctionId].bidDeadlineMs = event.bidDeadlineMs;
      });
    } else if (event.type === "Bid") {
      setAuctions((draft) => {
        draft[event.auctionId].bids.push(event);
      });
    } else if (event.type === "AuctionComplete") {
      setAuctions((draft) => {
        draft[event.auctionId].status = "complete";
        draft[event.auctionId].winningRelayer = event.winningRelayer;
      });
    }
  }, [event, setAuctions]);

  return auctions;
}

function createAuction(depositEvent: Deposit): Auction {
  return {
    auctionId: depositEvent.auctionId,
    status: "active",
    deposit: depositEvent.deposit,
    bidDeadlineMs: depositEvent.bidDeadlineMs,
    winningRelayer: undefined,
    bids: [],
  };
}
