"use client";

import { Card } from '@/components/ui/card';

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-6 bg-cyberpunk-darker border-gray-800">
        <h3 className="text-xl font-display text-white mb-4">Network Stats</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">TPS</span>
            <span className="text-cyberpunk-cyan font-mono">200,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Block Time</span>
            <span className="text-cyberpunk-cyan font-mono">0.2s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Gas Price</span>
            <span className="text-cyberpunk-cyan font-mono">0.001 ARMA</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-cyberpunk-darker border-gray-800">
        <h3 className="text-xl font-display text-white mb-4">Staking</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">APR</span>
            <span className="text-cyberpunk-cyan font-mono">2.5%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Staked</span>
            <span className="text-cyberpunk-cyan font-mono">1.2M ARMA</span>
          </div>
          <button className="w-full neon-btn mt-4">
            Stake ARMA
          </button>
        </div>
      </Card>

      <Card className="p-6 bg-cyberpunk-darker border-gray-800">
        <h3 className="text-xl font-display text-white mb-4">DAO</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Active Proposals</span>
            <span className="text-cyberpunk-cyan font-mono">3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Your Voting Power</span>
            <span className="text-cyberpunk-cyan font-mono">0 vARMA</span>
          </div>
          <button className="w-full neon-btn mt-4">
            View Proposals
          </button>
        </div>
      </Card>
    </div>
  );
}