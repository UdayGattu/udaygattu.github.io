import { about } from '../data/about';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="card flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src={about.photo}
          alt="Profile"
          className="w-40 h-40 rounded-2xl object-cover shadow-lg mb-6 md:mb-0"
        />
        <div className="flex-1 text-left">
          <h2 className="heading text-3xl md:text-4xl mb-6">About Me</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">{about.summary}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {about.highlights.map((tech) => (
              <span key={tech} className="badge text-base">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 