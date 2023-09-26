import { Metadata } from "next";
import { Auction } from "./components/pages/Auction";

export const metadata: Metadata = {
  title: "Working Title | Auction",
  description: "It does the relay",
};

export default function AuctionPage() {
  return <Auction />;
}
