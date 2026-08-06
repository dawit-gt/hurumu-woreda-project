"use client";

import { SWRConfig } from "swr";
import { AuthProvider } from "@/lib/auth";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <AuthProvider>{children}</AuthProvider>
    </SWRConfig>
  );
}
