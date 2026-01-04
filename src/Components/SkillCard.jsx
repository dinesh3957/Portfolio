export default function SkillCard({ title, skills }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-blue-500 text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
