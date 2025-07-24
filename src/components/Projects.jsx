import { projects } from '../data/projects';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 370; // match card width
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section" id="projects">
      <div className="card relative">
        <h2 className="heading text-3xl md:text-4xl mb-8">Projects</h2>
        {/* Scroll Buttons */}
        <button
          aria-label="Scroll left"
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 border border-gray-200 transition"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          aria-label="Scroll right"
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10 border border-gray-200 transition"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-col md:flex-row gap-8 md:gap-6 overflow-x-auto md:overflow-x-auto md:scrollbar-thin md:scrollbar-thumb-gray-300 md:scrollbar-track-gray-100 snap-x md:snap-x md:pb-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className="min-w-0 md:min-w-[370px] max-w-full md:max-w-[370px] flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition snap-center"
            >
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="rounded-lg w-full h-32 object-cover mb-4 border border-gray-200 shadow-md"
                />
              )}
              <div className="font-bold text-xl mb-1 text-gray-900 text-center">{proj.title}</div>
              {proj.subtitle && (
                <div className="text-sm text-gray-500 mb-2 text-center">{proj.subtitle}</div>
              )}
              <ul className="text-gray-700 mb-3 text-left text-base list-disc list-inside w-full pl-4 md:pl-2" style={{maxWidth: '100%', margin: '0 auto'}}>
                {Array.isArray(proj.description)
                  ? proj.description.map((d, idx) => (
                      <li key={idx} className="mb-1 leading-relaxed" style={{textIndent: '-1.25em', paddingLeft: '1.25em'}}>{d}</li>
                    ))
                  : <li>{proj.description}</li>}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {proj.stack && proj.stack.map((t) => (
                  <span key={t} className="badge text-xs">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {proj.github && proj.github !== '' && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-apple text-xs">GitHub</a>
                )}
                {proj.demo && proj.demo !== '' && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-apple text-xs">Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 