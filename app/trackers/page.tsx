import TopBar from "@/components/TopBar-old";

export default function TrackersPage() {
  return (
    <main className="min-h-screen bg-[#020513]">
      <TopBar />

      <div className="flex gap-4 px-4 pb-8 pt-5 lg:px-8">
        <section className="flex-1 rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-sm">
          <div className="mb-3 flex items-center gap-3">
            <button className="rounded-full bg-[#0B1023] px-3 py-1.5 text-xs text-slate-100">
              Wallet Manager
            </button>
            <button className="text-xs text-slate-400">Live Trades</button>
            <button className="text-xs text-slate-400">Monitor</button>
          </div>

          <div className="flex items-center gap-3 border-b border-[#15182A] pb-3">
            <input
              className="h-8 flex-1 rounded-full bg-[#050A1A] px-3 text-xs text-slate-100 outline-none placeholder:text-slate-500"
              placeholder="Search by name or addr..."
            />
            <button className="rounded-full bg-[#0B1023] px-3 py-1.5 text-xs">
              Import
            </button>
            <button className="rounded-full bg-[#0B1023] px-3 py-1.5 text-xs">
              Export
            </button>
            <button className="rounded-full bg-[#4D6BFF] px-3 py-1.5 text-xs font-medium">
              Add Wallet
            </button>
          </div>

          <div className="flex h-[420px] items-center justify-center text-xs text-slate-500">
            No wallets added yet.
          </div>
        </section>

        <aside className="hidden w-80 rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-sm text-slate-300 lg:block">
          <h3 className="mb-2 text-xs font-semibold text-slate-200">
            Customize Feed / Twitter Alerts
          </h3>
          <p className="text-xs">
            Right side panel placeholder – in real app this shows Twitter /
            alert settings.
          </p>
        </aside>
      </div>
    </main>
  );
}
