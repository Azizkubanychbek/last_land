"use client";

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <Button 
        variant="outline" 
        onClick={() => disconnect()}
        className="neon-btn"
      >
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </Button>
    );
  }

  return (
    <Button 
      onClick={() => connect({ connector: connectors[0] })}
      className="neon-btn"
    >
      Connect Wallet
    </Button>
  );
}