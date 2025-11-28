"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronDown,
  Star,
  Bell,
  User,
  Wallet2,
  Globe2,
  Box,
  Menu,
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
      {/* ================= DESKTOP NAV (>= md) ================= */}
      <div className="hidden h-[64px] items-center justify-between border-b border-[#15182A] px-4 lg:px-8 md:flex">
        {/* LEFT: logo + nav links */}
        <div className="flex min-w-0 flex-1 items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-gradient-to-b from-slate-100 to-slate-400">
              <div className="h-3 w-3 -translate-y-[1px] rotate-45 bg-[#020713]" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              AXIOM <span className="text-slate-400">Pro</span>
            </span>
          </Link>

          {/* Nav links – scrollable if overflow */}
          <nav className="no-scrollbar flex min-w-0 flex-1 items-center gap-7 overflow-x-auto text-[14px]">
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
                    "whitespace-nowrap transition-colors duration-150",
                    isActive
                      ? "font-semibold text-[#2962ff]"
                      : "font-medium text-[#d4d7e3] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RIGHT: search + network + actions */}
        <div className="ml-4 flex shrink-0 items-center gap-3">
          {/* Search */}
          <div className="hidden w-72 items-center gap-2 rounded-full border border-[#151827] bg-[#050914] px-3 py-1.5 lg:flex">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by token or CA…"
              className="w-full bg-transparent text-[13px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
            <span className="rounded-full bg-[#050914] px-1.5 py-0.5 text-[10px] text-slate-500">
              /
            </span>
          </div>

          {/* Network pill (BNB + cube) */}
          <button className="flex items-center gap-2 rounded-full border border-[#ffd54f40] bg-[#050914] px-4 py-1.5 text-[13px] hover:bg-[#0b0f20]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#161927]">
              <Box className="h-3.5 w-3.5 text-[#ffd54f]" />
            </span>
            <span className="font-semibold text-[#fdd835]">BNB</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>

          {/* Deposit */}
          <button className="rounded-full bg-[#4D6BFF] px-5 py-1.5 text-[13px] font-semibold text-white shadow-md hover:bg-[#3851e3]">
            Deposit
          </button>

          {/* Star + Bell */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050914] hover:bg-[#0b0f20]">
            <Star className="h-4 w-4 text-slate-100" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050914] hover:bg-[#0b0f20]">
            <Bell className="h-4 w-4 text-slate-100" />
          </button>

          {/* Wallet summary pill (desktop) */}
          <button className="flex items-center gap-3 rounded-full bg-[#050914] px-4 py-1.5 text-[12px] hover:bg-[#0b0f20]">
            {/* Wallet icon square */}
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#9ca3af40] bg-[#050914]">
              <Wallet2 className="h-3.5 w-3.5 text-slate-100" />
            </span>

            {/* 0 BNB + 0 (blue icon) */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <Box className="h-3.5 w-3.5 text-[#ffd54f]" />
                <span className="text-[13px] text-slate-100">0</span>
              </span>

              <span className="h-4 w-px bg-[#2f3545]" />

              <span className="flex items-center gap-1">
                <Globe2 className="h-3.5 w-3.5 text-sky-400" />
                <span className="text-[13px] text-slate-100">0</span>
              </span>
            </div>

            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>

          {/* Profile circle */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 to-slate-200 text-[#020713]">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV (< md) ================= */}
      <div className="flex h-14 items-center justify-between border-b border-[#15182A] px-3 md:hidden">
        {/* Left: tiny logo triangle */}
        <Link href="/" className="flex items-center">
          <div className="h-[10px] w-[10px] border-l-[7px] border-b-[10px] border-l-transparent border-b-slate-100" />
        </Link>

        {/* Center: wallet pill + Paste CA */}
        <div className="flex flex-1 items-center justify-center gap-2">
          {/* Wallet pill (icon + 0 / 0) */}
          <button className="flex items-center gap-2 rounded-full bg-[#050914] px-3 py-1.5 text-[11px]">
            <span className="flex h-5 w-5 items-center justify-center rounded-md border border-[#9ca3af40] bg-[#050914]">
              <Wallet2 className="h-3.5 w-3.5 text-slate-100" />
            </span>
            <span className="flex items-center gap-1">
              <Box className="h-3.5 w-3.5 text-[#ffd54f]" />
              <span>0</span>
            </span>
            <span className="h-3.5 w-px bg-[#2f3545]" />
            <span className="flex items-center gap-1">
              <Globe2 className="h-3.5 w-3.5 text-sky-400" />
              <span>0</span>
            </span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>

          {/* Paste CA pill */}
          <button className="flex items-center gap-2 rounded-full bg-[#050914] px-3 py-1.5 text-[11px]">
            <span className="flex h-4 w-4 items-center justify-center rounded-[3px] border border-[#9ca3af40]" />
            <span>Paste CA</span>
          </button>
        </div>

        {/* Right: search + menu */}
        <div className="flex items-center gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050914]">
            <Search className="h-4 w-4 text-slate-100" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050914]">
            <Menu className="h-4 w-4 text-slate-100" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
