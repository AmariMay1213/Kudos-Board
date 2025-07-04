import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CreateCardModal.css";
import no_image from "../../src/assets/no_image.jpeg";

function CreateCardModal({
  board_Id,
  cardInfo,
  setCardInfo,
  show,
  setShowCreateCardModal,
  createCard,
}) {
  if (!show) return null;

  const [input, setInput] = useState("");

  //Public giphy api key
  const GIPHY_API_KEY = "nDQP4l8xtXaqyiVMG3AJqx75ctbKcTJo";

  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchTerm}&limit=5`
      );
      setGifs(res.data.data);
    } catch (err) {
      console.error("Failed to fetch gifs", err);
    }
  };

  const handleGifSelect = (gifUrl) => {
    setCardInfo((prev) => ({ ...prev, gif_Url: gifUrl }));
    setGifs([]); // hide results after selection
    setSearchTerm("");
  };

  // Pass the information entered back to the component that called it
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cardInfo.title || !cardInfo.description || !cardInfo.author) {
      alert("Please fill in all fields.");
      return;
    }

    const cardData = {
      ...cardInfo,
      board_Id: Number(board_Id),
      gif_Url: cardInfo.gif_Url || no_image,
      upVotes: 0,
    };

    await createCard(cardData).then(() => {
      setCardInfo({});
      setShowCreateCardModal(false);
    });

    console.log("cardInfo", cardData);
  };

  // Send in the showCreateCardModal setter, which allows for one to exit the modal upon submission

  return (
    <div className="createCardInfo">
      {/* showCreateCardModal(true); */}

      {/* Close button */}
      <div className="control">
        <button
          className="button"
          type="button"
          onClick={() => {
            setInput("");
            setShowCreateCardModal(false);
            // Function to close modal here
          }}
        >
          Close
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Create a New Card</h2>

        {/* Title text box */}
        <div className="input-field">
          <label className="label">Card Title:</label>
          <div className="control">
            <input
              placeholder="Enter card title"
              className="input"
              type="text"
              value={cardInfo.title || ""}
              onChange={(e) =>
                setCardInfo((u) => ({ ...u, title: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Card description text box */}
        <div className="input-field">
          <label className="label">Card Description:</label>
          <div className="control">
            <input
              placeholder="Enter card description"
              className="input"
              type="text"
              value={cardInfo.description || ""}
              onChange={(e) =>
                setCardInfo((u) => ({ ...u, description: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Search GIFS */}

        <div className="input-field">
          <label className="label">Search GIF</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search Giphy"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="gif-results">
            {gifs.map((gif) => (
              <img
                key={gif.id}
                src={gif.images.fixed_height_small.url}
                alt="gif"
                onClick={() => handleGifSelect(gif.images.original.url)}
                style={{
                  width: "100px",
                  margin: "5px",
                  cursor: "pointer",
                  border: "2px solid transparent",
                }}
              />
            ))}
          </div>
        </div>

        {/* Author text box */}
        <div className="input-field">
          <label className="label">Owner</label>
          <div className="control">
            <input
              placeholder="Enter owner (optional)"
              className="input"
              type="text"
              value={cardInfo.author || ""}
              onChange={(e) =>
                setCardInfo((u) => ({ ...u, author: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Create card button */}
        <div className="control">
          <button className="button" type="submit">
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCardModal;
