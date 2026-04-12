import { useEffect, useState } from "react";

export default function IntroLoader() {
  const fullText = "Welcome to My Portfolio";
  const [displayText, setDisplayText] = useState("");
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setHide(true);
        }, 1500);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-1000 ${
        hide ? "opacity-0 blur-sm pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="text-7xl max-lg:text-5xl max-sm:text-4xl max-xxs:text-2xl max-xxss:text-1xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
        {displayText}
        <span className="ml-1 animate-pulse">|</span>
      </h1>
    </div>
  );
}

