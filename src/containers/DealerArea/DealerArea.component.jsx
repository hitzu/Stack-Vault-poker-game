import React from 'react'
import styles from './DealerArea.module.css'
import {PokerCard} from '../../components/PokerCard/PokerCard.component'

export const DealerArea = (props) => {
    console.log(props.currentsCards)

    return ( 
        <div className = {styles.containerCards}> 
            {props.currentsCards.map(item => (
                <PokerCard image = {item.url} />
            ))}
        </div>
    )
}