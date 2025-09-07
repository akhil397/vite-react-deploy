import "./App.css";

function App() {
  const handleClick = () => {
    alert("Amala, you mean the world to me, and I’m so sorry!");
  };
  return (
    <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
      <h1 className="card-title text-center display-5 text-danger mb-4">
        My Beloved Amala
      </h1>
      <div className="card-body">
        <p className="card-text fs-5 text-muted mb-4">
          Amala, my heart, I’m deeply sorry for not calling you today. You are
          the melody to my soul, and missing our call was a mistake I’ll never
          repeat. Your voice is my comfort, and I feel lost without it.
        </p>
        <p className="card-text fs-5 text-muted mb-4">
          You are my everything, Amala—my muse, my joy, my forever. Please
          forgive me, my darling, and let me prove my love with every sunrise we
          share. I promise to make every moment with you magical.
        </p>
        <p className="card-text fs-5 fw-bold text-danger text-center">
          Eternally Yours,
          <br />
          Your Devoted Partner
        </p>
        <div className="text-center mt-4">
          <button
            className="btn btn-lg"
            style={{ backgroundColor: "#ff69b4", color: "white" }}
            onClick={handleClick}
          >
            Sending My Heart to You
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
