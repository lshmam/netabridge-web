const tickerItems = [
  { label: "EU Electronics", value: "", change: "↑ 4.2%", up: true },
  { label: "Copper (LME)", value: "$8,450/t", change: "↑ 1.3%", up: true },
  { label: "Active Tenders", value: "2,847 this week", change: "", up: true },
  { label: "Semiconductors", value: "", change: "↓ 0.8%", up: false },
  { label: "Companies Verified", value: "12,400+", change: "", up: true },
  { label: "Steel (HRC)", value: "$620/t", change: "↑ 2.1%", up: true },
  { label: "APAC Trade Vol", value: "", change: "↑ 6.7%", up: true },
  { label: "New Registrations", value: "340 today", change: "", up: true },
];

function TickerItem({
  label,
  value,
  change,
  up,
}: (typeof tickerItems)[number]) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-nb-text3 whitespace-nowrap">
      <span className="text-nb-text2">{label}</span>
      {value && <span>{value}</span>}
      {change && (
        <span className={up ? "text-nb-green" : "text-nb-red"}>{change}</span>
      )}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-nb-border bg-nb-bg2 py-3.5">
      <div
        className="flex gap-12 w-max"
        style={{ animation: "ticker-scroll 30s linear infinite" }}
      >
        {/* Render items twice for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
