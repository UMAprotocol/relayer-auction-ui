import { AuctionBroadcastData } from "@/types";

export function AuctionTable(props: AuctionBroadcastData) {
  return (
    <table className="">
      <thead>
        <tr>
          <th>Auction Id</th>
          <th>Deposit Data</th>
          <th>Bid Deadline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.auctionId}</td>
          <td>
            recipient: {props.deposit.recipient} <br />
            tokenAddress: {props.deposit.tokenAddress} <br />
            amount: {props.deposit.amount} <br />
            destinationChainId: {props.deposit.destinationChainId} <br />
            relayerFeePct: {props.deposit.relayerFeePct} <br />
            quoteTimestamp: {props.deposit.quoteTimestamp} <br />
            message: {props.deposit.message} <br />
            maxCount: {props.deposit.maxCount} <br />
            txValue: {props.deposit.txValue}
          </td>
          <td>{new Date(props.bidDeadline * 1000).toLocaleDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
}
