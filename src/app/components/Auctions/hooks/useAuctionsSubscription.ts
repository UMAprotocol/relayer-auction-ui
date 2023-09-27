import { AuctionEvent } from "@/types";
import { useMemo } from "react";
import useSWRSubscription from "swr/subscription";

export function useAuctionsSubscription() {
  const { data, error } = useSWRSubscription(
    "ws://46.101.170.197:2999",
    (key, { next }) => {
      const socket = new WebSocket(key);
      socket.addEventListener("message", (event) => {
        next(null, JSON.parse(event.data));
      });
      socket.addEventListener("error", (event) => {
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
