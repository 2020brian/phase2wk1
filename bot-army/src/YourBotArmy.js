import React from 'react';

const YourBotArmy = ({ selectedBots, onReleaseBot }) => {
  return (
    <div className="your-bot-army">
      <h1>Your Bot Army</h1>
      
      <div className="selected-bots">
        {selectedBots.map(bot => (
          <div key={bot.id} className="selected-bot" onClick={() => onReleaseBot(bot)}>
            <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Bot Class: {bot.bot_class}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
