import { FaRedo } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function RestartQuiz() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div id="restart-quiz">
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        {isMobile ? <FaRedo /> : "Restart"}
      </button>
    </div>
  );
}
