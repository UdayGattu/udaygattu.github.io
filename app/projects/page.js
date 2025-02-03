// app/projects/page.js
export default function Projects() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-primary">Projects & Research</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Travel Agent Chatbot</h3>
          <p className="mt-2 text-gray-700">
            <strong>Tech Stack:</strong> Fast API, LangChain, Transformers, GPT, MySQL, PyTorch, NLP-SQL.
          </p>
          <p className="mt-2 text-gray-700">
            Developed a chatbot to handle real-time inquiries, increasing booking conversions by 25% and integrating MLOps principles for scalable deployment.
          </p>
          <a
            href="https://github.com/yourusername/travel-agent-chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            View Project on GitHub
          </a>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Text-to-Video Generation Pipeline</h3>
          <p className="mt-2 text-gray-700">
            <strong>Tech Stack:</strong> Fast API, LangChain, Transformers, RAG, OpenAI API, TensorFlow, PyTorch, Runway AI.
          </p>
          <p className="mt-2 text-gray-700">
            Built an innovative pipeline to convert textual descriptions into dynamic video content, improving accuracy by 30% and reducing generation time by 25%.
          </p>
          <a
            href="https://github.com/yourusername/text-to-video"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            View Project on GitHub
          </a>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Script2Skin: Generating Medical Images</h3>
          <p className="mt-2 text-gray-700">
            <strong>Tech Stack:</strong> Stable Diffusion, Hugging Face, CLIP, GCP, Transformers, U-Net, PyTorch.
          </p>
          <p className="mt-2 text-gray-700">
            Developed an AI model to generate high-quality dermatological images from textual inputs, thereby improving diagnostic dataset quality.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Cloud-Native Application</h3>
          <p className="mt-2 text-gray-700">
            <strong>Tech Stack:</strong> JavaScript, GCP, Terraform, Packer, MySQL.
          </p>
          <p className="mt-2 text-gray-700">
            Created a cloud-native application with automated VM deployments, achieving a 50% reduction in deployment times and maintaining 99.9% uptime.
          </p>
          <a
            href="https://github.com/yourusername/cloud-native-app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            View Project on GitHub
          </a>
        </div>
      </div>
    );
  }
  