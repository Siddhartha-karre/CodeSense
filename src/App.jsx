import AppFooter from "./components/AppFooter";
import CodeInputPanel from "./components/CodeInputPanel";
import ExplanationPanel from "./components/ExplanationPanel";
import Header from "./components/Header";
import useCodeEditor from "./hooks/useCodeEditor";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { toggleTheme, isDark } = useTheme();
  const {
    code,
    setCode,
    language,
    setLanguage,
    mode,
    setMode,
    modeConfig,
    explanation,
    loading,
    error,
    handleExplain,
    handleClear,
  } = useCodeEditor();

  return (
    <div className="flex h-screen flex-col">
      <Header
        mode={mode}
        onModeChange={setMode}
        language={language}
        onLanguageChange={setLanguage}
        isDark={isDark}
        onThemeToggle={toggleTheme}
        onExplain={handleExplain}
        loading={loading}
        canExplain={Boolean(code.trim())}
      />

      <main className="grid flex-1 grid-cols-2 overflow-hidden">
        <CodeInputPanel code={code} onCodeChange={setCode} onClear={handleClear} />
        <ExplanationPanel
          modeConfig={modeConfig}
          explanation={explanation}
          loading={loading}
          error={error}
        />
      </main>

      <AppFooter modeLabel={modeConfig.label} language={language} />
    </div>
  );
}
