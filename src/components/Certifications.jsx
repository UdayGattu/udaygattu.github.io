import { certifications, publications } from '../data/certifications';
import { useState } from 'react';

export default function Certifications() {
  const [hoveredPub, setHoveredPub] = useState(null);
  return (
    <section className="section" id="certifications">
      <div className="card">
        <h2 className="heading text-3xl md:text-4xl mb-8">Certifications & Publications</h2>
        <div className="flex flex-wrap gap-6 mb-8 justify-center">
          {certifications.map((c, idx) => (
            <div
              key={c.name}
              className={`flex flex-col items-center px-5 py-4 rounded-2xl shadow-md border transition-all duration-200 bg-white min-w-[180px] max-w-[220px] text-center
                ${c.highlight === 'main' ? 'border-4 border-blue-700 bg-blue-50' : c.highlight ? 'border-2 border-blue-400 bg-blue-50' : 'border-gray-200'}
              `}
            >
              <img src={c.logo} alt={c.issuer} className="w-12 h-12 object-contain mb-2" />
              <div className={`font-bold text-base mb-1 ${c.highlight ? 'text-blue-700' : 'text-gray-900'}`}>{c.name}</div>
              <div className="text-xs text-gray-500 mb-1">{c.issuer}</div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden relative group border border-gray-200 shadow-md transition-all"
              onMouseEnter={() => setHoveredPub(idx)}
              onMouseLeave={() => setHoveredPub(null)}
              style={{ minHeight: 180 }}
            >
              {pub.image && (
                <div
                  className="absolute inset-0 w-full h-full z-0 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${pub.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: hoveredPub === idx ? 0.25 : 0,
                  }}
                />
              )}
              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div>
                  <div className="font-bold text-lg mb-1 text-gray-900 group-hover:text-blue-700 transition">{pub.title}</div>
                  <div className="text-gray-700 text-base mb-2">{pub.description}</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{pub.publisher} · {pub.date}</span>
                  <span className="text-xs text-blue-700 underline ml-2">Show publication</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 