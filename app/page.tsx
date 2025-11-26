"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar-old";
import { Filter, Zap, ChevronDown } from "lucide-react";

type DiscoverRow = {
  name: string;
  age: string;
  mcap: string;
  liquidity: string;
  volume: string;
  txns: string;
};

const DISCOVER_DATA: DiscoverRow[] = [
  {
    name: "UP · UP",
    age: "28m",
    mcap: "$148K",
    liquidity: "$39.5K",
    volume: "$181K",
    txns: "1.31K",
  },
  {
    name: "HERO · hometownhero",
    age: "7m",
    mcap: "$24.6K",
    liquidity: "$21.4K",
    volume: "$38.7K",
    txns: "470",
  },
  {
    name: "AIC · Alon is Creator",
    age: "2mo",
    mcap: "$12.2K",
    liquidity: "$15.1K",
    volume: "$36K",
    txns: "316",
  },
];

const timeframes = ["1m", "5m", "30m", "1h"] as const;
type TF = (typeof timeframes)[number];

const DISCOVER_TABS = ["Trending", "Surge", "DEX Screener", "Pump Live"] as const;
type DiscoverTab = (typeof DISCOVER_TABS)[number];

export default function DiscoverPage() {
  const [activeTF, setActiveTF] = useState<TF>("5m");
  const [activeTab, setActiveTab] = useState<DiscoverTab>("Trending");

  return (
    <main className="min-h-screen bg-[#020513]">
      <TopBar />

      <div className="px-4 pb-8 pt-5 lg:px-8">
        {/* Top controls row */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          {/* LEFT: TABS (Trending / Surge / DEX Screener / Pump Live) */}
          <div className="flex items-center gap-6 text-[15px]">
            {DISCOVER_TABS.map((tab) => {
              const isActive = tab === activeTab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={[
                    "relative flex items-center gap-1 pb-0.5 transition-colors",
                    isActive
                      ? "font-semibold text-white"
                      : "font-medium text-[#9ca3af] hover:text-[#e5e7eb]",
                  ].join(" ")}
                >
                  <span>{tab}</span>
                  {tab === "Pump Live" && (
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: Timeframes + Filter */}
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full bg-[#050818] p-1 text-[11px] text-slate-300">
              {timeframes.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTF(t)}
                  className={[
                    "px-3 py-1 rounded-full",
                    t === activeTF
                      ? "bg-white text-black font-medium"
                      : "hover:text-white",
                  ].join(" ")}
                >
                  {t}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-1 rounded-full border border-[#1A2445] bg-[#050818] px-3 py-1.5 text-[12px] text-slate-200">
              <Filter className="h-3.5 w-3.5" />
              Filter
            </button>
          </div>
        </div>

        {/* Quick Buy strip */}
        <div className="mb-4 flex items-center gap-2 rounded-2xl border border-[#15182A] bg-[#050816] px-3 py-2 text-[12px] text-slate-300">
          <span className="text-slate-400">Quick Buy</span>
          <span className="rounded-full bg-[#0B1023] px-3 py-1 text-[12px]">
            0.0
          </span>
          <div className="ml-auto flex items-center gap-2 text-[11px]">
            <Zap className="h-3 w-3 text-amber-400" />
            <span className="text-slate-400">Preset: P1 P2 P3</span>
          </div>
        </div>

        {/* Main table card */}
        <div className="overflow-hidden rounded-2xl border border-[#15182A] bg-[#050816]">
          <div className="border-b border-[#15182A] px-5 py-3 text-[11px] uppercase tracking-wide text-slate-400">
            <div className="grid grid-cols-[3fr,1fr,1fr,1fr,1fr]">
              <span>Pair Info</span>
              <span className="text-right">Market Cap</span>
              <span className="text-right">Liquidity</span>
              <span className="text-right">Volume</span>
              <span className="text-right">Txns</span>
            </div>
          </div>

          <div>
            {DISCOVER_DATA.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[3fr,1fr,1fr,1fr,1fr] items-center border-t border-[#15182A] px-5 py-4 text-sm hover:bg-[#0B1022]"
              >
                {/* Pair info */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-[#111827]" />
                  <div className="flex flex-col">
                    <span className="text-sm">{row.name}</span>
                    <span className="text-[11px] text-emerald-400">
                      +15.9% · {row.age}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div>{row.mcap}</div>
                  <div className="text-[11px] text-emerald-400">+50.0%</div>
                </div>
                <div className="text-right">
                  <div>{row.liquidity}</div>
                </div>
                <div className="text-right">
                  <div>{row.volume}</div>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span>{row.txns}</span>
                  <button className="rounded-full bg-[#4D6BFF] px-4 py-1.5 text-[12px] font-medium">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
