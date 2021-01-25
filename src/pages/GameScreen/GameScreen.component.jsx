import React, { useState, useEffect } from 'react'
import styles from './GameScreen.module.css'
import {  PlayerArea, DealerArea} from '../../containers'
import axios from 'axios';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export const GameScreen = () => {

    const [cardsDealerArea, setCardsDealerArea] = useState([]);
    const [cardsPlayerArea, setCardsPlayerArea] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
        'https://svquizz.s3.eu-central-1.amazonaws.com/cards.json',
        );

        setCardsDealerArea(shuffleArray(result.data));
        };

        fetchData();
    }, []);

    const handlingCards = (index) => {
        console.log("seleccionaron index", index)
    }

    

    return (
        <div className = {styles.containerSections}>
            <PlayerArea currentsCards = {cardsPlayerArea}></PlayerArea>
            <DealerArea currentsCards = {cardsDealerArea} selectCard = {handlingCards}></DealerArea>
        </div>
    )
}