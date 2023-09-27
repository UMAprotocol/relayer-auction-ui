"use client";

import { AuctionTable } from "../Auctions/components/AuctionTable";
import { useAuctions } from "../Auctions/hooks/useAuctions";

export function Auction() {
  const auctions = useAuctions();
  // const auctions = [
  //   {
  //     auctionId: "0x1231597c",
  //     status: "active",
  //     deposit: {
  //       recipient: "0x9A8f92a830A5cB89a3816e3D267CB7791c16b04D",
  //       tokenAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  //       relayerFeePct: "1",
  //       amount: "10000000000000000",
  //       destinationChainId: 421613,
  //       quoteTimestamp: "1695742882",
  //       message: "0x",
  //       maxCount:
  //         "115792089237316195423570985008687907853269984665640564039457584007913129639935",
  //       txValue: "0",
  //     },
  //     bidDeadlineMs: 1695813673493,
  //     winningRelayer: "0x9A8f92a830A5cB89a3816e3D267CB7791c16b04D",
  //     bids: [
  //       {
  //         auctionId: "0x1231597c",
  //         bidTimeMs: 1695813663554,
  //         relayerAddress: "0x9A8f92a830A5cB89a3816e3D267CB7791c16b04D",
  //       },
  //       {
  //         auctionId: "0x1231597c",
  //         bidTimeMs: 1695813663554,
  //         relayerAddress: "0x8A8f92a830A5cB89a3816e3D267CB7791c16b04E",
  //       },
  //       {
  //         auctionId: "0x1231597c",
  //         bidTimeMs: 1695813663554,
  //         relayerAddress: "0x7A8f92a830A5cB89a3816e3D267CB7791c16b04F",
  //       },
  //     ],
  //   },
  // ];
  const auctionsList = Object.values(auctions);
  return (
    <main className="mx-auto max-w-[1024px] p-6">
      <>
        {auctionsList.length === 0 ? (
          <h1 className="grid h-[100svh] place-items-center text-center text-6xl font-bold text-gray-900">
            Loading...
          </h1>
        ) : (
          auctionsList.map((auction) => (
            <AuctionTable key={auction.auctionId} {...auction} />
          ))
        )}
      </>
    </main>
  );
}
