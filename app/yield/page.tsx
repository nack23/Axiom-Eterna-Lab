import TopBar from "@/components/TopBar-old";

export default function YieldPage() {
  return (
    <main className="min-h-screen bg-[#020513]">
      <TopBar />
      <div className="flex flex-col gap-6 px-4 pb-10 pt-8 lg:px-8">
        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-[#15182A] bg-[#050816] p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-4xl font-semibold leading-tight text-slate-200">
                Earn Passive
                <br />
                Income
              </p>
              <p className="text-3xl font-semibold text-emerald-400">
                3.35% <span className="text-xl text-violet-400">APY</span>
              </p>
              <p className="text-sm text-slate-300">
                Easily swap your SOL for USDC and earn yield on your earnings!
                This is a static clone – in the real app this card connects to a
                yield strategy.
              </p>
              <button className="rounded-full bg-[#4D6BFF] px-5 py-2 text-sm font-medium">
                Enable Yield
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-56 w-56 rounded-full bg-gradient-to-tr from-[#22c55e] via-[#4f46e5] to-[#a855f7] opacity-80" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-sm text-slate-300">
          <p className="font-medium text-emerald-400">
            Solana Yield coming soon
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Native SOL staking through JITO is coming soon… (placeholder text).
          </p>
        </div>
      </div>
    </main>
  );
}
