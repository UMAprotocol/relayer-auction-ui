import { Metadata } from "next";
import { Relayer } from "../components/pages/Relayer";

export const metadata: Metadata = {
  title: "Working Title | Relayer",
  description: "It does the relay",
};

export default function RelayerPage() {
  return <Relayer />;
}
