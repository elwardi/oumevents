export default function Logo() {
  return (
    <span className="logo">
      <svg viewBox="0 0 40 42" aria-hidden="true">
        <path d="M6 40 V21 a14 14 0 0 1 28 0 V40" fill="none" stroke="var(--gold)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M13 40 V22 a7 7 0 0 1 14 0 V40" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.65" strokeLinecap="round" />
      </svg>
      <span className="word">Oum<b>Events</b></span>
    </span>
  );
}
