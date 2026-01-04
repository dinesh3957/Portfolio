export default function InfoCard({ title, items }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
