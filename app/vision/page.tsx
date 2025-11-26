import TopBar from "@/components/TopBar-old";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#020513]">
      <TopBar />
      <div className="px-4 pb-10 pt-6 lg:px-8">
        <h1 className="mb-4 text-lg font-semibold text-slate-100">KOL</h1>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <button className="rounded-full bg-[#0B1023] px-3 py-1.5 text-xs">
              Sort by PnL SOL
            </button>
            <button className="rounded-full bg-[#050816] px-3 py-1.5 text-xs text-slate-300">
              Global
            </button>
            <button className="rounded-full bg-[#050816] px-3 py-1.5 text-xs text-slate-300">
              Your Wallets
            </button>
            <button className="rounded-full bg-[#050816] px-3 py-1.5 text-xs text-slate-300">
              Tracked
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {["Jijo", "Loopierr", "Cented"].map((name, idx) => (
              <div
                key={name}
                className="relative rounded-3xl border border-[#1a1f3a] bg-gradient-to-br from-[#020617] via-[#020617] to-[#0b1120] p-4"
              >
                <span className="absolute left-4 top-3 text-xs text-slate-500">
                  {idx + 1}
                </span>
                <div className="flex items-center gap-3 pl-5">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-100">
                      {name}
                    </p>
                    <p className="text-xs text-slate-400">70.21% PnL</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div>
                    <p className="text-slate-400">Positions</p>
                    <p>282</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Trades</p>
                    <p>1.1K</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Volume</p>
                    <p>2.09K · $287K</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Avg. Hold Time</p>
                    <p>22m</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
