import { Auction } from "@/types";

export function AuctionTable(props: Auction) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              Auction ID: {props.auctionId} | Status: {props.status}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.bids.map((bid, index) => (
            <tr key={index}>
              <td>Bid</td>
              <td>Relayer Address: {bid.relayerAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Token Address</th>
            <th>Amount</th>
            <th>Destination Chain Id</th>
            <th>Relayer Fee Pct</th>
            <th>Quote Timestamp</th>
            <th>Message</th>
            <th>Max Count</th>
            <th>Tx Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.deposit.recipient}</td>
            <td>{props.deposit.tokenAddress}</td>
            <td>{props.deposit.amount}</td>
            <td>{props.deposit.destinationChainId}</td>
            <td>{props.deposit.relayerFeePct}%</td>
            <td>{props.deposit.quoteTimestamp}</td>
            <td>{props.deposit.message}</td>
            <td>{props.deposit.maxCount}</td>
            <td>{props.deposit.txValue}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
