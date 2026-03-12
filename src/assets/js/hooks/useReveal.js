import { useEffect, useRef, useState } from "react";

export default function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const optionsRef = useRef(options);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, ...optionsRef.current },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
