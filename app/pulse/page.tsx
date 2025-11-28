"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar-old";
import {
  ChevronDown,
  List,
  BookmarkX,
  Volume2,
  Wallet2,
  Box,
  Settings,
  Zap,
  SlidersHorizontal,
  Hand,
  Search,
  Users,
  Trophy,
  Crown,
  Leaf,
  PenTool,
  ChefHat,
  Crosshair,
} from "lucide-react";

/* ===========================================================
   TYPES + CONSTANTS
=========================================================== */

type PulseColumnKey = "newPairs" | "finalStretch" | "migrated";

type PulseColumn = {
  key: PulseColumnKey;
  title: string;
};

const COLUMNS: PulseColumn[] = [
  { key: "newPairs", title: "New Pairs" },
  { key: "finalStretch", title: "Final Stretch" },
  { key: "migrated", title: "Migrated" },
];

type TokenRow = {
  id: string;
  name: string;
  symbol: string;
  age: string;
  mc: string; // V value
  volume: string; // MC value
  tx: number;
  crown: string;
  addr: string;
  change: string;
  avatarColor: string;
  price: number;
};

type LiveTokenRow = TokenRow & {
  direction: "up" | "down" | "none";
};

/* ========= YAHAN 10 MOCK TOKENS HAIN ========= */
const MOCK_TOKENS: TokenRow[] = [
  {
    id: "1",
    name: "Joobi",
    symbol: "Joobi",
    age: "53m",
    mc: "$318",
    volume: "$5.57K",
    tx: 6,
    crown: "0/11",
    addr: "0xf9...4444",
    change: "2%",
    avatarColor: "from-[#38bdf8] to-[#0ea5e9]",
    price: 0.00001,
  },
  {
    id: "2",
    name: "LAM",
    symbol: "Look At Mirror",
    age: "8m",
    mc: "$2K",
    volume: "$5.38K",
    tx: 15,
    crown: "0/2",
    addr: "0x6d...4444",
    change: "0%",
    avatarColor: "from-[#22c55e] to-[#16a34a]",
    price: 0.00002,
  },
  {
    id: "3",
    name: "BENJI",
    symbol: "Benji",
    age: "6m",
    mc: "$3K",
    volume: "$5.14K",
    tx: 2,
    crown: "2/352",
    addr: "0x76...4444",
    change: "4%",
    avatarColor: "from-[#fb923c] to-[#ea580c]",
    price: 0.00007,
  },
  {
    id: "4",
    name: "TIEN",
    symbol: "Tien Shinhan",
    age: "10m",
    mc: "$1K",
    volume: "$5.15K",
    tx: 5,
    crown: "1/159",
    addr: "0x0d...4444",
    change: "10%",
    avatarColor: "from-[#22c55e] to-[#16a34a]",
    price: 0.00029,
  },
  {
    id: "5",
    name: "RXD",
    symbol: "RXD",
    age: "6h",
    mc: "$12K",
    volume: "$44.4K",
    tx: 48,
    crown: "0/1",
    addr: "0x83...4444",
    change: "71%",
    avatarColor: "from-[#38bdf8] to-[#1d4ed8]",
    price: 0.00000,
  },
  {
    id: "6",
    name: "YAP",
    symbol: "Yap2Earn",
    age: "6h",
    mc: "$123K",
    volume: "$30.6K",
    tx: 1295,
    crown: "0/1",
    addr: "0x02...4444",
    change: "31%",
    avatarColor: "from-[#22c55e] to-[#15803d]",
    price: 0.00019,
  },
  {
    id: "7",
    name: "BNBGIVING",
    symbol: "BNBGIVING",
    age: "2m",
    mc: "$1K",
    volume: "$5.77K",
    tx: 4,
    crown: "8/921",
    addr: "0xe2...4444",
    change: "8%",
    avatarColor: "from-[#f97316] to-[#ea580c]",
    price: 0.00031,
  },
  {
    id: "8",
    name: "BNBElivers",
    symbol: "BNBElivers",
    age: "2m",
    mc: "$5K",
    volume: "$6.01K",
    tx: 4,
    crown: "3/265",
    addr: "0x78...4444",
    change: "13%",
    avatarColor: "from-[#22c55e] to-[#16a34a]",
    price: 0.00021,
  },
  {
    id: "9",
    name: "THANKSGIVING",
    symbol: "Thanksgiving",
    age: "2m",
    mc: "$2K",
    volume: "$5.15K",
    tx: 6,
    crown: "7/429",
    addr: "0x6c...4444",
    change: "15%",
    avatarColor: "from-[#38bdf8] to-[#0ea5e9]",
    price: 0.00018,
  },
  {
    id: "10",
    name: "Sarah",
    symbol: "Justice for Sarah",
    age: "24s",
    mc: "$443",
    volume: "$6K",
    tx: 3,
    crown: "0/2",
    addr: "0xa1...4444",
    change: "7%",
    avatarColor: "from-[#f97316] to-[#ec4899]",
    price: 0.00003,
  },
];

/* ===========================================================
   PAGE
=========================================================== */

export default function PulsePage() {
  const [activeMobileColumn, setActiveMobileColumn] =
    useState<PulseColumnKey>("newPairs");

  const activeColumn = COLUMNS.find(
    (c) => c.key === activeMobileColumn
  ) as PulseColumn;

  return (
    <main className="min-h-screen bg-[#020513] text-slate-100">
      <TopBar />

      <div className="px-4 pb-8 pt-4 lg:px-8">
        {/* ========= DESKTOP PAGE HEADER ========= */}
        <div className="mb-4 hidden items-center justify-between md:flex">
          <div className="flex items-center gap-4">
            <h1 className="text-[20px] font-semibold leading-none tracking-tight">
              Pulse
            </h1>

            <div className="flex flex-col gap-[2px]">
              <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-[#43e5ff] via-[#a855ff] to-[#ff7b54]" />
              <span className="h-[3px] w-5 rounded-full bg-gradient-to-r from-[#43e5ff] via-[#a855ff] to-[#ff7b54] opacity-90" />
              <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-[#43e5ff] via-[#a855ff] to-[#ff7b54] opacity-80" />
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050816] ring-1 ring-[#101320]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#141824]">
                <Box className="h-3.5 w-3.5 text-[#ffc842]" />
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-[13px]">
            <button className="flex h-9 items-center gap-2 rounded-full border border-[#282c3f] bg-[#101320] px-4 hover:bg-[#171b2b]">
              <List className="h-4 w-4 text-slate-200" />
              Display
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            <button className="flex h-8 w-8 items-center justify-center">
              <BookmarkX className="h-4 w-4 text-slate-200" />
            </button>

            <button className="flex h-8 w-8 items-center justify-center">
              <Volume2 className="h-4 w-4 text-slate-200" />
            </button>

            <button className="flex h-9 items-center gap-3 rounded-full border border-[#282c3f] bg-[#050816] px-4 hover:bg-[#0b1020]">
              <span className="flex h-5 w-5 items-center justify-center rounded-md border border-[#9ca3af40] bg-[#050816]">
                <Wallet2 className="h-3.5 w-3.5 text-slate-100" />
              </span>

              <div className="flex items-center gap-2">
                <span>1</span>
                <span className="h-4 w-px bg-[#343948]" />
                <span className="flex items-center gap-1">
                  <Box className="h-3.5 w-3.5 text-[#ffc842]" />
                  0
                </span>
              </div>

              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* ========= MOBILE TAB HEADER ========= */}
        <div className="mb-3 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-[1px]">
              <span className="h-[3px] w-5 rounded-full bg-gradient-to-r from-[#43e5ff] via-[#a855ff] to-[#ff7b54]" />
              <span className="h-[3px] w-4 rounded-full bg-gradient-to-r from-[#43e5ff] via-[#a855ff] to-[#ff7b54] opacity-80" />
              <span className="h-[3px] w-5 rounded-full bg-gradient-to-r from-[#43e5ff] via-[#a855ff] to-[#ff7b54] opacity-60" />
            </div>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#050816] ring-1 ring-[#101320]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#141824]">
                <Box className="h-3 w-3 text-[#ffc842]" />
              </span>
            </button>
          </div>

          <div className="no-scrollbar flex flex-1 items-center overflow-x-auto px-2 text-[12px]">
            <div className="flex items-center gap-2">
              {COLUMNS.map((col) => (
                <button
                  key={col.key}
                  onClick={() => setActiveMobileColumn(col.key)}
                  className={[
                    "whitespace-nowrap rounded-full px-3 py-1",
                    activeMobileColumn === col.key
                      ? "bg-[#3b3f4e] font-semibold text-white"
                      : "text-slate-300 hover:text-white",
                  ].join(" ")}
                >
                  {col.title}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full bg-[#101320] px-3 py-1 text-[12px]">
              P1
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050816]">
              <Settings className="h-3.5 w-3.5 text-slate-200" />
            </button>
          </div>
        </div>

        {/* ========= DESKTOP 3 COLUMN LAYOUT ========= */}
        <section className="hidden md:grid md:grid-cols-3 md:rounded-2xl md:border md:border-[#15182A] md:bg-[#050816]">
          {COLUMNS.map((col, index) => (
            <PulseColumnCard
              key={col.key}
              title={col.title}
              position={
                index === 0
                  ? "left"
                  : index === COLUMNS.length - 1
                  ? "right"
                  : "middle"
              }
            />
          ))}
        </section>

        {/* ========= MOBILE SINGLE COLUMN ========= */}
        <div className="md:hidden">
          <PulseColumnCard title={activeColumn.title} position="single" />
        </div>
      </div>
    </main>
  );
}

/* ===========================================================
   COLUMN CARD
=========================================================== */

type ColumnPosition = "left" | "middle" | "right" | "single";

function PulseColumnCard({
  title,
  position = "middle",
}: {
  title: string;
  position?: ColumnPosition;
}) {
  const [preset, setPreset] = useState<"P1" | "P2" | "P3">("P1");
  const isLoading = false;

  const [rows, setRows] = useState<LiveTokenRow[]>(() =>
    MOCK_TOKENS.map((t) => ({ ...t, direction: "none" }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRows((prev) =>
        prev.map((row) => {
          const delta = (Math.random() * 2 - 1) * 1.5;
          const newPrice =
            row.price === 0
              ? 0
              : Math.max(0, row.price * (1 + delta / 100));
          let dir: "up" | "down" | "none" = "none";
          if (newPrice > row.price) dir = "up";
          else if (newPrice < row.price) dir = "down";
          return { ...row, price: newPrice, direction: dir };
        })
      );
    }, 1800);

    return () => clearInterval(id);
  }, []);

  const shapeClasses =
    position === "single"
      ? "rounded-2xl border border-[#15182A]"
      : position === "left"
      ? "md:rounded-l-2xl md:rounded-r-none md:border-r md:border-[#15182A]"
      : position === "right"
      ? "md:rounded-r-2xl md:rounded-l-none md:border-l md:border-[#15182A]"
      : "md:rounded-none md:border-x md:border-[#15182A]";

  return (
    <article
      className={[
        "flex h-[72vh] flex-col overflow-hidden bg-[#050816]",
        position === "single" ? "" : "border-0",
        shapeClasses,
      ].join(" ")}
    >
      <header className="hidden items-center justify-between border-b border-[#15182A] px-4 py-3 md:flex">
        <h2 className="text-[15px] font-semibold">{title}</h2>

        <div className="flex items-center gap-2 text-[11px] text-slate-300">
          <div className="flex h-9 items-stretch rounded-full border border-[#262938] bg-[#050816] px-4 hover:bg-[#090f20]">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-slate-300" />
              <span className="text-[11px] text-slate-100">0</span>
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#141824]">
                <Box className="h-3.5 w-3.5 text-[#ffc842]" />
              </span>
            </div>
            <span className="mx-4 h-full w-px self-stretch bg-[#262938]" />
            <div className="flex items-center gap-4 pr-1">
              {(["P1", "P2", "P3"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPreset(p)}
                  className={
                    preset === p
                      ? "text-[#2962ff] text-[13px] font-semibold"
                      : "text-slate-300 text-[13px] hover:text-white"
                  }
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#262938] bg-[#050816] hover:bg-[#090f20]">
            <SlidersHorizontal className="h-3.5 w-3.5 text-slate-200" />
          </button>
        </div>
      </header>

      <div className="no-scrollbar flex-1 overflow-y-auto bg-[#040712]">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <PulseRowSkeleton key={i} />
            ))
          : rows.map((t) => <TokenRowView key={t.id} token={t} />)}
      </div>
    </article>
  );
}

/* ===========================================================
   ROW VIEW – name line + V/MC on right above TX
=========================================================== */
function TokenRowView({ token }: { token: LiveTokenRow }) {
  const direction = token.direction;

  return (
    <div className="border-b border-[#15182A] px-4 py-3 hover:bg-[#070c1f] transition-colors">
      <div className="flex items-start w-full">
        {/* LEFT SIDE */}
        <div className="flex flex-1 min-w-0 gap-3">
          {/* avatar */}
          <div className="relative flex-shrink-0">
            <div className="rounded-[16px] border-[3px] border-emerald-500/80 p-[4px]">
              <div
                className={`h-[70px] w-[70px] rounded-[12px] bg-gradient-to-br ${token.avatarColor}`}
              />
            </div>

            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </span>
          </div>

          {/* TEXT AREA */}
          <div className="flex flex-col min-w-0 w-full">
            {/* 1) NAME + FULL SYMBOL + DOC (LEFT) */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[18px] font-semibold tracking-tight truncate max-w-[140px]">
                  {token.name}
                </span>

                <span className="text-[14px] text-slate-300 truncate">
                  {token.symbol}
                </span>

                <span className="h-4 w-3 rounded-[2px] border border-slate-500/70" />
              </div>

              <div className="flex-shrink-0" />
            </div>

            {/* 2) AGE + ICON ROW (leaf, pen, hand, search, users, trophy, crown) */}
            <div className="mt-1 flex items-center gap-[10px] text-[12px] text-slate-200 h-[22px]">
              <span className="text-emerald-400 text-[14px] font-semibold">
                {token.age}
              </span>

              <Leaf className="h-[14px] w-[14px] text-emerald-400" />
              <PenTool className="h-[14px] w-[14px] text-emerald-400" />
              <Hand className="h-[14px] w-[14px] text-slate-200" />
              <Search className="h-[14px] w-[14px] text-slate-200" />

              <span className="flex items-center gap-[3px]">
                <Users className="h-[14px] w-[14px] text-slate-300" />
                <span className="text-[11px] text-slate-100">3</span>
              </span>

              <span className="flex items-center gap-[3px]">
                <Trophy className="h-[14px] w-[14px] text-slate-300" />
                <span className="text-[11px] text-slate-100">0</span>
              </span>

              <span className="flex items-center gap-[3px]">
                <Crown className="h-[14px] w-[14px] text-slate-300" />
                <span className="text-[11px] text-slate-100">
                  {token.crown}
                </span>
              </span>
            </div>

            {/* 3) TAGS (pills) – Axiom-style */}
            <div className="mt-2 flex items-center gap-1 text-[10px]">
              {/* left pill: user + % */}
              <div className="flex items-center gap-1 rounded-full border border-emerald-500/40 bg-[#040f0a] px-2 py-[3px]">
                <Users className="h-[12px] w-[12px] text-emerald-400" />
                <span className="text-[11px] text-emerald-400">2%</span>
              </div>

              {/* middle pill: chef hat + DS (blue) */}
              <div className="flex items-center gap-2 rounded-full border border-[#020887] bg-[#020817] px-2 py-[3px]">
                <ChefHat className="h-[12px] w-[12px] text-[#6366f1]" />
                <span className="text-[11px] font-semibold text-[#6366f1]">
                  DS
                </span>
              </div>

              {/* right pill: target + % */}
              <div className="flex items-center gap-1 rounded-full border border-emerald-500/40 bg-[#040f0a] px-2 py-[3px]">
                <Crosshair className="h-[12px] w-[12px] text-emerald-400" />
                <span className="text-[11px] text-emerald-400">0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end w-[250px] flex-shrink-0">
          {/* 1) V + MC ROW (JUST ABOVE TX) */}
          <div className="flex items-baseline justify-end gap-4 w-full text-[12px] mb-1">
            <span className="text-slate-400">
              V{" "}
              <span className="text-[15px] font-semibold text-white">
                {token.mc}
              </span>
            </span>
            <span className="text-slate-400">
              MC{" "}
              <span className="text-[15px] font-semibold text-sky-400">
                {token.volume}
              </span>
            </span>
          </div>

          {/* 2) TX + 2-part BAR */}
          <div className="flex items-center gap-2 w-full justify-end text-[12px]">
            <span>TX {token.tx}</span>

            <div className="flex h-[4px] w-[70px] overflow-hidden rounded-full">
              <div className="h-full w-[60%] bg-emerald-400" />
              <div className="h-full w-[40%] bg-rose-500" />
            </div>
          </div>

          {/* 3) SIMPLE BNB RECTANGLE */}
          <div className="mt-2 flex h-[55px] w-[180px] items-center justify-center rounded-[4px] bg-[#4f6bff] text-white">
            <span className="mr-2 text-[16px]">⚡</span>
            <span className="text-[14px] font-semibold">
              {token.price.toFixed(5)} BNB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===========================================================
   SKELETON ROW – sizes match
=========================================================== */

function PulseRowSkeleton() {
  return (
    <div className="border-b border-[#15182A] px-4 py-3">
      <div className="flex items-center w-full gap-4">
        <div className="flex flex-1 min-w-0 gap-3">
          <div className="h-[84px] w-[84px] animate-pulse rounded-[16px] bg-[#111827]" />
          <div className="min-w-0 flex flex-col gap-3">
            <div className="h-5 w-56 animate-pulse rounded bg-[#111827]" />
            <div className="h-4 w-40 animate-pulse rounded bg-[#111827]" />
            <div className="h-3 w-48 animate-pulse rounded bg-[#111827]" />
            <div className="h-3 w-40 animate-pulse rounded bg-[#111827]" />
          </div>
        </div>

        <div className="flex-shrink-0 w-[220px] flex flex-col items-end gap-2">
          <div className="h-3 w-[90px] animate-pulse rounded bg-[#111827]" />
          <div className="h-[64px] w-full animate-pulse rounded-[12px] bg-[#111827]" />
        </div>
      </div>
    </div>
  );
}
