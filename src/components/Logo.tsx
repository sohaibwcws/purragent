export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-dark to-teal shadow-[0_0_20px_rgba(20,184,166,0.25),inset_0_1px_1px_rgba(255,255,255,0.1)]"
      style={{ width: size, height: size }}
    >
      {/* Glowing border ring */}
      <div
        className="absolute inset-0 rounded-2xl border border-teal-light/40 shadow-[0_0_12px_rgba(45,212,191,0.3)]"
      />
      {/* Inner subtle gradient overlay */}
      <div className="absolute inset-[1px] rounded-[14px] bg-gradient-to-b from-white/10 to-transparent" />
      {/* Letter */}
      <span
        className="relative font-bold text-black drop-shadow-sm"
        style={{ fontSize: size * 0.48 }}
      >
        P
      </span>
    </div>
  );
}
