"use client";

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
    <div className="container mx-auto px-4 py-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-cyberpunk-darker">
          <TabsTrigger value="trading">Trading</TabsTrigger>
          <TabsTrigger value="bridge">Bridge</TabsTrigger>
          <TabsTrigger value="vault">Vault</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="kyc">KYC</TabsTrigger>
        </TabsList>
        <TabsContent value="trading">
          <TradingView />
        </TabsContent>
        <TabsContent value="bridge">
          <Bridge />
        </TabsContent>
        <TabsContent value="vault">
          <Vault />
        </TabsContent>
        <TabsContent value="dashboard">
          <Dashboard />
        </TabsContent>
        <TabsContent value="kyc">
          <KYC />
        </TabsContent>
      </Tabs>
    </div>
  );
}