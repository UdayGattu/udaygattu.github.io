import { education } from '../data/education';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="card">
        <h2 className="heading text-3xl md:text-4xl mb-8">Education</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-stretch">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-6 shadow-lg min-w-[260px] max-w-[340px] flex-1"
            >
              <img
                src={edu.image}
                alt={edu.school}
                className="w-20 h-20 object-contain rounded-xl mb-4 border border-gray-100 bg-gray-50 shadow"
              />
              <div className="font-bold text-lg text-gray-900 text-center mb-1">{edu.school}</div>
              <div className="text-sm text-gray-500 text-center mb-2">{edu.location}</div>
              <div className="font-semibold text-base text-gray-800 text-center mb-1">{edu.degree}</div>
              <div className="text-xs text-gray-500 text-center">{edu.dates}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 