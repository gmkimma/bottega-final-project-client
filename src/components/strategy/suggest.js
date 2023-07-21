import React, { useState } from 'react'

import changeCardValue from '../deck/change-value'

function Suggest (props) {
  const [suggestion, setSuggestion] = useState('')

  const player = props.playerTotal
  const dealer = changeCardValue(props.dealerCard)

  const playerCardOne = props.playerCardOne
  const playerCardTwo = props.playerCardTwo

  //Checking for pairs - except for 5s and 10s
  if (
    playerCardOne === playerCardTwo &&
    playerCardOne !== '5' &&
    changeCardValue(playerCardOne) !== '10'
  ) {
    //Always split Aces and 8s
    if (
      (playerCardOne === 'A' || playerCardOne === '8') &&
      suggestion !== 'split'
    ) {
      setSuggestion('split')
    }

    //What to do with a pair of 2s
    if (playerCardOne === '2') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6' ||
          dealer === '7') &&
        suggestion !== 'split'
      ) {
        setSuggestion('split')
      }
      if (
        (dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with a pair of 3s
    if (playerCardOne === '3') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6' ||
          dealer === '7') &&
        suggestion !== 'split'
      ) {
        setSuggestion('split')
      }
      if (
        (dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with a pair of 4s
    if (playerCardOne === '4') {
      if ((dealer === '5' || dealer === '6') && suggestion !== 'split') {
        setSuggestion('split')
      }
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with a pair of 6s
    if (playerCardOne === '6') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'split'
      ) {
        setSuggestion('split')
      }
      if (
        (dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with a pair of 7s
    if (playerCardOne === '7') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6' ||
          dealer === '7') &&
        suggestion !== 'split'
      ) {
        setSuggestion('split')
      }
      if (
        (dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with a pair of 9s
    if (playerCardOne === '9') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6' ||
          dealer === '8' ||
          dealer === '9') &&
        suggestion !== 'split'
      ) {
        setSuggestion('split')
      }
      if (
        (dealer === '7' || dealer === '10' || dealer === '11') &&
        suggestion !== 'stand'
      ) {
        setSuggestion('stand')
      }
    }
  } else {
    //Cards are not a pair

    //Blackjack - you win!
    if (player === 'Blackjack!' && suggestion !== 'win') {
      setSuggestion('win')
    }

    //When to surrender
    if (
      ((player === '15' && dealer === '10') ||
        (player === '16' &&
          (dealer === '9' || dealer === '10' || dealer === '11'))) &&
      suggestion !== 'surrender'
    ) {
      setSuggestion('surrender')
    }

    //Always double 11
    if (player === '11' && suggestion !== 'double') {
      setSuggestion('double')
    }

    //Always stand with soft 20 or 17 and higher
    if (
      (player === '17' ||
        player === '18' ||
        player === '19' ||
        player === '20' ||
        player === 'Soft 20') &&
      suggestion !== 'stand'
    ) {
      setSuggestion('stand')
    }

    //Always hit with 8 or below
    if (
      (player === '3' ||
        player === '4' ||
        player === '5' ||
        player === '6' ||
        player === '7' ||
        player === '8') &&
      suggestion !== 'hit'
    ) {
      setSuggestion('hit')
    }

    //What to do with 9 total
    if (player === '9') {
      if (
        (dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'double'
      ) {
        setSuggestion('double')
      }

      if (
        (dealer === '2' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with 10 total
    if (player === '10') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9') &&
        suggestion !== 'double'
      ) {
        setSuggestion('double')
      }

      if ((dealer === '10' || dealer === '11') && suggestion !== 'hit') {
        setSuggestion('hit')
      }
    }

    //What to do with 12 total
    if (player === '12') {
      if (
        (dealer === '4' || dealer === '5' || dealer === '6') &&
        suggestion !== 'stand'
      ) {
        setSuggestion('stand')
      }

      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with 13 total
    if (player === '13') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'stand'
      ) {
        setSuggestion('stand')
      }

      if (
        (dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with 14 total
    if (player === '14') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'stand'
      ) {
        setSuggestion('stand')
      }

      if (
        (dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with 15 total
    if (player === '15') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'stand'
      ) {
        setSuggestion('stand')
      }

      if (
        (dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with 16 total
    if (player === '16') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'stand'
      ) {
        setSuggestion('stand')
      }

      if ((dealer === '7' || dealer === '8') && suggestion !== 'hit') {
        setSuggestion('hit')
      }
    }

    //What to do with soft 13 total
    if (player === 'Soft 13') {
      if ((dealer === '5' || dealer === '6') && suggestion !== 'double') {
        setSuggestion('double')
      }

      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with soft 14 total
    if (player === 'Soft 14') {
      if ((dealer === '5' || dealer === '6') && suggestion !== 'double') {
        setSuggestion('double')
      }

      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with soft 15 total
    if (player === 'Soft 15') {
      if (
        (dealer === '4' || dealer === '5' || dealer === '6') &&
        suggestion !== 'double'
      ) {
        setSuggestion('double')
      }

      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with soft 16 total
    if (player === 'Soft 16') {
      if (
        (dealer === '4' || dealer === '5' || dealer === '6') &&
        suggestion !== 'double'
      ) {
        setSuggestion('double')
      }

      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with soft 17 total
    if (player === 'Soft 17') {
      if (
        (dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'double'
      ) {
        setSuggestion('double')
      }

      if (
        (dealer === '2' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with soft 18 total
    if (player === 'Soft 18') {
      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '6') &&
        suggestion !== 'double'
      ) {
        setSuggestion('double')
      }

      if ((dealer === '7' || dealer === '8') && suggestion !== 'stand') {
        setSuggestion('stand')
      }

      if (
        (dealer === '9' || dealer === '10' || dealer === '11') &&
        suggestion !== 'hit'
      ) {
        setSuggestion('hit')
      }
    }

    //What to do with soft 19 total
    if (player === 'Soft 19') {
      if (dealer === '6' && suggestion !== 'double') {
        setSuggestion('double')
      }

      if (
        (dealer === '2' ||
          dealer === '3' ||
          dealer === '4' ||
          dealer === '5' ||
          dealer === '7' ||
          dealer === '8' ||
          dealer === '9' ||
          dealer === '10' ||
          dealer === '11') &&
        suggestion !== 'stand'
      ) {
        setSuggestion('stand')
      }
    }
  }
  return (
    <>
      {/* Shows suggestion once dealer has a face up card */}
      {suggestion !== '' && dealer !== '0' ? (
        <h2>You should probably {suggestion}.</h2>
      ) : null}
    </>
  )
}

export default Suggest
