"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export function TradingView() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [selectedPair, setSelectedPair] = useState('BTC/USDC');

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#0A0A0A' },
        textColor: '#DDD',
      },
      grid: {
        vertLines: { color: '#1a1a1a' },
        horzLines: { color: '#1a1a1a' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#00ff00',
      downColor: '#ff0000',
      borderVisible: false,
      wickUpColor: '#00ff00',
      wickDownColor: '#ff0000',
    });

    // Sample data - replace with real data
    const data = [
      { time: '2024-01-01', open: 50000, high: 51000, low: 49000, close: 50500 },
      { time: '2024-01-02', open: 50500, high: 52000, low: 50000, close: 51500 },
      // Add more data points...
    ];

    candlestickSeries.setData(data);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      chart.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Orderbook */}
      <Card className="col-span-3 p-4 bg-cyberpunk-darker border-gray-800">
        <h2 className="text-lg font-display mb-4 text-white">Orderbook</h2>
        <div className="space-y-2">
          {/* Sample orderbook entries */}
          <div className="text-red-500">50,000 USDC - 1.2 BTC</div>
          <div className="text-red-500">49,900 USDC - 0.8 BTC</div>
          <div className="border-b border-gray-800 my-2"></div>
          <div className="text-green-500">49,800 USDC - 1.5 BTC</div>
          <div className="text-green-500">49,700 USDC - 2.0 BTC</div>
        </div>
      </Card>

      {/* Chart */}
      <Card className="col-span-6 p-4 bg-cyberpunk-darker border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-display text-white">{selectedPair}</h2>
          <select 
            value={selectedPair}
            onChange={(e) => setSelectedPair(e.target.value)}
            className="bg-cyberpunk-black text-white border border-gray-800 rounded px-2 py-1"
          >
            <option value="BTC/USDC">BTC/USDC</option>
            <option value="ETH/USDC">ETH/USDC</option>
            <option value="ARMA/USDC">ARMA/USDC</option>
          </select>
        </div>
        <div ref={chartContainerRef}></div>
      </Card>

      {/* Trade Controls */}
      <Card className="col-span-3 p-4 bg-cyberpunk-darker border-gray-800">
        <h2 className="text-lg font-display mb-4 text-white">Trade</h2>
        <div className="space-y-4">
          <select className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2">
            <option value="limit">Limit</option>
            <option value="market">Market</option>
            <option value="stop">Stop-Limit</option>
          </select>
          
          <input 
            type="number" 
            placeholder="Price (USDC)"
            className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
          />
          
          <input 
            type="number" 
            placeholder="Amount (BTC)"
            className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
          />
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Leverage</span>
            <input 
              type="range" 
              min="1" 
              max="50" 
              defaultValue="1"
              className="w-32"
            />
            <span className="text-white">1×</span>
          </div>
          
          <button className="w-full neon-btn">
            Place Order
          </button>
        </div>
      </Card>
    </div>
  );
}