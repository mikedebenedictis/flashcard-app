import React from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from '../utils/api/index.js';
import { listDecks } from "../utils/api/index.js";

function CreateScreen() {
  const history = useHistory();
  const handleCancel = () => {
    history.push('/')
  }

  const handleCreate = async (event) => {
    event.preventDefault();
    event.persist();
    const decks = await listDecks();
    const newId = decks.length + 1;
    const deck = {
      id: newId,
      name: event.target.name.value,
      description: event.target.description.value
    };
    createDeck(deck);
    history.push(`/decks/${newId}`);
  }

  return (
    <>
      <h2>Create Deck</h2>
      <form name='create' onSubmit={handleCreate} >
        <div>
          <label htmlFor="name">
            Name
            <br />
            <input type="text" id='name' name="name" placeholder="Deck Name" />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <br />
            <textarea
              id='description'
              name="description"
              placeholder="Description of the deck"
            />
          </label>
        </div>
        <div>
            <button onClick={handleCancel}>Cancel</button>
            <button type='submit' >Submit</button>
        </div>
      </form>
    </>
  );
}

export default CreateScreen;