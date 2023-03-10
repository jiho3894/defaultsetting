"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      cacheTime: Infinity,
    },
  },
});

interface ReactQueryWrapperProps {
  children: React.ReactNode;
}

const ReactQueryWrapper = ({ children }: ReactQueryWrapperProps) => {
  const [query] = useState(() => queryClient);
  return (
    <QueryClientProvider client={query}>
      <ReactQueryDevtools initialIsOpen={true} />
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryWrapper;
