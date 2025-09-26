// src/App.js
import React, { useState } from "react";
import axios from "axios";

const JAMENDO_CLIENT_ID = "301967f0"; // get one from developer.jamendo.com

function App() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  const searchTracks = async () => {
    try {
      const res = await axios.get("https://api.jamendo.com/v3.0/tracks", {
        params: {
          client_id: JAMENDO_CLIENT_ID,
          format: "json",
          limit: 10,
          search: query,
        },
      });
      setTracks(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎶 React Music App</h1>
      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchTracks}>Search</button>

      <ul>
        {tracks.map((track) => (
          <li key={track.id} style={{ margin: "15px 0" }}>
            <img
              src={track.album_image}
              alt={track.name}
              style={{ width: "100px", borderRadius: "8px" }}
            />
            <p>
              {track.name} – {track.artist_name}
            </p>
            {track.audio && <audio controls src={track.audio}></audio>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
