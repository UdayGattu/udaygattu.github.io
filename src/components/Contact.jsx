import { contact } from '../data/contact';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="card text-center">
        <h2 className="heading text-3xl md:text-4xl mb-6">Let’s build something cool together</h2>
        <div className="mb-8 text-xl text-swissfg flex flex-col items-center gap-2 font-medium">
          <span>{contact.email}</span>
          <span>{contact.location}</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-swiss">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-swiss">GitHub</a>
        </div>
      </div>
    </section>
  );
} 