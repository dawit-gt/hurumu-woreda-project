import { Users, MapPin, Target, Eye } from 'lucide-react';

const STATS = [
  { value: '124,000+', label: 'Total Population' },
  { value: '18', label: 'Kebeles' },
  { value: '847 km²', label: 'Total Area' },
  { value: '47', label: 'Schools' },
  { value: '3', label: 'Health Centers' },
  { value: '6', label: 'Departments' },
];

const KEBELES = [
  'Hurumu Town', 'Alge', 'Boneya', 'Chewaka', 'Didu', 'Geba',
  'Haroo', 'Ilu', 'Karro', 'Mana', 'Nole', 'Sadi',
  'Supe', 'Tibe', 'Wama', 'Yayo', 'Zara', 'Zuria',
];

const LEADERSHIP = [
  { name: 'Ato Diriba Wakjira', role: 'Woreda Administrator' },
  { name: 'W/ro Chaltu Bedada', role: 'Deputy Administrator' },
  { name: 'Ato Gemechu Tadesse', role: 'Head, Agriculture Office' },
  { name: 'Dr. Fatuma Ali', role: 'Head, Health Office' },
  { name: 'Ato Berhanu Girma', role: 'Head, Education Office' },
  { name: 'Ato Tadesse Wolde', role: 'Head, Finance Office' },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">About Us</div>
          <h1 className="text-3xl font-extrabold mb-2">Hurumu Woreda</h1>
          <p className="text-green-200 text-sm">Ilu Aba Bora Zone · Oromia Region · Ethiopia</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map(stat => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-5 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-green-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Overview + Vision/Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={16} className="text-green-700" /> Overview
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Hurumu Woreda is one of the woredas in the Ilu Aba Bora Zone of the Oromia Region in southwestern Ethiopia. The woreda is named after its administrative center, Hurumu town.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The woreda covers an area of approximately 847 km² and is home to over 124,000 residents across 18 kebeles. The area is characterized by highland terrain with significant agricultural potential, particularly for coffee, maize, and livestock production.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Hurumu is well known for its Jimma coffee production and rich natural forests, which are part of the broader Ilu Aba Bora highland ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Target size={16} className="text-green-700" /> Our Mission
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                To deliver efficient, transparent, and citizen-centered public services that improve the quality of life for all residents of Hurumu Woreda through accountable governance and community participation.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Eye size={16} className="text-green-700" /> Our Vision
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                A prosperous, self-reliant, and well-governed Hurumu Woreda where every citizen has access to quality services, economic opportunity, and a healthy environment by 2030.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Users size={16} className="text-green-700" /> Leadership
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LEADERSHIP.map(person => (
              <div key={person.name} className="flex items-center gap-3 p-3 rounded-lg border border-gray-50 bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {person.name.split(' ').slice(-1)[0][0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kebeles */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <MapPin size={16} className="text-green-700" /> 18 Kebeles of Hurumu Woreda
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {KEBELES.map((kebele, i) => (
              <div key={kebele} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-center">
                <div className="text-xs font-bold text-green-800">#{i + 1}</div>
                <div className="text-xs text-gray-700 mt-0.5">{kebele}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}