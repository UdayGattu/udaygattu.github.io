// app/skills/page.js
export default function Skills() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-primary">Skills & Technologies</h2>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Programming & Frameworks</h3>
          <p className="mt-2 text-gray-700">
            Python (PyTorch, TensorFlow, Hugging Face Transformers, Scikit-learn), SQL, JavaScript, CSS, Flask, FastAPI, Django
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Machine Learning & AI Concepts</h3>
          <p className="mt-2 text-gray-700">
            Large Language Models (LLMs), Fine-tuning, Transformers, BERT, GPT, GANs, Reinforcement Learning, Prompt Engineering, LangChain, RAG
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Cloud & DevOps</h3>
          <p className="mt-2 text-gray-700">
            AWS, GCP, Azure, Amazon SageMaker, Vertex AI, Git, Azure DevOps
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Certifications</h3>
          <p className="mt-2 text-gray-700">
            AWS Academy Cloud Practitioner, Azure Fundamentals, Azure Developer, EDX CS50
          </p>
        </div>
      </div>
    );
  }
  