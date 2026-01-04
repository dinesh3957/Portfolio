export default function Timeline({ title, year, desc }) {
  return (
    <div className="relative pl-8 mb-10 border-l-2 border-gray-200">
      <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></div>
      <h3 className="text-xl font-semibold">
        {title} {year && <span className="text-gray-400 text-sm">({year})</span>}
      </h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
