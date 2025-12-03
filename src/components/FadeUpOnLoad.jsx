import { useEffect, useState } from "react";
import '../App.css';

export default function FadeUpOnLoad({ children, delay = 0, className = '' }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`fade-up ${show ? 'show' : ''} ${className}`}>
      {children}
    </div>
  );
}
