/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AuctionEvent } from "@/types";
import { useMemo } from "react";
import useSWRSubscription from "swr/subscription";

export function useAuctionsSubscription() {
  const { data, error } = useSWRSubscription(
    "wss://auction-api.adams.software",
    (key, { next }) => {
      const socket = new WebSocket(key);
      socket.addEventListener("message", (event) => {
        next(null, JSON.parse(event.data));
      });
      socket.addEventListener("error", (event) => {
        // @ts-expect-error TODO: fix this
        next(event.error);
      });
      return () => {
        socket.close();
      };
    },
  );

  return useMemo(
    () =>
      ({
        event: { ...data?.data, type: data?.type },
        error,
      }) as {
        event: AuctionEvent | undefined;
        error: Error | undefined;
      },
    [data, error],
  );
}
