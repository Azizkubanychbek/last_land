"use client";

import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { AudioProvider } from '@/components/providers/audio-provider';
import { cn } from '@/lib/utils';
import { DexHeader } from '@/components/dex/layout/header';
import { WagmiConfig } from 'wagmi';
import { config } from '@/lib/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
});

// Create a client
const queryClient = new QueryClient();

export default function DexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AudioProvider>
            <div className={cn(
              inter.variable,
              jetbrainsMono.variable,
              orbitron.variable,
              'min-h-screen bg-cyberpunk-black font-sans antialiased'
            )}>
              <DexHeader />
              <main className="pt-16">
                {children}
              </main>
            </div>
          </AudioProvider>
        </ThemeProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}