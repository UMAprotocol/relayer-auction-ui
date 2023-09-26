import { Auctions } from "../Auctions/Auctions";

export function Auction() {
  const auctionBroadcastData = [
    {
      auctionId: "1",
      deposit: {
        recipient: "0x123456789abcdef",
        tokenAddress: "0xabcdef123456789",
        amount: "100",
        destinationChainId: "1",
        relayerFeePct: "0.1",
        quoteTimestamp: "1632979530",
        message: "Test Message 1",
        maxCount: "10",
        txValue: "1.5 ETH",
      },
      bidDeadline: 1632980000,
    },
    {
      auctionId: "2",
      deposit: {
        recipient: "0xabcdef123456789",
        tokenAddress: "0x123456789abcdef",
        amount: "200",
        destinationChainId: "2",
        relayerFeePct: "0.2",
        quoteTimestamp: "1632979630",
        message: "Test Message 2",
        maxCount: "20",
        txValue: "2.5 ETH",
      },
      bidDeadline: 1632981000,
    },
    {
      auctionId: "3",
      deposit: {
        recipient: "0x789abcdef123456",
        tokenAddress: "0x456789abcdef123",
        amount: "300",
        destinationChainId: "3",
        relayerFeePct: "0.3",
        quoteTimestamp: "1632979730",
        message: "Test Message 3",
        maxCount: "30",
        txValue: "3.5 ETH",
      },
      bidDeadline: 1632982000,
    },
  ];

  return (
    <main className="grid min-h-screen place-items-center">
      <h1 className="text-6xl">Auction</h1>
      <Auctions data={auctionBroadcastData} />
    </main>
  );
}
