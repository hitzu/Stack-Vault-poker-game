import React from 'react'
import styles from './DealerArea.module.css'
import {PokerCard} from '../../components/PokerCard/PokerCard.component'

export const DealerArea = (props) => {

    return ( 
        <div className = {styles.containerCards}> 
            {props.currentsCards.map((item, i) => (
                <div className = {styles.containerCard} key = {i}  onClick = {() => props.selectCard(i)}>
                    <PokerCard image = {item.url} />
                </div>
            ))}
        </div>
    )
}