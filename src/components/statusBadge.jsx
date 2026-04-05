export default function StatusBadge({ status, color }) {
  return <span className={`p-status p-status-${color}`}>{status}</span>;
}
