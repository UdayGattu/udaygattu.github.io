import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="card">
        <h2 className="heading text-3xl md:text-4xl mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="subheading mb-4">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {items.map((item) => (
                  <span key={item} className="badge flex items-center gap-2 text-base">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 