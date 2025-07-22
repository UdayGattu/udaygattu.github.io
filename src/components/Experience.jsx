import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="card">
        <h2 className="heading text-3xl md:text-4xl mb-8">Experience</h2>
        <div className="flex flex-col gap-14 max-h-[600px] overflow-y-auto pr-2 md:pr-0">
          {experience.map((job, i) => (
            <div
              key={job.company + (job.title || '')}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-start py-4 border-b last:border-b-0 border-gray-100"
            >
              {/* Company logo and name (large, top-aligned) */}
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-24 h-24 rounded-2xl object-contain border border-gray-200 shadow-lg bg-white mb-2"
                  style={{ aspectRatio: '1/1' }}
                />
                <div className="text-2xl font-extrabold text-gray-900 text-center md:text-left leading-tight mt-2 mb-1">
                  {job.company}
                </div>
                <div className="text-base text-gray-500 text-center md:text-left mb-2">{job.location}</div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {/* Grouped roles for Northeastern (now summarized) */}
                {job.roles ? (
                  <ul className="mb-2 space-y-1 list-disc list-outside pl-5">
                    {job.bullets.map((b, idx2) => (
                      <li key={idx2} className="text-gray-700 text-base">{b}</li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-1">
                      <span className="text-lg font-bold text-gray-800">{job.title}</span>
                      <span className="text-base font-semibold text-gray-600">{job.duration}</span>
                    </div>
                    <ul className="mb-2 space-y-1 list-disc list-outside pl-5">
                      {job.bullets.map((b, idx2) => (
                        <li key={idx2} className="text-gray-700 text-base">{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 