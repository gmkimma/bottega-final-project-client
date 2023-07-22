import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavBar from '../navigation/navigation-container'
import DeckModal from '../modals/deck-modal'
import Odds from '../strategy/odds'
import Suggest from '../strategy/suggest'

import Deck from '../deck/deck'
import changeCardValue from '../deck/change-value'

//images for buttons
import surrender from '../../assets/images/home/surrender.png'
import split from '../../assets/images/home/split.png'
import double from '../../assets/images/home/double.png'
import stand from '../../assets/images/home/stand.png'
import hit from '../../assets/images/home/hit.png'
import deal from '../../assets/images/home/deal.png'

axios.defaults.withCredentials = true

const numOfDecks = 8
const deck = Deck(numOfDecks)

const live_url =
  'https://bottega-capstone-project-kimma-d587bac5eeb7.herokuapp.com'
const local_url = 'http://localhost:3001'

let targetCard = ''

function Home () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [cardModalIsOpen, setCardModalIsOpen] = useState(false)

  const [faceUpCard, setFaceUpCard] = useState({
    bgColor: '',
    bgImg: '',
    card: ''
  })
  const [playerCardOne, setPlayerCardOne] = useState({
    bgColor: '',
    bgImg: '',
    card: ''
  })
  const [playerCardTwo, setPlayerCardTwo] = useState({
    bgColor: '',
    bgImg: '',
    card: ''
  })

  const [dealerTotal, setDealerTotal] = useState('0')
  const [playerTotal, setPlayerTotal] = useState('0')

  const cardFunctions = {
    playerCardOne: setPlayerCardOne,
    playerCardTwo: setPlayerCardTwo,
    faceUpCard: setFaceUpCard
  }

  //Checking if user is logged in
  useEffect(() => {
    axios.get(`${live_url}/api/login`).then(response => {
      setLoggedIn(response.data.loggedIn)
    })
  }, [])

  //Updating the dealer total
  useEffect(() => {
    let cardValueOne = changeCardValue(faceUpCard.card.slice(0, -1))

    setDealerTotal(cardValueOne)
  }, [faceUpCard])

  //Updating the player total
  useEffect(() => {
    let cardValueOne = changeCardValue(playerCardOne.card.slice(0, -1))
    let cardValueTwo = changeCardValue(playerCardTwo.card.slice(0, -1))

    if (cardValueOne === '11' || cardValueTwo === '11') {
      setPlayerTotal(`Soft ${parseInt(cardValueOne) + parseInt(cardValueTwo)}`)
    } else {
      setPlayerTotal(
        (parseInt(cardValueOne) + parseInt(cardValueTwo)).toString()
      )
    }
  }, [playerCardOne, playerCardTwo])

  //Announcing blackjack
  useEffect(() => {
    if (playerTotal === 'Soft 21') {
      setPlayerTotal('Blackjack!')
    }
  }, [playerTotal])

  //Changing Ace to 1 when over 21
  useEffect(() => {
    if (
      playerCardOne.card.slice(0, -1) === 'A' &&
      playerCardTwo.card.slice(0, -1) === 'A'
    ) {
      setPlayerTotal('12')
    }
  }, [playerCardOne, playerCardTwo])

  //Reseting cards when 'deal' button is pressed
  function resetCards () {
    setPlayerCardOne({
      bgColor: '',
      bgImg: '',
      card: ''
    })
    setPlayerCardTwo({
      bgColor: '',
      bgImg: '',
      card: ''
    })
    setFaceUpCard({
      bgColor: '',
      bgImg: '',
      card: ''
    })
  }

  //Handling card selection from modal
  function handleCardSelection (card) {
    cardFunctions[targetCard]({
      bgColor: 'white',
      bgImg: 'none',
      card: card
    })

    setCardModalIsOpen(false)

    const index = deck.indexOf(card)
    if (index > -1) {
      deck.splice(index, 1)
    }
  }

  function handleModalClose () {
    setCardModalIsOpen(false)
  }

  function handleCardClick (event) {
    targetCard = event.target.id
    setCardModalIsOpen(true)
  }

  //Landing Page if user is not logged in
  if (!loggedIn) {
    return (
      <>
        <NavBar />

        <div className='game-table'>
          <h1>Please log in to use Beat BlackJack</h1>
        </div>
      </>
    )
  }

  //When user is logged in
  return (
    <>
      <DeckModal
        handleCardSelection={handleCardSelection}
        handleModalClose={handleModalClose}
        modalIsOpen={cardModalIsOpen}
      />

      <NavBar loggedIn={loggedIn} />

      <div className='game-table'>
        <div className='dealer-cards'>
          <div
            className='card'
            id='faceUpCard'
            style={{
              backgroundColor: faceUpCard.bgColor,
              backgroundImage: faceUpCard.bgImg
            }}
            onClick={handleCardClick}
          >
            {faceUpCard.card}
          </div>
          {/* <div
            className='card'
            style={{
              backgroundColor: dealerCardTwo.bgColor,
              backgroundImage: dealerCardTwo.bgImg
            }}
            onClick={handleDealerCardTwoClick}
          >
            {dealerCardTwo.card}
          </div> */}
          <div className='dealer-total'>{dealerTotal}</div>
        </div>

        <div className='strategy-wrapper'>
          <div className='strategy'>
            <Suggest
              dealerCard={faceUpCard.card.slice(0, -1)}
              playerCardOne={playerCardOne.card.slice(0, -1)}
              playerCardTwo={playerCardTwo.card.slice(0, -1)}
              playerTotal={playerTotal}
            />
          </div>
        </div>

        <div className='player-cards'>
          <div
            className='card'
            id='playerCardOne'
            style={{
              backgroundColor: playerCardOne.bgColor,
              backgroundImage: playerCardOne.bgImg
            }}
            onClick={handleCardClick}
          >
            {playerCardOne.card}
          </div>
          <div
            className='card'
            id='playerCardTwo'
            style={{
              backgroundColor: playerCardTwo.bgColor,
              backgroundImage: playerCardTwo.bgImg
            }}
            onClick={handleCardClick}
          >
            {playerCardTwo.card}
          </div>
          <div className='player-total'>{playerTotal}</div>
        </div>

        <div className='action-wrapper'>
          <div className='action'>
            <img src={surrender} alt='surrender' />
            Surrender
          </div>
          <div className='action'>
            <img src={split} alt='split' />
            Split
          </div>
          <div className='action'>
            <img src={double} alt='double' />
            Double
          </div>
          <div className='action'>
            <img src={stand} alt='stand' />
            Stand
          </div>
          <div className='action'>
            <img src={hit} alt='hit' />
            Hit
          </div>
          <div className='action' onClick={resetCards}>
            <img src={deal} alt='deal' />
            Deal
          </div>
        </div>

        <Odds deck={deck} />
      </div>
    </>
  )
}

export default Home
