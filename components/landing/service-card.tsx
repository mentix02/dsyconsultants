import { ReactNode } from "react";

export default function ServiceCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-white/10 p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-md border border-white/15 p-2">{icon}</span>
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      <p className="text-sm text-white/60">{desc}</p>
    </div>
  );
}
