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

