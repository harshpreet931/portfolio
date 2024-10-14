import { useEffect, useState } from 'react';

export default function SocialLinks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

return (
    <>
    <div className={`absolute bottom-0 inset-x-0 text-white space-x-6 flex justify-center mb-14 ${isVisible ? 'animate-fadeInUp' : ''}`}>
        <h1>Connect with me!</h1>
    </div>
    <div className={`absolute bottom-0 inset-x-0 text-white space-x-6 flex justify-center mb-4 ${isVisible ? 'animate-fadeInUp' : ''}`}>
        <a href="https://github.com/harshpreet931" className="text-2xl" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/harshpreet931/" className="text-2xl" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://medium.com/@harshpreet0402" className="text-2xl" aria-label="Medium" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium"></i>
        </a>
                <a href="mailto:harshpreet393.be22@chitkara.edu.in" className="text-2xl" aria-label="Email">
            <i className="fas fa-envelope"></i>
        </a>
    </div>
    </>
);
}
