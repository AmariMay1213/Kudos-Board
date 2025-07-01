import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./CreateBoardModal.css";



function CreateBoardModal({ boardInfo, setBoardInfo, showCreateBoardModal }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(null);

  // Pass the information entered back to the component that called it
  function handleSubmit() {}

  function handleChange(value) {
    setInput(value);
  }

  // Send in the showCreateBoardModal setter, which allows for one to exit the modal upon submission

  return (
    <div className="createBoardInfo">
      {showCreateBoardModal(true)}

      {/* Close button */}
      <div className="control">
        <button
          className="button"
          type="button"
          onClick={() => {
            setInput("");
            showCreateBoardModal(false);
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
              value={input}
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
            <select>
              <option>Select a category</option>
              <option
                onChange={(e) =>
                  setBoardInfo((u) => ({ ...u, category: "Celebration" }))
                }
              >
                Celebration
              </option>
              <option
                onChange={(e) =>
                  setBoardInfo((u) => ({ ...u, category: "Thank You" }))
                }
              >
                Thank You
              </option>
              <option
                onChange={(e) =>
                  setBoardInfo((u) => ({ ...u, category: "Inspiration" }))
                }
              >
                Inspiration
              </option>
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
              value={input}
              onChange={(e) =>
                setBoardInfo((u) => ({ ...u, author: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Create board button */}
        <div className="control">
          <button
            className="button"
            type="button"
            onClick={() => {
              setInput("");
              showCreateBoardModal(false);
              // Function to close modal here
            }}
          >
            Create Board
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBoardModal;
