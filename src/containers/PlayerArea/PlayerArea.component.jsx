import React from 'react'
import styles from './PlayerArea.module.css'
import {PokerCard} from '../../components/PokerCard/PokerCard.component'

export const PlayerArea = (props) => {
    const cards = []
    const maxElements = 4;
    let i = 0;
    while (i < maxElements) {
        cards.push(props.currentsCards[i] ? props.currentsCards[i] : {})
        i++
    }
    console.log(cards);
    return ( 
        <div className = {styles.containerCards}>  
            {cards.map(item => (
                <PokerCard image = {item ? item.url : null} />
            ))}
        </div>
    )
}