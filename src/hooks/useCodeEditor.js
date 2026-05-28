import { useState } from "react";
import { MODES, PLACEHOLDER_CODE } from "../constants";
import useCodeExplainer from "./useCodeExplainer";

export default function useCodeEditor() {
  const [code, setCode] = useState(PLACEHOLDER_CODE);
  const [language, setLanguage] = useState("JavaScript");
  const [mode, setMode] = useState("simple");
  const { explanation, loading, error, explainCode, reset } = useCodeExplainer();

  const handleExplain = () => {
    reset();
    explainCode(code, language, MODES[mode].prompt);
  };

  const handleClear = () => {
    setCode("");
    reset();
  };

  return {
    code,
    setCode,
    language,
    setLanguage,
    mode,
    setMode,
    modeConfig: MODES[mode],
    explanation,
    loading,
    error,
    handleExplain,
    handleClear,
  };
}
