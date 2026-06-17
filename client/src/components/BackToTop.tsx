import { useEffect, useState } from "react";

export default function BackToTop({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full z-50 transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-cyan-500/50"
              : "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-cyan-500/50"
          }`}
          aria-label="Voltar ao topo da página"
          title="Voltar ao topo"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
