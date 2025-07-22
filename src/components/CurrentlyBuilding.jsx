import { currentProjects } from '../data/projects';

export default function CurrentlyBuilding() {
  return (
    <section className="section" id="currently-building">
      <div className="card">
        <h2 className="heading text-3xl md:text-4xl mb-8">Currently Building Enterprise Projects</h2>
        <div className="flex flex-col gap-8">
          {currentProjects.map((proj, i) => (
            <div
              key={proj.title}
              className="w-full bg-white border border-blue-300 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:shadow-2xl transition"
            >
              {/* No image rendering */}
              <div className="font-bold text-xl mb-2 text-blue-800 text-center">{proj.title}</div>
              {proj.paragraph ? (
                <div className="flex flex-col gap-4 mb-3 w-full">
                  {proj.description.map((d, idx) => (
                    <p key={idx} className="text-gray-700 text-base leading-relaxed text-left">{d}</p>
                  ))}
                </div>
              ) : (
                <ul className="text-gray-700 mb-3 text-left text-base list-disc list-inside w-full pl-4 md:pl-2" style={{maxWidth: '100%', margin: '0 auto'}}>
                  {Array.isArray(proj.description)
                    ? proj.description.map((d, idx) => (
                        <li key={idx} className="mb-1 leading-relaxed" style={{textIndent: '-1.25em', paddingLeft: '1.25em'}}>{d}</li>
                      ))
                    : <li>{proj.description}</li>}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {proj.stack && proj.stack.map((t) => (
                  <span key={t} className="badge text-xs bg-blue-50 border-blue-300 text-blue-800">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 