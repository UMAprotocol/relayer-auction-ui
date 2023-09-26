import { AuctionBroadcastData } from "@/types";
import { AuctionTable } from "./components/AuctionTable";

export function Auctions(props: { data: AuctionBroadcastData[] }) {
  return (
    <section className="w-full">
      {props.data.map((auction) => (
        <AuctionTable key={auction.auctionId} {...auction} />
      ))}
    </section>
  );
}
