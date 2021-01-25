import React, { useState, useEffect } from 'react'
import styles from './GameScreen.module.css'
import {  PlayerArea, DealerArea} from '../../containers'
import axios from 'axios';

export const GameScreen = () => {

    const [cardsDealerArea, setCardsDealerArea] = useState([]);
    const [cardsPlayerArea, setCardsPlayerArea] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
        'https://svquizz.s3.eu-central-1.amazonaws.com/cards.json',
        );

        setCardsDealerArea(result.data);
        };

        fetchData();
    }, []);

    

    return (
        <div className = {styles.containerSections}>
            {/* <PlayerArea currentsCards = {cardsPlayerArea}></PlayerArea> */}
            <DealerArea currentsCards = {cardsDealerArea}></DealerArea>
        </div>
    )
}