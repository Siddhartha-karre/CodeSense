import { useEffect } from "react";

export default function useAutoScroll(ref, content) {
  useEffect(() => {
    if (ref.current && content) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [content, ref]);
}
