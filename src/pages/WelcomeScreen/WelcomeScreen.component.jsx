import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styles from './WelcomeScreen.module.css'

export const WelcomeScreen = () => {

    return <div className = {styles.infoUser}>
        <Card
            bg='light'
            text='black'
            style={{ width: '26rem' }}
            className="mb-2"
        >
            <Card.Header>Prueba Stack & Vault</Card.Header>
            <Card.Body>
            <Card.Title>Roberto Guillermo Torres Lopez.</Card.Title>
            <Card.Text>
                <a href='https://github.com/hitzu'>GitHub Poker Game</a>
            </Card.Text>
                <Link to="/game">
                    <Button variant="dark" >Start Game</Button>
                </Link>
            </Card.Body>
        </Card>
    </div>
}