const common = {
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function Icon({ name, size = 22 }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", ...common };

  switch (name) {
    case "palette":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3c5 0 9 3.6 9 8.1 0 2.3-1.4 3.9-3.5 3.9H16c-1 0-1.7.9-1.4 1.8.2.5.3.8.3 1.2 0 1.6-1.6 3-3.9 3C6 21 3 17.7 3 13c0-5.5 4-10 9-10Z" />
          <path d="M7.5 12.2h0" />
          <path d="M10.2 9.5h0" />
          <path d="M13.6 8.8h0" />
          <path d="M16.6 11h0" />
          <path d="M7.5 12.2a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" fill="currentColor" stroke="none"/>
          <path d="M10.2 9.5a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" fill="currentColor" stroke="none"/>
          <path d="M13.6 8.8a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" fill="currentColor" stroke="none"/>
          <path d="M16.6 11a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" fill="currentColor" stroke="none"/>
        </svg>
      );
    case "bolt":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 12l9 5 9-5" />
          <path d="M3 16l9 5 9-5" />
        </svg>
      );
    case "beads":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M8.5 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M17 12a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 17 12Z" />
          <path d="M9.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        </svg>
      );
    case "hex":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M7 3 3 7v10l4 4h10l4-4V7l-4-4Z" />
          <path d="M12 7 8.5 9v6L12 17l3.5-2V9Z" />
        </svg>
      );
    case "flask":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M10 2v5l-4.6 7.4A4 4 0 0 0 8.8 20h6.4a4 4 0 0 0 3.4-5.6L14 7V2" />
          <path d="M8 12h8" />
        </svg>
      );
    case "signal":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M4 18v2" />
          <path d="M8 14v6" />
          <path d="M12 10v10" />
          <path d="M16 6v14" />
          <path d="M20 3v17" />
        </svg>
      );
    case "ship":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M20 15c-2 2-4 3-8 3s-6-1-8-3" />
          <path d="M4 13V9l8-4 8 4v4" />
          <path d="M6 9v4" />
          <path d="M18 9v4" />
          <path d="M12 5v8" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M5 12h12" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 2l1.4 5.2L18 9l-4.6 1.8L12 16l-1.4-5.2L6 9l4.6-1.8Z" />
          <path d="M4 15l.7 2.6L7 18.5l-2.3.9L4 22l-.7-2.6L1 18.5l2.3-.9Z" />
        </svg>
      );
    default:
      return null;
  }
}
