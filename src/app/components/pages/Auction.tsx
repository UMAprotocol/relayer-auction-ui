"use client";

import { AuctionTable } from "../Auctions/components/AuctionTable";
import { useAuctions } from "../Auctions/hooks/useAuctions";

export function Auction() {
  const auctions = useAuctions();
  return (
    <main className="">
      <h1 className="text-6xl">Auction</h1>
      {Object.values(auctions).map((auction) => (
        <AuctionTable key={auction.auctionId} {...auction} />
      ))}
    </main>
  );
}
