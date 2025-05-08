"use client";

import { Card } from '@/components/ui/card';
import { useState } from 'react';

export function Bridge() {
  const [direction, setDirection] = useState<'deposit' | 'withdraw'>('deposit');
  const [amount, setAmount] = useState('');
  const [chain, setChain] = useState('ethereum');

  return (
    <Card className="max-w-xl mx-auto p-6 bg-cyberpunk-darker border-gray-800">
      <h2 className="text-2xl font-display text-white mb-6">Bridge Assets</h2>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <button
            className={`flex-1 py-2 rounded ${direction === 'deposit' ? 'bg-cyberpunk-cyan text-black' : 'bg-cyberpunk-black text-white'}`}
            onClick={() => setDirection('deposit')}
          >
            Deposit
          </button>
          <button
            className={`flex-1 py-2 rounded ${direction === 'withdraw' ? 'bg-cyberpunk-cyan text-black' : 'bg-cyberpunk-black text-white'}`}
            onClick={() => setDirection('withdraw')}
          >
            Withdraw
          </button>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Select Chain</label>
          <select
            value={chain}
            onChange={(e) => setChain(e.target.value)}
            className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
          >
            <option value="ethereum">Ethereum</option>
            <option value="bsc">BSC</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
          />
        </div>

        <button className="w-full neon-btn">
          {direction === 'deposit' ? 'Deposit to ArmaDEX' : 'Withdraw to ' + chain}
        </button>

        <div className="mt-6 p-4 bg-cyberpunk-black rounded">
          <h3 className="text-white font-display mb-2">Bridge Status</h3>
          <div className="text-gray-400">No active bridge transactions</div>
        </div>
      </div>
    </Card>
  );
}