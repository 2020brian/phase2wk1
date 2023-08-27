import React from 'react';

const BotCollection = ({ bots, onBotClick }) => {
  return (
    <div className="bot-collection">
      <h1>Welcome To Bot Battlr!</h1>
      <p>The one and only spot in the known universe <br></br>where you can custom build your own Bot Army!</p>
      
      <div className="bot-container">
      {bots.map(bot => (
          <div key={bot.id} className={`bot-profile ${bot.selected ? 'selected' : ''}`} onClick={() => onBotClick(bot)}>
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

export default BotCollection;
