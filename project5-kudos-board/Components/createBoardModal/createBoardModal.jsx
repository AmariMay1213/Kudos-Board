import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CreateBoardModal.css";
import BoardCard from "../boardCard/boardCard";

function CreateBoardModal({
  boardInfo,
  setBoardInfo,
  show,
  setShowCreateBoardModal,
  createBoard,
}) {
  if (!show) return null;

  const [input, setInput] = useState("");

  // Pass the information entered back to the component that called it
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!boardInfo.title || !boardInfo.category || !boardInfo.author) {
      alert("Please fill in all fields.");
      return;
    }
    await createBoard(boardInfo).then(() => {
      setBoardInfo({});
      setShowCreateBoardModal(false);
    });
  };

  // Send in the showCreateBoardModal setter, which allows for one to exit the modal upon submission

  return (
    <div className="createBoardInfo">
      {/* Close button */}
      <div className="control">
        <button
          className="button"
          type="button"
          onClick={() => {
            setInput("");
            setShowCreateBoardModal(false);
            // Function to close modal here
          }}
        >
          Close
        </button>
      </div>

      {/* Form section for the create new board moda; */}
      <form onSubmit={handleSubmit}>
        <h2>Create a New Board</h2>
        {/* Title text box */}
        <div className="input-field">
          <label className="label">Title:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={boardInfo.title || ""}
              onChange={(e) =>
                setBoardInfo((u) => ({ ...u, title: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Category drop down */}
        <div className="drop-down">
          <label className="label">Category:</label>
          <div className="control">
            <select
              value={boardInfo.category || ""}
              onChange={(e) =>
                setBoardInfo((u) => ({ ...u, category: e.target.value }))
              }
            >
              <option value="">Select a category</option>
              <option value="Celebration">Celebration</option>
              <option value="Thank You">Thank You</option>
              <option value="Inspiration">Inspiration</option>
            </select>
          </div>
        </div>

        {/* Author text box */}
        <div className="input-field">
          <label className="label">Author</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={boardInfo.author || ""}
              onChange={(e) =>
                setBoardInfo((u) => ({ ...u, author: e.target.value }))
              }
            />
          </div>
        </div>
        {/* Create board button */}
        <div className="control">
          <button className="button" type="submit">
            Create Board
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBoardModal;
