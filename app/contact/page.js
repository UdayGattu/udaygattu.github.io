// app/contact/page.js
export default function Contact() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-primary">Contact Me</h2>
        <p className="mb-4 text-gray-700">
          I'm always open to discussing opportunities and collaborations. Feel free to reach out!
        </p>
        <ul className="text-gray-700">
          <li className="mb-2"><strong>Email:</strong> udaygattu9949@gmail.com</li>
          <li className="mb-2"><strong>Phone:</strong> (617) 971-7892</li>
          <li className="mb-2">
            <strong>LinkedIn:</strong> 
            <a 
              href="https://www.linkedin.com/in/udayshankargattu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/udayshankargattu/
            </a>
          </li>
          <li className="mb-2">
            <strong>GitHub:</strong> 
            <a 
              href="https://github.com/UdayGattu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/UdayGattu
            </a>
          </li>
        </ul>
      </div>
    );
  }
  