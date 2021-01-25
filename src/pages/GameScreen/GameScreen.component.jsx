import React, { useState, useEffect } from 'react'
import styles from './GameScreen.module.css'
import {  PlayerArea, DealerArea} from '../../containers'
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';

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
    const [showModal, setShowModal] = useState(false);

    const maxElements = 4;

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
        if (cardsPlayerArea.length >= maxElements){
            setShowModal(true)
        } else {
            setCardsPlayerArea([...cardsPlayerArea, cardsDealerArea[index]])
            cardsDealerArea.splice(index, 1);
        }

    }

    const handleClose = () => {
        window.location.reload();
    };

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Game Finish</Modal.Title>
            </Modal.Header>
            <Modal.Body>I hope that you enjoyed the test</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Restart Game
            </Button>
            </Modal.Footer>
        </Modal>
            <div className = {styles.containerSections}>
                <PlayerArea currentsCards = {cardsPlayerArea}></PlayerArea>
                <DealerArea currentsCards = {cardsDealerArea} selectCard = {handlingCards}></DealerArea>
            </div>
        </>
    )
}