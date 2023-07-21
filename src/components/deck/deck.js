function Deck (numDecks = 1) {
  const values = [
    'A',
    'K',
    'Q',
    'J',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2'
  ]

  const suits = ['♠', '♥', '♣', '♦']

  let deck = []

  let decks = 0

  //Creates full decks of 52 cards depending on numDecks
  while (decks < numDecks) {
    for (const suit of suits) {
      for (const value of values) {
        deck.push(value.concat(suit))
      }
    }
    decks++
  }

  return deck
}

export default Deck
