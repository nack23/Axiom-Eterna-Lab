// components/TokenTable.tsx
const mockData = [
  { name: "SOL / USDC", chain: "Solana", volume: "$1.2M" },
  { name: "BTC / USDT", chain: "Bitcoin", volume: "$950k" },
];

export default function TokenTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#15182A] bg-[#050816]">
      <table className="w-full text-sm text-slate-200">
        <thead className="bg-[#070B1C] text-xs uppercase text-slate-400">
          <tr>
            <th className="px-4 py-3 text-left">Pair</th>
            <th className="px-4 py-3 text-left">Chain</th>
            <th className="px-4 py-3 text-right">Volume 24h</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row) => (
            <tr
              key={row.name}
              className="border-t border-[#15182A] hover:bg-[#0B1022]"
            >
              <td className="px-4 py-3">{row.name}</td>
              <td className="px-4 py-3">{row.chain}</td>
              <td className="px-4 py-3 text-right">{row.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
