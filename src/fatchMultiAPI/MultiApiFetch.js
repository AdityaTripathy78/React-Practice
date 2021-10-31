import axios from "axios";
import React, { useEffect, useState } from "react";

const MultiApiFetch = () => {
  const [playerName, setPlayerName] = useState([]);
  const [playerPic, setPlayerPic] = useState([]);

  const fetchData = async () => {
    const playerAPI =
      "https://nba-players.herokuapp.com/players-stats-teams/cle";
    const playerPic = "https://nba-players.herokuapp.com/players/curry/stephen";

    const getNBAPlayer = await axios.get(playerAPI);
    const getPlayerPic = await axios.get(playerPic);

    axios.all([getNBAPlayer, getPlayerPic]).then(
      axios.spread((...allData) => {
        const allDataPlayer = allData[0].data[0].name;
        const getNBAPlayerPIC = allData[1].config.url;

        setPlayerName(allDataPlayer);
        setPlayerPic(getNBAPlayerPIC);

        // console.log(allDataPlayer);
        // console.log(getNBAPlayerPIC);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <p>player Name is : {playerName}</p>
      <img src={playerPic} alt="" />
    </div>
  );
};

export default MultiApiFetch;
