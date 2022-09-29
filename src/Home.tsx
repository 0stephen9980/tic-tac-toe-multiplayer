import React, { useState } from "react";
import Login from "./components/Login";

function Home() {
  const [joinGame, setJoinGame] = useState(true);

  const handleJoinGame = () => {
    setJoinGame(!joinGame);
  };

  const handleCreateGame = () => {
    setJoinGame(!joinGame);
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-cyan-400 to-blue-600">
      {/* <div className="h-full flex justify-center items-center">
          <h1 className="text-5xl mb-3">WelCome</h1>
        <div className="text-3xl">
          <div className="flex justify-start items-start">
            <p className="mb-3 mr-2">Would you like to Join the Game</p>
            <button
              className="bg-blue-900 text-white w-40 rounded-md"
              onClick={() => handleJoinGame()}
            >
              Join Game
            </button>
          </div>
          <div className="flex justify-start items-start">
            <p className="mb-3 mr-2">Would you like Create the Game</p>
            <button
              className="bg-blue-900 text-white w-56 rounded-md"
              onClick={() => handleCreateGame()}
            >
              Create Game
            </button>
          </div>
        </div>
      </div>
      {joinGame ? (
        <Login isVisible={joinGame} onClick={handleJoinGame} />
      ) : null} */}
      <Login isVisible={joinGame} onClick={handleJoinGame} />
    </div>
  );
}

export default React.memo(Home);
