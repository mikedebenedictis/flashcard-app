import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { readCard } from '../utils/api/index.js';
import BreadCrumb from "./BreadCrumb.js";
import CardForm from './CardForm.js';

function EditCards() {
  const params = useParams();
  const cardId = params.cardId;
  const [card, setCard] = useState({});
  useEffect(() => {
    async function loadCard() {
      const response = await readCard(cardId);
      setCard({...response});
    }
    loadCard();
  }, [cardId]);

  return (
    <>
      <BreadCrumb />
      <CardForm card={card} />
    </>
  )
}




export default EditCards;