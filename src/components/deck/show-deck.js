import React from 'react'

import Deck from './deck'

function ShowDeck (props) {
  const deck = Deck()

  //Returns the card that is clicked in the card modal
  function handleClickCard (e) {
    props.handleCardSelection(e.target.outerText)
  }

  //Creates an array for the spade cards
  const spadeCards = []
  for (let i = 0; i < 13; i++) {
    spadeCards.push(deck[i])
  }

  //Creates an array for the heart cards
  const heartCards = []
  for (let i = 13; i < 26; i++) {
    heartCards.push(deck[i])
  }

  //Creates an array for the club cards
  const clubCards = []
  for (let i = 26; i < 39; i++) {
    clubCards.push(deck[i])
  }

  //Creates an array for the diamond cards
  const diamondCards = []
  for (let i = 39; i < 52; i++) {
    diamondCards.push(deck[i])
  }

  return (
    <>
      {/* Created 4 div wrappers to present the deck in 4 rows of 13 cards of each suit in the card modal*/}
      <div className='spade-wrapper'>
        {spadeCards.map((card, index) => {
          return (
            <div key={index} className='visible-card' onClick={handleClickCard}>
              {card}
            </div>
          )
        })}
      </div>

      <div className='heart-wrapper'>
        {heartCards.map((card, index) => {
          return (
            <div
              key={index + 13}
              className='visible-card'
              onClick={handleClickCard}
            >
              {card}
            </div>
          )
        })}
      </div>

      <div className='club-wrapper'>
        {clubCards.map((card, index) => {
          return (
            <div
              key={index + 26}
              className='visible-card'
              onClick={handleClickCard}
            >
              {card}
            </div>
          )
        })}
      </div>

      <div className='diamond-wrapper'>
        {diamondCards.map((card, index) => {
          return (
            <div
              key={index + 39}
              className='visible-card'
              onClick={handleClickCard}
            >
              {card}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ShowDeck
