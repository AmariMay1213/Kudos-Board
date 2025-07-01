import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./createCardModal.css";


const [input, setInput] = useState("")

// Pass the information entered back to the component that called it
function handleSubmit(){

}

function handleChange(value) {
  setInput(value);
}

// Send in the showCreateCardModal setter, which allows for one to exit the modal upon submission

function createCardModal({ showCreateCardModal }) {
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
            showCreateCardModal(false);
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
              value={input}
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
              value={input}
              onChange={(e) =>
                setCardInfo((u) => ({ ...u, description: e.target.value }))
              }
            />
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
              value={input}
              onChange={(e) =>
                setCardInfo((u) => ({ ...u, author: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Create card button */}
        <div className="control">
          <button
            className="button"
            type="button"
            onClick={() => {
              setInput("");
              showCreateCardModal(false);
              // Function to close modal here
            }}
          >
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
}

export default createBoardModal;
