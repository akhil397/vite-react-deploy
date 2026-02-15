import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // ===== QUESTIONS DATA =====
  const questions = [
    {
      id: 1,
      english: "The sun rises in the east",
      malayalam: "സൂര്യൻ കിഴക്കുദിക്കുന്നു",
      options: [
        "east",
        "The",
        "in",
        "north",
        "rises",
        "at",
        "sun",
        "the",
        "on",
      ],
    },
    {
      id: 2,
      english: "She ate an apple for breakfast",
      malayalam: "അവൾ പ്രഭാത ഭക്ഷണത്തിന് ഒരു ആപ്പിൾ കഴിച്ചു",
      options: [
        "apple",
        "lunch",
        "She",
        "for",
        "ate",
        "an",
        "breakfast",
        "eat",
        "by",
      ],
    },
    {
      id: 3,
      english: "He is learning to play the guitar",
      malayalam: "അദ്ദേഹം ഗിറ്റാർ വായിക്കാൻ പഠിക്കുന്നു",
      options: [
        "guitar",
        "is",
        "He",
        "playing",
        "the",
        "to",
        "learning",
        "piano",
        "play",
      ],
    },
    {
      id: 4,
      english: "The cat jumped over the fence",
      malayalam: "പൂച്ച വേലിയുടെ മുകളിലൂടെ ചാടി",
      options: ["over", "The", "under", "jumped", "fence", "cat", "on", "the"],
    },
    {
      id: 5,
      english: "We will visit the museum tomorrow",
      malayalam: "നാളെ ഞങ്ങൾ മ്യൂസിയം സന്ദർശിക്കും",
      options: [
        "museum",
        "visit",
        "We",
        "yesterday",
        "will",
        "tomorrow",
        "the",
        "go",
      ],
    },
    {
      id: 6,
      english: "She has a beautiful smile",
      malayalam: "അവൾക്ക് ഒരു മനോഹരമായ പുഞ്ചിരിയുണ്ട്",
      options: ["beautiful", "She", "had", "a", "smile", "has", "ugly"],
    },
    {
      id: 7,
      english: "The book is on the table",
      malayalam: "പുസ്തകം ടേബിളിൽ ഉണ്ട്",
      options: ["on", "under", "book", "The", "table", "is", "at", "the"],
    },
    {
      id: 8,
      english: "They are going to the beach this weekend",
      malayalam: "ഈ വാരാന്ത്യത്തിൽ അവർ ബീച്ചിലേക്ക് പോകുന്നു",
      options: [
        "this",
        "going",
        "They",
        "next",
        "beach",
        "are",
        "to",
        "weekend",
        "the",
      ],
    },
    {
      id: 9,
      english: "I love listening to music",
      malayalam: "എനിക്ക് സംഗീതം കേൾക്കാൻ ഇഷ്ടമാണ്",
      options: ["music", "hate", "to", "I", "listen", "love", "listening"],
    },
    {
      id: 10,
      english: "The weather is cold today",
      malayalam: "ഇന്ന് കാലാവസ്ഥ തണുപ്പാണ്",
      options: ["weather", "hot", "The", "today", "is", "cold", "rainy"],
    },
    {
      id: 11,
      english: "He drinks coffee every morning",
      malayalam: "അദ്ദേഹം ഓരോ രാവിലും കാപ്പി കുടിക്കുന്നു",
      options: ["coffee", "He", "tea", "every", "morning", "drinks", "night"],
    },
    {
      id: 12,
      english: "The children are playing in the park",
      malayalam: "കുട്ടികൾ പാർക്കിൽ കളിക്കുന്നു",
      options: [
        "children",
        "The",
        "sleeping",
        "are",
        "in",
        "park",
        "the",
        "playing",
      ],
    },
    {
      id: 13,
      english: "She writes a letter to her friend",
      malayalam: "അവൾ സുഹൃത്തിന് ഒരു കത്ത് എഴുതുന്നു",
      options: ["letter", "writes", "She", "to", "a", "friend", "his", "her"],
    },
    {
      id: 14,
      english: "The train arrives at six o clock",
      malayalam: "ട്രെയിൻ ആറുമണിക്ക് എത്തുന്നു",
      options: ["arrives", "train", "The", "six", "at", "clock", "five", "o"],
    },
    {
      id: 15,
      english: "We are watching a movie tonight",
      malayalam: "ഇന്ന് രാത്രി ഞങ്ങൾ സിനിമ കാണുന്നു",
      options: ["watching", "movie", "We", "are", "tonight", "a", "yesterday"],
    },
    {
      id: 16,
      english: "The dog is barking loudly",
      malayalam: "നായ ശക്തമായി കുരയ്ക്കുന്നു",
      options: ["dog", "The", "is", "barking", "softly", "loudly"],
    },
    {
      id: 17,
      english: "She is reading a book",
      malayalam: "അവൾ ഒരു പുസ്തകം വായിക്കുന്നു",
      options: ["reading", "She", "is", "book", "a", "write"],
    },
    {
      id: 18,
      english: "They finished their homework",
      malayalam: "അവർ അവരുടെ ഗൃഹപാഠം പൂർത്തിയാക്കി",
      options: ["finished", "They", "homework", "their", "start"],
    },
    {
      id: 19,
      english: "The sky looks very beautiful",
      malayalam: "ആകാശം വളരെ മനോഹരമാണ്",
      options: ["sky", "The", "looks", "very", "beautiful", "ugly"],
    },
    {
      id: 20,
      english: "He bought a new car",
      malayalam: "അദ്ദേഹം ഒരു പുതിയ കാർ വാങ്ങി",
      options: ["bought", "He", "car", "new", "a", "old"],
    },
  ];

  // ===== STATE VARIABLES =====
  const [currentPage, setCurrentPage] = useState("login");
  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [levelQuestions, setLevelQuestions] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timer, setTimer] = useState(null);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [theme, setTheme] = useState("light");
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // ===== EFFECTS =====
  useEffect(() => {
    const savedUser = localStorage.getItem("lastUser");
    if (savedUser) {
      const data = localStorage.getItem(savedUser);
      if (data) {
        setCurrentUser(savedUser);
        setUserData(JSON.parse(data));
        setCurrentPage("levels");
      }
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const audio = document.getElementById("bgMusic");
    if (audio) {
      if (musicEnabled) {
        audio.play().catch((e) => console.log("Audio play failed:", e));
      } else {
        audio.pause();
      }
    }
  }, [musicEnabled, currentPage]);

  useEffect(() => {
    if (
      currentPage === "game" &&
      levelQuestions.length > 0 &&
      currentIndex < levelQuestions.length
    ) {
      const currentQ = levelQuestions[currentIndex];
      setShuffledOptions([...currentQ.options].sort(() => Math.random() - 0.5));
      setAnswerArray([]);
    }
  }, [currentIndex, levelQuestions, currentPage]);

  useEffect(() => {
    if (currentPage === "game" && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            alert("Time's up!");
            finishLevel();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setTimer(interval);
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  // ===== LOGIN FUNCTION =====
  const login = () => {
    if (!username.trim()) {
      alert("Enter name");
      return;
    }

    const name = username.trim();
    setCurrentUser(name);

    let data;
    if (!localStorage.getItem(name)) {
      data = {
        unlockedLevel: 1,
        completedLevels: [],
        settings: { music: true, theme: "light" },
      };
      localStorage.setItem(name, JSON.stringify(data));
    } else {
      data = JSON.parse(localStorage.getItem(name));
    }

    setUserData(data);
    setMusicEnabled(data.settings.music);
    setTheme(data.settings.theme);
    localStorage.setItem("lastUser", name);
    setCurrentPage("levels");
  };

  // ===== LOGOUT =====
  const logout = () => {
    localStorage.removeItem("lastUser");
    setCurrentUser(null);
    setUserData(null);
    setCurrentPage("login");
    setUsername("");
  };

  // ===== START LEVEL =====
  const startLevel = (level) => {
    if (timer) clearInterval(timer);

    setCurrentLevel(level);
    setCurrentIndex(0);
    setTimeLeft(60);
    setAnswerArray([]);

    const startIdx = (level - 1) * 10;
    const endIdx = Math.min(level * 10, questions.length);
    const levelQs = questions.slice(startIdx, endIdx);
    setLevelQuestions(levelQs);

    setCurrentPage("game");
  };

  // ===== ADD WORD TO ANSWER =====
  const addWord = (word) => {
    setAnswerArray([...answerArray, word]);
  };

  // ===== UNDO LAST WORD =====
  const undo = () => {
    setAnswerArray(answerArray.slice(0, -1));
  };

  // ===== SUBMIT ANSWER =====
  const submitAnswer = () => {
    if (answerArray.length === 0) {
      alert("Please build a sentence first!");
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < levelQuestions.length) {
      setCurrentIndex(nextIndex);
    } else {
      finishLevel();
    }
  };

  // ===== FINISH LEVEL =====
  const finishLevel = () => {
    if (timer) clearInterval(timer);

    const updatedData = { ...userData };
    if (!updatedData.completedLevels.includes(currentLevel)) {
      updatedData.completedLevels.push(currentLevel);
    }

    if (currentLevel === updatedData.unlockedLevel && currentLevel < 3) {
      updatedData.unlockedLevel++;
    }

    setUserData(updatedData);
    localStorage.setItem(currentUser, JSON.stringify(updatedData));

    alert("Level Completed!");
    setCurrentPage("levels");
  };

  // ===== GET PROGRESS =====
  const getProgressPercent = () => {
    return (currentIndex / (levelQuestions.length || 1)) * 100;
  };

  // ===== SAVE SETTINGS =====
  const saveSettings = () => {
    const updatedData = { ...userData };
    updatedData.settings = { music: musicEnabled, theme };
    setUserData(updatedData);
    localStorage.setItem(currentUser, JSON.stringify(updatedData));
    setCurrentPage("levels");
  };

  // ===== RENDER LOGIN PAGE =====
  const renderLogin = () => (
    <div className="card">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <button className="blue" onClick={login}>
        Login
      </button>
    </div>
  );

  // ===== RENDER LEVELS PAGE =====
  const renderLevels = () => (
    <div className="card">
      <h2>Select Level</h2>
      <div className="level-buttons">
        {[1, 2, 3].map((level) => {
          let buttonClass = "";
          if (userData?.completedLevels.includes(level)) {
            buttonClass = "green";
          } else if (level <= (userData?.unlockedLevel || 1)) {
            buttonClass = "blue";
          } else {
            buttonClass = "locked";
          }

          return (
            <button
              key={level}
              className={buttonClass}
              disabled={buttonClass === "locked"}
              onClick={() => startLevel(level)}
            >
              Level {level}
            </button>
          );
        })}
      </div>
      <button onClick={() => setCurrentPage("settings")}>⚙ Settings</button>
      <button onClick={logout}>Logout</button>
    </div>
  );

  // ===== RENDER SETTINGS PAGE =====
  const renderSettings = () => (
    <div className="card">
      <h2>Settings</h2>

      <h4>Background Music</h4>
      <label className="toggle">
        <input
          type="checkbox"
          checked={musicEnabled}
          onChange={(e) => setMusicEnabled(e.target.checked)}
        />
        <span className="slider"></span>
      </label>

      <h4>Dark Theme</h4>
      <label className="toggle">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        <span className="slider"></span>
      </label>

      <br />
      <br />
      <button onClick={saveSettings}>Save</button>
      <button onClick={() => setCurrentPage("levels")}>Back</button>
    </div>
  );

  // ===== RENDER GAME PAGE =====
  const renderGame = () => {
    if (levelQuestions.length === 0 || currentIndex >= levelQuestions.length) {
      return <div>Loading...</div>;
    }

    const currentQuestion = levelQuestions[currentIndex];

    return (
      <div className="card">
        <h3>Level {currentLevel}</h3>
        <p>
          ⏱ <span>{timeLeft}</span>s
        </p>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${getProgressPercent()}%` }}
          ></div>
        </div>
        <h4>{currentQuestion.malayalam}</h4>
        <div className="answer-box">{answerArray.join(" ")}</div>
        <button onClick={undo}>Undo</button>
        <div className="options">
          {shuffledOptions.map((word, index) => (
            <button
              key={index}
              className="word-btn"
              onClick={() => addWord(word)}
            >
              {word}
            </button>
          ))}
        </div>
        <button onClick={submitAnswer}>Submit</button>
      </div>
    );
  };

  // ===== MAIN RENDER =====
  return (
    <div className="container">
      <audio id="bgMusic" loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </audio>

      {currentPage === "login" && renderLogin()}
      {currentPage === "levels" && renderLevels()}
      {currentPage === "settings" && renderSettings()}
      {currentPage === "game" && renderGame()}
    </div>
  );
}

export default App;
