const paths = {
  "chevron-left": "m15 18-6-6 6-6",
  "chevron-right": "m9 18 6-6-6-6",
  "chevron-down": "m6 9 6 6 6-6",
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "check-circle": "M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14l-3-3",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5-1L7 22l5-2 5 2-1.5-8",
  "map-marker-alt": "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z",
  times: "M18 6 6 18M6 6l12 12",
  whatsapp: "M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l6-1.6A11.8 11.8 0 1 0 20.5 3.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9 9 0 1 1 12 21Zm5-6.7c-.3-.2-1.7-.9-2-.9s-.5-.2-.7.2-.8.9-1 1.1-.4.2-.7.1a7.5 7.5 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6s0-.4 0-.6-.7-1.6-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4a11 11 0 0 0 4.2 3.7c.6.3 1.1.5 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4s-.3-.2-.6-.4Z",
  "arrow-right": "M5 12h14m-7-7 7 7-7 7",
  check: "m5 12 4 4L19 6",
  search: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.3-4.3",
  filter: "M4 5h16M7 12h10m-7 7h4",
  "arrow-up": "M12 19V5m-7 7 7-7 7 7",
  star: "m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z",
  briefcase: "M3 7h18v13H3zM8 7V4h8v3M3 12h18m-11 0v2h4v-2",
  certificate: "M12 3 15 5l3.6.3.3 3.6L21 12l-2.1 3.1-.3 3.6L15 19l-3 2-3-2-3.6-.3-.3-3.6L3 12l2.1-3.1.3-3.6L9 5l3-2Zm-3 9 2 2 4-4",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7.8a4 4 0 0 1 0 7.6M22 21v-2a4 4 0 0 0-3-3.9",
  "mug-hot": "M4 8h13v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm13 2h2a3 3 0 0 1 0 6h-2M8 4c-2-2 2-2 0-4m5 4c-2-2 2-2 0-4",
  handshake: "m2 12 4-4 4 1 2-2 4 1 6 5-4 5-4-2-3 2-4-3-3 2-4-5Zm4-4 3-3 4 2 3-1 4 3",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-1.5h.01",
  "linkedin-in": "M5 9v10M5 5v.01M9 19v-6a4 4 0 0 1 8 0v6m-8-6v6",
  youtube: "M22 12s0-4-1-5-3-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 3 1 9 1 8 0 9-1 1-5 1-5Zm-13-3 7 3-7 3V9Z",
  tiktok: "M14 3v11a4 4 0 1 1-4-4m4-7c1 3 3 5 6 5",
};
const filled = new Set(["star", "whatsapp"]);
export default function Icon({ name, className = "", ...props }) {
  const key = String(name || "").replace(/^fa-/, "");
  const d = paths[key] || paths["check"];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={filled.has(key) ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={key === "whatsapp" ? "1" : "1.8"}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${/\b(?:h|w)-/.test(className) ? "" : "h-4 w-4"} ${className}`}
      focusable="false"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}
