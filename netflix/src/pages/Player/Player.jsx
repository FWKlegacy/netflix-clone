import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null); // Start with null to detect loading state.
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWVjNWIxZDg1YTMyNDI5ZTkyMGQ0NjEzYzZjNzE2OCIsIm5iZiI6MTczMDE0MTY1MC45NjMzNzIsInN1YiI6IjY3MTkwYzk3YTRhYzhhNDMyYzViZTJjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WPQZVD6dDG3BaExvTwQAqKoARdSyutZr_sNpNs7cpl0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          setError("No video data available.");
        }
      })
      .catch((err) => setError("Failed to fetch video data."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      {apiData && (
        <>
          <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title={apiData.name || "Trailer"}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{apiData.published_at?.slice(0, 10) || "N/A"}</p>
            <p>{apiData.name || "No name available"}</p>
            <p>{apiData.type || "Unknown type"}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Player;
