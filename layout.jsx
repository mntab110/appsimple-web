import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* We can use standard meta tags here if needed, but SEO settings tool handles some */}
      </head>
      <body className="bg-white text-[#1a1a1a] font-inter antialiased selection:bg-[#f0f0f0]">
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen flex flex-col">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
