"use client";

import { Card } from '@/components/ui/card';

export function Vault() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 bg-cyberpunk-darker border-gray-800">
        <h3 className="text-xl font-display text-white mb-4">BTC Trend Following</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Strategy</span>
            <span className="text-white">Momentum + Mean Reversion</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">30D Return</span>
            <span className="text-green-400">+12.5%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">APY (projected)</span>
            <span className="text-cyberpunk-cyan">45.2%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">TVL</span>
            <span className="text-white">$2.5M</span>
          </div>
          <button className="w-full neon-btn mt-4">
            Subscribe to Vault
          </button>
        </div>
      </Card>

      <Card className="p-6 bg-cyberpunk-darker border-gray-800">
        <h3 className="text-xl font-display text-white mb-4">ETH Options Yield</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Strategy</span>
            <span className="text-white">Covered Calls + Cash Secured Puts</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">30D Return</span>
            <span className="text-green-400">+8.3%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">APY (projected)</span>
            <span className="text-cyberpunk-cyan">32.8%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">TVL</span>
            <span className="text-white">$1.8M</span>
          </div>
          <button className="w-full neon-btn mt-4">
            Subscribe to Vault
          </button>
        </div>
      </Card>
    </div>
  );
}