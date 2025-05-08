import { useState, useRef, useEffect } from "react";
import Slider from "../components/Slider";
import TextInput from "../components/TextInput";
import GenerateButton from "../components/GenerateButton";

function PassagesPage() {
  const [difficulty, setDifficulty] = useState(3);
  const [length, setLength] = useState(200);
  const [topic, setTopic] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [readingStarted, setReadingStarted] = useState(false);
  const [readingFinished, setReadingFinished] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  const TOPICS = [
    "my pet rabbit",
    "Sichuan cuisine",
    "local government",
    "growing tomatoes on a balcony",
    "the rules of table tennis",
    "a family argument",
    "visiting the Terracotta Army",
    "a surprise birthday party",
    "learning to swim",
    "how bees make honey",
    "a visit to a tofu factory",
    "favorite childhood game",
    "the invention of paper",
    "living through a typhoon",
    "bike sharing in Shanghai",
    "eating mooncakes in autumn",
    "my cousin's wedding",
    "getting lost on a hike",
    "a day in the life of a firefighter",
    "chopstick etiquette",
    "calligraphy class",
    "a haunted house",
    "the history of silk",
    "growing up in a fishing village",
    "my grandfather's garden",
    "how dumplings are made",
    "a power outage at night",
    "training a guide dog",
    "a piano competition",
    "spring festival travel rush",
    "making a paper kite",
    "celebrating Qixi Festival",
    "a dream about flying",
    "water pollution in the river",
    "a bakery that never closes",
    "first time skiing",
    "a famous actor visits school",
    "working in a rice field",
    "internet addiction",
    "a ghost story from my town",
    "learning how to code",
    "robot pets",
    "the color red in Chinese culture",
    "daily life in the Tang Dynasty",
    "a visit to the Forbidden City",
    "a thunderstorm in the mountains",
    "my favorite app",
    "drinking tea with my grandma",
    "an embarrassing moment",
    "the sound of cicadas in summer",
    "China's space program",
    "the meaning of dragons",
    "snowball fight",
    "traffic jam on the highway",
    "making zongzi with family",
    "an unexpected friendship",
    "picking apples in autumn",
    "why pandas are endangered",
    "getting braces",
    "watching a solar eclipse",
    "a magic trick gone wrong",
    "first day of middle school",
    "public dancing in the square",
    "a rainy sports day",
    "my robot vacuum",
    "the invention of gunpowder",
    "recycling in my neighborhood",
    "camping by the lake",
    "my dream house",
    "a dragon boat race",
    "how to write a good essay",
    "when the internet went down",
    "family game night",
    "local dialects",
    "eating insects in Yunnan",
    "a trip to the desert",
    "the art of paper cutting",
    "homework under candlelight",
    "pet turtles",
    "lost in a foreign country",
    "a walk in the bamboo forest",
    "building a snowman",
    "why I like thunderstorms",
    "a basketball game at school",
    "fishing with my uncle",
    "a visit to a Buddhist temple",
    "the price of milk",
    "falling off a bike",
    "a train ride through mountains",
    "studying during a blackout",
    "the life of a delivery driver",
    "wearing a school uniform",
    "a street market at night",
    "how my parents met",
    "the invention of the compass",
    "a cooking contest",
    "a rainy day in Hong Kong",
    "the smell of jasmine",
    "food delivery robots",
    "my favorite cartoon",
    "school lunch",
    "finding a stray cat",
    "an earthquake drill",
    "a ghost in the schoolyard",
    "my lucky charm",
    "lunar new year firecrackers",
    "a fight between friends",
    "history of Chinese coins",
    "my first job",
    "climbing the Great Wall",
    "how I learned to whistle",
    "a lion dance performance",
    "learning calligraphy",
    "school exams",
    "quitting a bad habit",
    "my grandfather's stories",
    "a prank on a teacher",
    "growing up with a twin",
    "Chinese chess tournament",
    "a silent argument",
    "the rice cooker broke",
    "making friends online",
    "solar power in rural areas",
    "watching an opera",
    "riding the subway",
    "a poem I wrote",
    "a family photo album",
    "a typhoon hits town",
    "street food in Chengdu",
    "how bridges are built",
    "a bad haircut",
    "writing letters by hand",
    "a mosquito in the room",
    "a fire drill",
    "a missing umbrella",
    "trying stinky tofu",
    "spending money wisely",
    "a cat in the library",
    "how to fold a crane",
    "a tea ceremony",
    "a dog who understands Chinese",
    "first time babysitting",
    "how my name was chosen",
    "the coldest winter",
    "the power of kindness",
    "my favorite holiday",
    "a trip to the zoo",
    "the fastest train",
    "fighting with a sibling",
    "a snowstorm in the city",
    "the meaning of red envelopes",
    "history of the abacus",
    "buying groceries at a wet market",
    "solar terms and farming",
    "how to climb stairs faster",
    "Chinese shadow puppets",
    "a robot that draws",
    "finding a wallet",
    "a ghost town in the mountains",
    "a family heirloom",
    "a school talent show",
    "a trip to the beach",
    "cleaning the classroom",
    "a coin toss",
    "pet goldfish",
    "visiting a cave",
    "a blackout during dinner",
    "a famous painting",
    "the smell of rain",
    "my favorite fruit",
    "a hiking accident",
    "the meaning of dragons",
    "lantern riddles",
    "a frog in the bathroom",
    "riding a ferry",
    "a fake product scandal",
    "election day",
    "first day in a new city",
    "rice vs noodles",
    "growing sunflowers",
    "kites at the park",
    "visiting grandma’s village",
    "finding a fossil",
    "a magician on the train",
    "how to tie shoelaces",
    "an unexpected snowfall",
    "a garden on the roof",
    "writing a speech",
    "playing the erhu",
    "how volcanoes work",
    "why I love noodles",
    "a mysterious neighbor",
    "green roofs in the city",
    "homemade robot",
    "a kid who never speaks",
    "getting glasses",
    "an unlucky day",
    "paper lantern festival",
    "winning a raffle",
    "a childhood injury",
    "riding a camel",
    "visiting an old battlefield",
    "a dog saves a child",
    "history of the kite",
    "a paper boat race",
    "a story from the war",
    "meeting a foreign student",
    "a food poisoning scare",
    "spilled ink",
    "watching ants",
    "favorite local snack",
    "first snow of the year",
    "saving a bird",
    "learning a song in sign language",
    "a stolen bicycle",
    "spring cleaning",
    "a power outage at school",
    "fireflies in the field",
    "playing chess with grandpa",
    "wearing a mask",
    "a day without talking",
    "family tree",
    "living in a high-rise",
    "how umbrellas are made",
    "watching a meteor shower",
    "water-saving tips",
    "crossing a river by zipline",
    "running away from bees",
    "paper made from bamboo",
    "solar cookers in the countryside",
    "my worst subject",
    "buying shoes online",
    "a snowball in the face",
    "a talking parrot",
    "a blackout birthday",
    "street artist draws portraits",
    "lost luggage at the station",
    "no internet for a week",
    "becoming vegetarian",
    "climbing stairs to the 30th floor",
    "the coldest shower",
    "birdwatching in the park",
    "learning an instrument",
    "being the class monitor",
    "a blind date gone wrong",
    "an alien lands in my town",
    "helping a lost child",
    "making a sandcastle",
    "growing a bonsai tree",
    "why I love fog",
    "the smell of fried dough",
    "flood season",
    "a ride in a hot-air balloon",
    "washing clothes by hand",
    "my family's dialect",
    "using chopsticks for the first time",
    "riding in a rickshaw",
    "no talking challenge",
    "first karaoke experience",
    "watching a lion dance",
    "paper fan collection",
    "how matches were invented",
    "the story of the Monkey King",
    "a famous general's statue",
    "school in ancient times",
    "how fireworks are made",
    "feeding ducks in the park",
    "first train ride alone",
    "scavenger hunt",
    "a school ghost rumor",
    "spring flood season",
    "a snake in the house",
    "doing tai chi with seniors",
    "how oranges grow",
    "coldest day in Beijing",
    "a swimming pool prank",
    "traditional wedding customs",
    "a new sibling arrives",
    "my favorite commercial",
    "the history of tofu",
    "how fans keep us cool"
  ]

  useEffect(() => {
    if (readingStarted && !readingFinished) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
  
    return () => clearInterval(timerRef.current);
  }, [readingStarted, readingFinished]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
  
        if (!readingStarted && !readingFinished) {
          setReadingStarted(true);
        } else if (readingStarted && !readingFinished) {
          setReadingFinished(true);
        }
      }
    }
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [readingStarted, readingFinished]);

  function getRandomTopic() {
    return TOPICS[Math.floor(Math.random() * TOPICS.length)];
  }

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
        setShowOverlay(true);
        setReadingStarted(false);
        setReadingFinished(false);
        setElapsedTime(0);
      })
      .catch((err) => console.error("Error fetching passage:", err))
      .finally(() => setLoading(false));
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }  

  function computeStats(text, seconds) {
    // Exclude punctuation (Chinese and basic English)
    const clean = text.replace(/[\\p{P}\\p{S}\\s]/gu, "");
    const charCount = clean.length;
    const cpm = seconds > 0 ? Math.round((charCount / seconds) * 60) : 0;
    return { charCount, time: seconds, cpm };
  }  

  return (
    <div className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Chinese Passage Generator
      </h1>

      <Slider label="Difficulty (HSK)" min={1} max={6} value={difficulty} setValue={setDifficulty} />
      <Slider label="Length (Characters)" min={100} max={500} step={50} value={length} setValue={setLength} />
      <TextInput
        label="Topic"
        value={topic}
        setValue={setTopic}
        onRandomize={() => setTopic(getRandomTopic())}
      />
      <GenerateButton onClick={fetchPassage} loading={loading} text="Generate Passage" />
      
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
          <div
            className={`flex-1 overflow-auto text-2xl leading-relaxed mt-4 border border-gray-300 rounded p-6 bg-gray-50 transition duration-200 ${
              !readingStarted && !readingFinished ? "blur-sm select-none" : ""
            }`}
          >
            {generatedText}
          </div>
          {!readingFinished ? (
            <div className="mt-auto flex flex-col items-center gap-4 pt-6">
              <div className="text-xl font-semibold text-gray-700">
                Timer: {formatTime(elapsedTime)}
              </div>
              {!readingStarted ? (
                <button
                  onClick={() => setReadingStarted(true)}
                  className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-6 py-3 rounded"
                >
                  Start Reading (space)
                </button>
              ) : (
                <button
                  onClick={() => {
                    setReadingFinished(true);
                    clearInterval(timerRef.current);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-6 py-3 rounded"
                >
                  Done Reading (space)
                </button>
              )}
            </div>
          ) : (
            <div className="mt-auto pt-6 text-center text-gray-800 text-lg flex flex-col items-center gap-4">
              {(() => {
                const { charCount, time, cpm } = computeStats(generatedText, elapsedTime);
                return (
                  <>
                    <div>Characters: <strong>{charCount}</strong></div>
                    <div>Difficulty: <strong>HSK {difficulty}</strong></div>
                    <div>Time: <strong>{formatTime(time)}</strong></div>
                    <div>Characters per minute: <strong>{cpm}</strong></div>
                  </>
                );
              })()}
              <GenerateButton
                onClick={() => {
                  setTopic(getRandomTopic());
                  fetchPassage();
                }}
                text="Generate a New Passage"
                loading={loading}
              />
            </div>
          )}
        </div>
      )}
    </div>
    );
}

export default PassagesPage;
