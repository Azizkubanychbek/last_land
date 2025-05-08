"use client";

import { Card } from '@/components/ui/card';
import { useState } from 'react';

export function KYC() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
  });

  return (
    <Card className="max-w-2xl mx-auto p-6 bg-cyberpunk-darker border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-display text-white mb-2">KYC Verification</h2>
        <p className="text-gray-400">Complete KYC to access fiat on/off ramp features</p>
      </div>

      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex items-center ${i < step ? 'text-cyberpunk-cyan' : i === step ? 'text-white' : 'text-gray-600'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${i <= step ? 'border-cyberpunk-cyan' : 'border-gray-600'}`}>
              {i}
            </div>
            {i < 3 && <div className={`w-full h-0.5 mx-2 ${i < step ? 'bg-cyberpunk-cyan' : 'bg-gray-600'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
            />
          </div>
          <button 
            className="w-full neon-btn mt-4"
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Country</label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full bg-cyberpunk-black text-white border border-gray-800 rounded px-3 py-2"
            >
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              {/* Add more countries */}
            </select>
          </div>
          <div className="flex gap-4">
            <button 
              className="flex-1 py-2 px-4 bg-cyberpunk-black text-white rounded border border-gray-800"
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button 
              className="flex-1 neon-btn"
              onClick={() => setStep(3)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400 mb-4">Upload your identification document</p>
            <button className="neon-btn">
              Choose File
            </button>
          </div>
          <div className="flex gap-4">
            <button 
              className="flex-1 py-2 px-4 bg-cyberpunk-black text-white rounded border border-gray-800"
              onClick={() => setStep(2)}
            >
              Back
            </button>
            <button className="flex-1 neon-btn">
              Submit
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}