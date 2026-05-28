export default function TokenCounter({ code }) {
  const estimate = Math.ceil(code.length / 4);
  return (
    <span className="font-mono text-[0.7rem] text-app-muted">~{estimate} tokens</span>
  );
}
