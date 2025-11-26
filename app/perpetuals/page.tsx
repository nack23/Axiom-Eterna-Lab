import TopBar from "@/components/TopBar-old";

export default function PerpetualsPage() {
  return (
    <main className="min-h-screen bg-[#020513]">
      <TopBar />

      <div className="flex flex-col gap-3 px-4 pb-8 pt-4 lg:px-8">
        {/* Pair strip */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          <button className="flex items-center gap-2 rounded-full bg-[#050816] px-3 py-1.5 text-sm font-medium">
            <span className="h-6 w-6 rounded-full bg-[#F7931A]" />
            BTC
          </button>
          <span>89,865 +3.28%</span>
          <span className="text-xs text-slate-400">
            Oracle Price · 24h Volume · Open Interest · Funding
          </span>
        </div>

        <div className="grid gap-3 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          {/* Chart area */}
          <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
              <span>BTC-USD on axiom.trade (mock)</span>
              <span>1D · Indicators · Save</span>
            </div>
            <div className="h-[360px] rounded-xl bg-gradient-to-b from-[#111827] to-[#020617]" />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
              <span>Positions · Open Orders · Trades</span>
              <span>No open positions</span>
            </div>
          </div>

          {/* Order book + trading form */}
          <div className="space-y-3">
            <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-3 text-xs">
              <div className="mb-2 flex items-center gap-4 text-slate-300">
                <button className="border-b border-emerald-400 pb-1">
                  Order Book
                </button>
                <button className="text-slate-500">Trades</button>
              </div>
              <div className="h-40 rounded-lg bg-[#0B1022]" />
            </div>

            <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-3 text-xs">
              <div className="mb-2 flex items-center gap-3 text-slate-300">
                <button className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-black">
                  Long
                </button>
                <button className="rounded-full bg-[#111827] px-3 py-1 text-xs text-slate-200">
                  Short
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Buy Amount</span>
                  <span>BTC</span>
                </div>
                <input
                  className="h-9 w-full rounded-lg bg-[#050A1A] px-3 text-xs text-slate-100 outline-none"
                  placeholder="0.0 USDC"
                />
                <div className="mt-3 h-1 rounded-full bg-[#0B1022]" />
                <button className="mt-4 w-full rounded-full bg-emerald-500 py-2 text-[13px] font-semibold text-black">
                  Add More Funds
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
