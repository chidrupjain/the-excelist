import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calculator, TrendingUp, Coins, ArrowDownCircle } from 'lucide-react';

type CalcType = 'SIP' | 'LUMPSUM' | 'SWP';

export const FinancialCalculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CalcType>('SIP');

  // Common State
  const [investment, setInvestment] = useState<number>(5000); // Monthly for SIP, Total for Lumpsum/SWP
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);
  const [withdrawal, setWithdrawal] = useState<number>(5000); // Only for SWP

  const [result, setResult] = useState<{ 
    investedLabel: string;
    invested: number; 
    estimatedLabel: string;
    estimated: number; 
    totalLabel: string;
    total: number;
    data: any[] 
  }>({
    investedLabel: 'Total Invested',
    invested: 0,
    estimatedLabel: 'Est. Returns',
    estimated: 0,
    totalLabel: 'Total Value',
    total: 0,
    data: []
  });

  useEffect(() => {
    if (activeTab === 'SIP') {
      calculateSIP();
    } else if (activeTab === 'LUMPSUM') {
      calculateLumpsum();
    } else if (activeTab === 'SWP') {
      calculateSWP();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, investment, rate, years, withdrawal]);

  // Reset defaults when switching tabs
  const switchTab = (tab: CalcType) => {
    setActiveTab(tab);
    if (tab === 'SIP') {
      setInvestment(5000);
      setRate(12);
      setYears(10);
    } else if (tab === 'LUMPSUM') {
      setInvestment(100000);
      setRate(12);
      setYears(10);
    } else if (tab === 'SWP') {
      setInvestment(1000000);
      setWithdrawal(6000);
      setRate(10);
      setYears(5);
    }
  };

  const calculateSIP = () => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    
    const futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = investment * months;

    const data = [];
    for (let i = 1; i <= years; i++) {
        const m = i * 12;
        const fv = investment * ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) * (1 + monthlyRate);
        const inv = investment * m;
        data.push({
            name: `Year ${i}`,
            Invested: Math.round(inv),
            Value: Math.round(fv)
        });
    }

    setResult({
      investedLabel: 'Total Invested',
      invested: Math.round(totalInvested),
      estimatedLabel: 'Est. Returns',
      estimated: Math.round(futureValue - totalInvested),
      totalLabel: 'Total Value',
      total: Math.round(futureValue),
      data: data
    });
  };

  const calculateLumpsum = () => {
    const futureValue = investment * Math.pow(1 + rate / 100, years);
    const totalInvested = investment;

    const data = [];
    for (let i = 1; i <= years; i++) {
        const fv = investment * Math.pow(1 + rate / 100, i);
        data.push({
            name: `Year ${i}`,
            Invested: Math.round(totalInvested),
            Value: Math.round(fv)
        });
    }

    setResult({
      investedLabel: 'Total Invested',
      invested: Math.round(totalInvested),
      estimatedLabel: 'Est. Returns',
      estimated: Math.round(futureValue - totalInvested),
      totalLabel: 'Total Value',
      total: Math.round(futureValue),
      data: data
    });
  };

  const calculateSWP = () => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    
    let currentBalance = investment;
    let totalWithdrawn = 0;
    const data = [];

    // Initial point
    data.push({ name: 'Start', Value: investment, Withdrawn: 0 });

    for (let i = 1; i <= months; i++) {
      const interest = currentBalance * monthlyRate;
      currentBalance = currentBalance + interest - withdrawal;
      totalWithdrawn += withdrawal;
      
      if (currentBalance < 0) currentBalance = 0;

      if (i % 12 === 0) {
        data.push({
          name: `Year ${i/12}`,
          Value: Math.round(currentBalance),
          Withdrawn: Math.round(totalWithdrawn)
        });
      }
    }

    setResult({
      investedLabel: 'Initial Investment',
      invested: Math.round(investment),
      estimatedLabel: 'Total Withdrawn',
      estimated: Math.round(totalWithdrawn),
      totalLabel: 'Final Value',
      total: Math.round(currentBalance),
      data: data
    });
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-navy-800 mb-2">Financial Calculators</h1>
          <p className="text-gray-600">Plan your investments and future goals with precision.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => switchTab('SIP')}
            className={`flex items-center px-6 py-3 rounded-full font-semibold transition ${
              activeTab === 'SIP' ? 'bg-navy-800 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calculator className="w-5 h-5 mr-2" />
            SIP Calculator
          </button>
          <button
            onClick={() => switchTab('LUMPSUM')}
            className={`flex items-center px-6 py-3 rounded-full font-semibold transition ${
              activeTab === 'LUMPSUM' ? 'bg-navy-800 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Coins className="w-5 h-5 mr-2" />
            Lumpsum Calculator
          </button>
          <button
            onClick={() => switchTab('SWP')}
            className={`flex items-center px-6 py-3 rounded-full font-semibold transition ${
              activeTab === 'SWP' ? 'bg-navy-800 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ArrowDownCircle className="w-5 h-5 mr-2" />
            SWP Calculator
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Input Section */}
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-fit">
            <h2 className="text-xl font-bold text-navy-800 mb-6 flex items-center">
              <SettingsIcon activeTab={activeTab} />
              {activeTab === 'SIP' && 'SIP Details'}
              {activeTab === 'LUMPSUM' && 'Lumpsum Details'}
              {activeTab === 'SWP' && 'SWP Details'}
            </h2>
            
            <div className="space-y-6">
              {/* Investment Amount Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {activeTab === 'SIP' ? 'Monthly Investment (₹)' : 'Total Investment (₹)'}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full bg-white pl-8 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-navy-800 focus:outline-none"
                  />
                </div>
                <input 
                  type="range" 
                  min={activeTab === 'SIP' ? "500" : "5000"} 
                  max={activeTab === 'SIP' ? "100000" : "10000000"} 
                  step="500"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full mt-2 accent-navy-800"
                />
              </div>

              {/* Withdrawal Amount (Only for SWP) */}
              {activeTab === 'SWP' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Withdrawal (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={withdrawal}
                      onChange={(e) => setWithdrawal(Number(e.target.value))}
                      className="w-full bg-white pl-8 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-navy-800 focus:outline-none"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="500" max="100000" step="500"
                    value={withdrawal}
                    onChange={(e) => setWithdrawal(Number(e.target.value))}
                    className="w-full mt-2 accent-navy-800"
                  />
                </div>
              )}

              {/* Rate Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Return Rate (p.a %)
                </label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full bg-white p-3 border border-gray-300 rounded focus:ring-2 focus:ring-navy-800 focus:outline-none"
                />
                <input 
                  type="range" 
                  min="5" max="30" step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full mt-2 accent-navy-800"
                />
              </div>

              {/* Years Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Period (Years)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full bg-white p-3 border border-gray-300 rounded focus:ring-2 focus:ring-navy-800 focus:outline-none"
                />
                <input 
                  type="range" 
                  min="1" max="40" step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mt-2 accent-navy-800"
                />
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="lg:w-2/3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm font-medium">{result.investedLabel}</p>
                  <p className="text-2xl font-bold text-navy-800">{formatCurrency(result.invested)}</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-sm font-medium">{result.estimatedLabel}</p>
                  <p className={`text-2xl font-bold ${activeTab === 'SWP' ? 'text-orange-600' : 'text-green-600'}`}>
                    {activeTab === 'SWP' ? '' : '+'}
                    {formatCurrency(result.estimated)}
                  </p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-navy-800 text-sm font-medium">{result.totalLabel}</p>
                  <p className="text-2xl font-bold text-navy-900">{formatCurrency(result.total)}</p>
               </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={result.data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{fontSize: 12}} stroke="#6b7280" />
                    <YAxis tickFormatter={(value) => `₹${value >= 100000 ? (value/100000).toFixed(1) + 'L' : (value/1000) + 'k'}`} tick={{fontSize: 12}} stroke="#6b7280" />
                    <Tooltip 
                        formatter={(value: number) => formatCurrency(value)}
                        contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb', borderRadius: '4px' }}
                    />
                    {activeTab === 'SWP' ? (
                      <>
                        <Area type="monotone" dataKey="Withdrawn" stackId="1" stroke="#f97316" fill="#fdba74" name="Total Withdrawn" />
                        <Area type="monotone" dataKey="Value" stackId="2" stroke="#002060" fill="#002060" name="Remaining Value" />
                      </>
                    ) : (
                      <>
                        <Area type="monotone" dataKey="Invested" stackId="1" stroke="#94a3b8" fill="#cbd5e1" />
                        <Area type="monotone" dataKey="Value" stackId="2" stroke="#002060" fill="#002060" />
                      </>
                    )}
                  </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> These calculations are for illustrative purposes only. 
                {activeTab === 'SIP' && ' SIP returns are subject to market risks.'}
                {activeTab === 'LUMPSUM' && ' Lumpsum investments carry market volatility risks.'}
                {activeTab === 'SWP' && ' In SWP, if withdrawal rate exceeds return rate, capital erosion may occur.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const SettingsIcon = ({ activeTab }: { activeTab: CalcType }) => {
  if (activeTab === 'SIP') return <TrendingUp className="w-6 h-6 mr-2 text-navy-800" />;
  if (activeTab === 'LUMPSUM') return <Coins className="w-6 h-6 mr-2 text-navy-800" />;
  return <ArrowDownCircle className="w-6 h-6 mr-2 text-navy-800" />;
};