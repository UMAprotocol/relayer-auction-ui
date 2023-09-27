import { Auction } from "@/types";
import { formatUnits } from "viem";
import { Address, useToken } from "wagmi";
import { useChainDetails } from "../hooks/useChainDetails";

export function AuctionTable(props: Auction) {
  const isComplete = props.status === "complete";
  const titleColor = isComplete ? "text-green-600" : "text-gray-500";
  const {
    tokenAddress,
    amount,
    destinationChainId,
    sourceChainId,
    relayerFeePct,
    message: _message,
    maxCount: _maxCount,
    txValue: _txValue,
    ...depositData
  } = props.deposit;
  const { data: tokenData } = useToken({ address: tokenAddress as Address });
  const enhancedData = {
    tokenAddress: `${tokenAddress}${tokenData ? ` (${tokenData.name})` : ""}`,
    amount: tokenData
      ? `${formatUnits(BigInt(amount), tokenData.decimals)} ${tokenData.symbol}`
      : amount,
    sourceChain: useChainDetails(sourceChainId)?.name,
    destinationChain: useChainDetails(destinationChainId)?.name,
    relayerFee: `${relayerFeePct}%`,
  };
  return (
    <div>
      <h2 className="pl-5 text-2xl font-medium">
        Auction ID: <span className={titleColor}>{props.auctionId}</span> |
        Status:{" "}
        <span className={titleColor}>{camelToTitleCase(props.status)}</span>
      </h2>
      <table className="w-full text-left text-sm text-gray-600">
        <caption className="p-5 text-left text-lg font-semibold text-gray-900">
          Deposit
        </caption>
        <tbody>
          <>
            {Object.entries(enhancedData).map(([key, value], index) => (
              <tr
                key={key}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <th
                  scope="row"
                  className="whitespace-nowrap py-1 font-medium text-gray-700"
                >
                  <strong className="px-6 py-4 font-semibold">
                    {camelToTitleCase(key)}
                  </strong>
                </th>
                <td className="px-2 py-4">{value}</td>
              </tr>
            ))}
          </>
          {Object.entries(depositData).map(([key, value], index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <th
                scope="row"
                className="whitespace-nowrap py-1 font-medium text-gray-700"
              >
                <strong className="px-6 py-4 font-semibold">
                  {camelToTitleCase(key)}
                </strong>
              </th>
              <td className="px-2 py-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-full text-left text-sm text-gray-600">
        <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 ">
          Bids
        </caption>
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Relayer Address
            </th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {props.bids.map((bid, index) => (
            <tr key={index} className="border-b bg-white">
              <td className="px-6 py-4">{bid.relayerAddress}</td>
              <td className={`px-6 py-4 ${titleColor}`}>
                {isComplete &&
                  props.winningRelayer === bid.relayerAddress &&
                  "✔"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function camelToTitleCase(str: string): string {
  // Replace camelCase with space, then replace the first character of each word to uppercase
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add a space between words
    .replace(/\b([a-z])/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
}
