import TopBar from "@/components/TopBar-old";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#020513]">
      <TopBar />

      <div className="px-4 pb-10 pt-6 lg:px-8">
        <h1 className="mb-3 text-lg font-semibold text-slate-100">Wallets</h1>

        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
          <input
            className="h-8 min-w-[220px] flex-1 rounded-full bg-[#050A1A] px-3 text-xs text-slate-100 outline-none placeholder:text-slate-500"
            placeholder="Search by name or address"
          />
          <button className="rounded-full bg-[#050816] px-3 py-1.5">
            Show Archived
          </button>
          <button className="rounded-full bg-[#050816] px-3 py-1.5">
            Import
          </button>
          <button className="rounded-full bg-[#050816] px-3 py-1.5">
            Enable Vanish
          </button>
          <button className="rounded-full bg-[#4D6BFF] px-3 py-1.5 font-medium">
            Create Wallet
          </button>
        </div>

        <div className="rounded-2xl border border-[#15182A] bg-[#050816] text-sm">
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr] border-b border-[#15182A] px-4 py-2 text-[11px] uppercase tracking-wide text-slate-400">
            <span>Wallet</span>
            <span>Balance</span>
            <span>Holdings</span>
            <span>Actions</span>
          </div>
          <div className="h-64 px-4 py-6 text-center text-xs text-slate-500">
            Drag wallets to distribute SOL (mock layout).
          </div>
        </div>
      </div>
    </main>
  );
}
