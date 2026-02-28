import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useAOS(options = {}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      ...options,
    });

    AOS.refresh();
  }, [options]);
}