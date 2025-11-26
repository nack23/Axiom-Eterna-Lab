"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronDown,
  Star,
  Bell,
  User,
  LineChart,
  Wallet2,
  CircleDollarSign,
  Menu,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Discover", href: "/" },
  { label: "Pulse", href: "/pulse" },
  { label: "Trackers", href: "/trackers" },
  { label: "Perpetuals", href: "/perpetuals" },
  { label: "Yield", href: "/yield" },
  { label: "Vision", href: "/vision" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Rewards", href: "/rewards" },
] as const;

const TopBar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#020713] text-xs text-slate-200">
      {/* ===== DESKTOP HEADER (md and up) ===== */}
      <div className="hidden h-16 items-center justify-between border-b border-[#15182A] px-4 lg:px-8 md:flex">
        {/* Left: Logo + Nav */}
        <div className="flex min-w-0 flex-1 items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-gradient-to-b from-slate-100 to-slate-400">
              <div className="h-3 w-3 -translate-y-[1px] rotate-45 bg-[#020713]" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              AXIOM <span className="text-slate-400">Pro</span>
            </span>
          </Link>

          {/* Scrollable nav links */}
          <div className="hidden min-w-0 flex-1 md:block">
            <nav className="no-scrollbar flex items-center gap-7 overflow-x-auto text-[14px]">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "whitespace-nowrap font-medium transition-colors duration-150",
                      isActive
                        ? "text-[#4D6BFF]"
                        : "text-[#b4b8c2] hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right: Search + Network + Actions */}
        <div className="ml-4 flex shrink-0 items-center gap-3">
          {/* Search (desktop only) */}
          <div className="hidden w-64 items-center gap-2 rounded-full border border-[#1A1F3A] bg-[#050A1A] px-3 py-1.5 lg:flex">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by token or CA…"
              className="w-full bg-transparent text-[13px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
            <span className="rounded-full bg-[#090E20] px-1.5 py-0.5 text-[10px] text-slate-500">
              /
            </span>
          </div>

          {/* Network pill */}
          <button className="flex items-center gap-1 rounded-full border border-[#243055] bg-[#050A1A] px-3 py-1.5 text-[13px]">
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#243055]">
              <LineChart className="h-3 w-3" />
            </span>
            <span>SOL</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>

          {/* Deposit button */}
          <button className="rounded-full bg-[#4D6BFF] px-4 py-1.5 text-[13px] font-medium text-white shadow-md hover:bg-[#3c57e6]">
            Deposit
          </button>

          {/* Star + Bell */}
          <button className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb1f] bg-[#050816] hover:bg-[#0b1020] md:flex">
            <Star className="h-4 w-4 text-slate-200" />
          </button>
          <button className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb1f] bg-[#050816] hover:bg-[#0b1020] md:flex">
            <Bell className="h-4 w-4 text-slate-200" />
          </button>

          {/* Wallet pill – icon + SOL 0 + USDC 0 + chevron */}
          <button
            className="
              hidden md:flex items-center gap-2
              rounded-full px-3 py-1.5
              bg-[#050A1A]
              border border-[#1A1F3A]
              transition-colors
              hover:bg-[#0A0F24]
            "
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10172A]">
              <Wallet2 className="h-3.5 w-3.5 text-slate-200" />
            </span>

            <span className="flex items-center gap-1 text-[11px] text-slate-200">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-[#42d3ff] via-[#ab5cff] to-[#ff8d4c]" />
              <span>0</span>
            </span>

            <span className="h-4 w-px bg-[#1f2937]" />

            <span className="flex items-center gap-1 text-[11px] text-slate-200">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0f172a]">
                <CircleDollarSign className="h-3 w-3 text-sky-400" />
              </span>
              <span>0</span>
            </span>

            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>

          {/* Profile circle – last */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 to-slate-300 text-[11px] font-semibold text-[#020713]">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ===== MOBILE HEADER (Axiom Pro Style) ===== */}
      <div className="w-full border-b border-[#15182A] bg-[#020713] md:hidden">
        {/* TOP ROW: wallet + paste CA + search + menu */}
        <div className="flex h-14 items-center justify-between px-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-gradient-to-b from-slate-100 to-slate-400">
              <div className="h-2.5 w-2.5 -translate-y-[1px] rotate-45 bg-[#020713]" />
            </div>
          </Link>

          {/* Middle controls */}
          <div className="flex items-center gap-2">
            {/* Wallet pill */}
            <button className="flex items-center gap-1 rounded-full border border-[#1A1F3A] bg-[#050A1A] px-3 py-1.5 text-[11px]">
              <Wallet2 className="h-4 w-4 text-slate-200" />
              <span>0</span>
            </button>

            {/* Paste CA */}
            <button className="flex items-center gap-1 rounded-full border border-[#1A1F3A] bg-[#050A1A] px-3 py-1.5 text-[11px]">
              <span className="text-slate-200">Paste CA</span>
            </button>

            {/* Search */}
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#050816]">
              <Search className="h-4 w-4 text-slate-200" />
            </button>

            {/* Menu */}
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#050816]">
              <Menu className="h-4 w-4 text-slate-200" />
            </button>
          </div>
        </div>

        {/* SECOND NAV ROW: Trending / DEX / Surge / Pump Live / 5m / P1 / P2 / P3 / settings */}
        <div className="no-scrollbar overflow-x-auto py-2 px-2">
          <div className="flex items-center gap-4 whitespace-nowrap text-[13px]">
            {/* SOL + Trending */}
            <div className="flex items-center gap-1">
              <span className="flex h-4 w-4 rounded-full bg-gradient-to-r from-[#42d3ff] via-[#ab5cff] to-[#ff8d4c]" />
              <span className="font-semibold text-white">Trending</span>
            </div>

            <span className="text-slate-400">DEX</span>
            <span className="text-slate-400">Surge</span>
            <span className="text-slate-400">Pump Live</span>

            {/* Timeframe pill */}
            <button className="rounded-full border border-[#243055] bg-[#0A0F24] px-3 py-1 text-[12px] font-medium text-[#4D6BFF]">
              5m
            </button>

            <span className="text-slate-400">P1</span>
            <span className="text-slate-400">P2</span>
            <span className="text-slate-400">P3</span>

            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A0F24]">
              <Settings className="h-3.5 w-3.5 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
