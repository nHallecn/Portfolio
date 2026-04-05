export default function Tag({ label, color = "default" }) {
  return <span className={`tag tag-${color}`}>{label}</span>;
}