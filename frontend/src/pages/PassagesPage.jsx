import { useState } from "react";
import Slider from "../components/Slider";
import TextInput from "../components/TextInput";
import GenerateButton from "../components/GenerateButton";
import TextBox from "../components/TextBox";

function PassagesPage() {
  const [difficulty, setDifficulty] = useState(3);
  const [length, setLength] = useState(200);
  const [topic, setTopic] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  function fetchPassage() {
    setLoading(true);
    fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ difficulty, length, topic }),
    })
      .then((res) => res.json())
      .then((data) => {
        setGeneratedText(data.passage);
        setShowOverlay(true);  // Show overlay
      })
      .catch((err) => console.error("Error fetching passage:", err))
      .finally(() => setLoading(false));
  }

  return (
    <div className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Chinese Passage Generator
      </h1>

      <Slider label="Difficulty (HSK)" min={1} max={6} value={difficulty} setValue={setDifficulty} />
      <Slider label="Length (Characters)" min={100} max={500} step={50} value={length} setValue={setLength} />
      <TextInput label="Topic" value={topic} setValue={setTopic} />
      <GenerateButton onClick={fetchPassage} loading={loading} />
      
      {/* Optional fallback if overlay is not shown */}
      {showOverlay && (
        <div className="absolute inset-0 z-50 bg-white p-8 flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={() => setShowOverlay(false)}
              className="text-2xl font-bold text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-auto text-2xl leading-relaxed mt-4 border border-gray-300 rounded p-6 bg-gray-50">
            {generatedText}
          </div>
        </div>
      )}
    </div>
    );
}

export default PassagesPage;
