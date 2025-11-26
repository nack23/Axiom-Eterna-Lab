"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar-old";
import { Filter, Zap } from "lucide-react";

const TABS = ["New Pairs", "Final Stretch", "Migrated"] as const;
type Tab = (typeof TABS)[number];

type TokenRow = {
  pair: string;
  chain: string;
  age: string;
  mcap: string;
  liquidity: string;
  volume: string;
  txns: number;
  buys: number;
  sells: number;
};

const MOCK_DATA: TokenRow[] = [
  {
    pair: "SOL / MEME",
    chain: "Solana",
    age: "3m",
    mcap: "$420K",
    liquidity: "$120K",
    volume: "$310K",
    txns: 982,
    buys: 641,
    sells: 341,
  },
  {
    pair: "PUMP / USDC",
    chain: "Solana",
    age: "12m",
    mcap: "$1.1M",
    liquidity: "$260K",
    volume: "$870K",
    txns: 2410,
    buys: 1492,
    sells: 918,
  },
  {
    pair: "DOG / SOL",
    chain: "Solana",
    age: "27m",
    mcap: "$230K",
    liquidity: "$80K",
    volume: "$190K",
    txns: 621,
    buys: 381,
    sells: 240,
  },
];

export default function PulsePage() {
  const [activeTab, setActiveTab] = useState<Tab>("New Pairs");

  return (
    <main className="min-h-screen bg-[#020513] text-white">
      <TopBar />

      <div className="flex gap-4 px-4 pb-8 pt-5 lg:px-8">
        {/* LEFT MAIN AREA */}
        <section className="flex-1 space-y-4">
          <TabsBar activeTab={activeTab} onChange={setActiveTab} />
          <FiltersBar />
          <TokenTable data={MOCK_DATA} />
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden w-80 flex-col gap-4 lg:flex">
          <RightSidebar />
        </aside>
      </div>
    </main>
  );
}

interface TabsBarProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

function TabsBar({ activeTab, onChange }: TabsBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="inline-flex items-center gap-1 rounded-full bg-[#050818] p-1">
        {TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              className={[
                "rounded-full px-4 py-1.5 text-[13px] transition",
                isActive
                  ? "bg-white text-black shadow"
                  : "text-slate-400 hover:text-slate-100",
              ].join(" ")}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 text-[12px] text-slate-300">
        <span className="hidden items-center gap-2 rounded-full border border-[#1A2445] bg-[#050818] px-3 py-1.5 md:inline-flex">
          <Zap className="h-3 w-3 text-amber-400" />
          <span>Quick Buy Amount</span>
          <span className="rounded-full bg-[#0B1023] px-2 py-0.5 text-[11px] text-slate-200">
            0.25&nbsp;SOL
          </span>
        </span>
        <button className="inline-flex items-center gap-1 rounded-full border border-[#1A2445] bg-[#050818] px-3 py-1.5 text-[12px]">
          <Filter className="h-3.5 w-3.5 text-slate-300" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}

function FiltersBar() {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[#15182A] bg-[#050818] px-3 py-2 text-[11px] text-slate-300">
      <span className="mr-1 text-slate-400">Quick filters:</span>
      <Chip>Age &lt; 30m</Chip>
      <Chip>MCAP &lt; $1M</Chip>
      <Chip>Liquidity &gt; $50K</Chip>
      <Chip>Holders &gt; 100</Chip>
      <button className="ml-auto text-[11px] text-slate-400 underline underline-offset-2">
        Open advanced filters
      </button>
    </div>
  );
}

interface ChipProps {
  children: React.ReactNode;
}

function Chip({ children }: ChipProps) {
  return (
    <button className="rounded-full border border-[#1E2848] bg-[#070C1D] px-3 py-1 text-[11px] text-slate-200 hover:border-slate-500">
      {children}
    </button>
  );
}

interface TokenTableProps {
  data: TokenRow[];
}

function TokenTable({ data }: TokenTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#15182A] bg-[#050816]">
      {/* Header strip */}
      <div className="flex items-center justify-between border-b border-[#15182A] px-4 py-3 text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
            LIVE
          </span>
          <span>Auto-refresh every 5s (mock)</span>
        </div>
        <button className="text-[11px] text-slate-400 underline underline-offset-2">
          Reset columns
        </button>
      </div>

      {/* Table */}
      <div className="max-h-[520px] overflow-auto">
        <table className="w-full border-collapse text-[13px] text-slate-100">
          <thead className="sticky top-0 z-10 bg-[#070B1C] text-[11px] uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">Pair</th>
              <th className="px-4 py-3 text-left">Chain</th>
              <th className="px-4 py-3 text-left">Age</th>
              <th className="px-4 py-3 text-right">Market Cap</th>
              <th className="px-4 py-3 text-right">Liquidity</th>
              <th className="px-4 py-3 text-right">Volume 24h</th>
              <th className="px-4 py-3 text-right">Txns</th>
              <th className="px-4 py-3 text-right">Buys</th>
              <th className="px-4 py-3 text-right">Sells</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.pair}
                className="border-t border-[#15182A] bg-[#050816] hover:bg-[#0B1022]"
              >
                <td className="px-4 py-2.5">
                  <div className="flex flex-col">
                    <span>{row.pair}</span>
                    <span className="text-[11px] text-slate-400">
                      {row.mcap} · {row.liquidity}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2.5 text-slate-300">{row.chain}</td>
                <td className="px-4 py-2.5 text-slate-300">{row.age}</td>
                <td className="px-4 py-2.5 text-right text-slate-200">
                  {row.mcap}
                </td>
                <td className="px-4 py-2.5 text-right text-slate-200">
                  {row.liquidity}
                </td>
                <td className="px-4 py-2.5 text-right text-slate-200">
                  {row.volume}
                </td>
                <td className="px-4 py-2.5 text-right text-slate-300">
                  {row.txns.toLocaleString()}
                </td>
                <td className="px-4 py-2.5 text-right text-emerald-400">
                  {row.buys.toLocaleString()}
                </td>
                <td className="px-4 py-2.5 text-right text-rose-400">
                  {row.sells.toLocaleString()}
                </td>
                <td className="px-4 py-2.5 text-right">
                  <button className="inline-flex items-center gap-1 rounded-full bg-[#4D6BFF] px-3 py-1 text-[11px] font-medium text-white hover:bg-[#3b55e3]">
                    <Zap className="h-3 w-3" />
                    <span>Quick Buy</span>
                  </button>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className="px-4 py-10 text-center text-[13px] text-slate-400"
                >
                  No tokens match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-[13px]">
        <h3 className="mb-3 text-[12px] font-semibold text-slate-200">
          Quick Buy Amount
        </h3>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-[#0B1023] px-3 py-1.5 text-[12px] text-slate-100">
            0.1 SOL
          </button>
          <button className="rounded-full bg-[#0B1023] px-3 py-1.5 text-[12px] text-slate-100">
            0.25 SOL
          </button>
          <button className="rounded-full bg-[#0B1023] px-3 py-1.5 text-[12px] text-slate-100">
            0.5 SOL
          </button>
        </div>
        <p className="mt-3 text-[11px] text-slate-400">
          These controls are UI-only in this clone. In the real app they&apos;d
          be connected to wallet + trading backend.
        </p>
      </div>

      <div className="rounded-2xl border border-[#15182A] bg-[#050816] p-4 text-[12px] text-slate-300">
        <h3 className="mb-3 text-[12px] font-semibold text-slate-200">
          Pulse Overview
        </h3>
        <ul className="space-y-1.5 text-[12px]">
          <li>• Track newly created pairs in real time</li>
          <li>• Filter by age, liquidity, volume and more</li>
          <li>• One-click quick buy from the table</li>
        </ul>
      </div>
    </div>
  );
}
