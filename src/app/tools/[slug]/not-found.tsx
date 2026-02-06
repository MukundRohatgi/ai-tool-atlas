import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        Loading tool details…
      </h1>

      <p style={{ marginTop: "12px", fontSize: "18px" }}>
        Please refresh or return to the tools page.
      </p>

      <Link
        href="/tools"
        style={{
          marginTop: "20px",
          display: "inline-block",
          color: "blue",
          textDecoration: "underline",
        }}>
        ← Back to Tools
      </Link>
    </div>
  );
}
