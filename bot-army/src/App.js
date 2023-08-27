import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css'



const App = () => {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  const handleBotClick = bot => {
    if (!bot.selected) {
      setSelectedBots([...selectedBots, bot]);
      bot.selected = true; // Attempting to select the bot from hiyo list
    }
  };

  const handleReleaseBot = bot => {
    setSelectedBots(selectedBots.filter(selectedBot => selectedBot !== bot));
    bot.selected = false; // unselecting the bot.
  };

  useEffect(() => {
    // Fetch data from json
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="app">
      <BotCollection bots={bots} onBotClick={handleBotClick} />
      <YourBotArmy selectedBots={selectedBots} onReleaseBot={handleReleaseBot} />
    </div>
  );
};

export default App;
