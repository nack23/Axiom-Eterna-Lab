import TopBar from "@/components/TopBar-old";

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-[#020513]">
      <TopBar />

      <div className="px-4 pb-10 pt-6 lg:px-8">
        <h1 className="mb-6 text-lg font-semibold text-slate-100">Rewards</h1>

        <div className="mb-6 rounded-3xl border border-[#15182A] bg-[#050816] p-8 text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-amber-400" />
          <p className="text-xl font-semibold text-slate-100">1X Rewards</p>
          <p className="mt-1 text-sm text-slate-400">
            30% Referral Rate · 0 friends referred (mock)
          </p>
          <div className="mt-6 h-1 rounded-full bg-[#111827]">
            <div className="h-full w-1/4 rounded-full bg-[#4D6BFF]" />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Next Level: 2X rewards rate for Points and SOL.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm">
            <button className="rounded-full bg-[#050816] px-4 py-1.5 text-xs text-slate-200">
              Edit Referral
            </button>
            <button className="rounded-full bg-[#4D6BFF] px-4 py-1.5 text-xs font-medium">
              Share Referral
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-xs text-slate-300">
            <p className="mb-2 text-sm font-semibold text-slate-100">
              Claim
            </p>
            <p>0 Points · 0 SOL earned (static)</p>
          </div>
          <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-xs text-slate-300">
            <p className="mb-2 text-sm font-semibold text-slate-100">
              Quests
            </p>
            <p>Complete trades to unlock more rewards.</p>
          </div>
          <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-xs text-slate-300">
            <p className="mb-2 text-sm font-semibold text-slate-100">
              Points Breakdown
            </p>
            <p>Placeholder card for detailed breakdown.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
