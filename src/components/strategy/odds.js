import React from 'react'

function Odds (props) {
  const deck = props.deck
  const newDeck = []
  const numOfCards = {}
  const oddsOfCard = {}

  //Removing the suit from each card
  deck.forEach(card => {
    card = card.slice(0, -1)
    newDeck.push(card)
  })

  //Updating the face cards to the value of 10
  newDeck.forEach(card => {
    if (card === 'K' || card === 'Q' || card === 'J') {
      card = '10'
    }
    numOfCards[card] = (numOfCards[card] || 0) + 1
  })

  //Calculating the odds of each card occurring
  Object.keys(numOfCards).forEach(card => {
    oddsOfCard[card] = ((numOfCards[card] / newDeck.length) * 100).toFixed(2)
  })

  //Creating an array of the odds in ascending order
  const sortedDeck = Object.entries(oddsOfCard).sort((a, b) => b[1] - a[1])

  return (
    <>
      <div className='odds-wrapper'>
        <p>Odds of next card</p>
        <ul>
          <li>{`${sortedDeck[0][0]}: ${sortedDeck[0][1]}%`}</li>
          <li>{`${sortedDeck[1][0]}: ${sortedDeck[1][1]}%`}</li>
          <li>{`${sortedDeck[2][0]}: ${sortedDeck[2][1]}%`}</li>
          <li>{`${sortedDeck[3][0]}: ${sortedDeck[3][1]}%`}</li>
          <li>{`${sortedDeck[4][0]}: ${sortedDeck[4][1]}%`}</li>
        </ul>
      </div>
    </>
  )
}

export default Odds
