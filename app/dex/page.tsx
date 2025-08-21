import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TradingView } from '@/components/dex/trading/trading-view';
import { Bridge } from '@/components/dex/bridge/bridge-view';
import { Dashboard } from '@/components/dex/dashboard/dashboard-view';
import { Vault } from '@/components/dex/vault/vault-view';
import { KYC } from '@/components/dex/kyc/kyc-view';

export default function DexPage() {
  const [activeTab, setActiveTab] = useState('trading');

  return (
    <div className="min-h-screen bg-cyberpunk-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Arma<span className="text-cyberpunk-cyan">DEX</span>
          </h1>
          <p className="text-gray-400 text-lg">
            High-performance decentralized trading platform
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-cyberpunk-darker border border-gray-800">
            <TabsTrigger value="trading" className="data-[state=active]:bg-cyberpunk-cyan data-[state=active]:text-black">
              Trading
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-cyberpunk-cyan data-[state=active]:text-black">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="vault" className="data-[state=active]:bg-cyberpunk-cyan data-[state=active]:text-black">
              Vault
            </TabsTrigger>
            <TabsTrigger value="bridge" className="data-[state=active]:bg-cyberpunk-cyan data-[state=active]:text-black">
              Bridge
            </TabsTrigger>
            <TabsTrigger value="kyc" className="data-[state=active]:bg-cyberpunk-cyan data-[state=active]:text-black">
              KYC
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trading" className="mt-6">
            <TradingView />
          </TabsContent>

          <TabsContent value="dashboard" className="mt-6">
            <Dashboard />
          </TabsContent>

          <TabsContent value="vault" className="mt-6">
            <Vault />
          </TabsContent>

          <TabsContent value="bridge" className="mt-6">
            <Bridge />
          </TabsContent>

          <TabsContent value="kyc" className="mt-6">
            <KYC />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}