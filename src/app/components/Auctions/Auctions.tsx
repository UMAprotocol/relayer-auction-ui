import { AuctionBroadcastData } from "@/types";
import { AuctionTable } from "./components/AuctionTable";

export function Auctions(props: AuctionBroadcastData[]) {
  return (
    <section>
      {props.map((auction) => (
        <AuctionTable key={auction.auctionId} {...auction} />
      ))}
    </section>
  );
}
