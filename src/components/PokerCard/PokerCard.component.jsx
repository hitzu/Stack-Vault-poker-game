import React from 'react'
import * as styles from './PokerCard.module.css'

export const PokerCard = (props) => {

    return (
      <div className={`${styles.card} ${!props.image ? styles.border : null}` } style = {{backgroundImage:`url(${props.image})`}}></div>
    )
}
