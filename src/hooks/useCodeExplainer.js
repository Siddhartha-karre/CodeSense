import { useState, useRef } from "react";

export default function useCodeExplainer() {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const readerRef = useRef(null);

  const explainCode = async (code, language, prompt) => {
    if (!code.trim()) return;

    // Cancel any ongoing stream
    if (readerRef.current) {
      await readerRef.current.cancel();
    }

    setLoading(true);
    setError(null);
    setExplanation("");

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 1024,
          stream: true,
          messages: [
            {
              role: "system",
              content: prompt,
            },
            {
              role: "user",
              content: `Language: ${language}\n\nCode:\n\`\`\`${language.toLowerCase()}\n${code}\n\`\`\``,
            },
          ],
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || "API request failed");
      }

      const reader = response.body.getReader();
      readerRef.current = reader;
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

        for (const line of lines) {
          const data = line.replace("data: ", "");
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            const text = parsed.choices?.[0]?.delta?.content || "";
            if (text) setExplanation((prev) => prev + text);
          } catch {
            // skip malformed SSE chunks
          }
        }
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong. Check your API key.");
      }
    } finally {
      setLoading(false);
      readerRef.current = null;
    }
  };

  const reset = () => {
    setExplanation("");
    setError(null);
  };

  return { explanation, loading, error, explainCode, reset };
}