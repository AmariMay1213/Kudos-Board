import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./CreateCardModal.css";
// import no_image from "../../src/assets/no_image.jpeg"


function CreateCardModal({ board_Id, cardInfo, setCardInfo, show, setShowCreateCardModal, createCard}) {

  if (!show) return null;

  const [input, setInput] = useState("");


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
      gif_Url: "https://via.placeholder.com/150",

    };

    await createCard(cardData ).then(() => {
      setCardInfo({});
      setShowCreateCardModal(false);
    });


    console.log("cardInfo", cardData)
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
          <button
            className="button"
            type="submit"
          
          >
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCardModal;