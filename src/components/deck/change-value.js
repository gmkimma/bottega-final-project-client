//Converting facecards to a numerical value
function changeCardValue (cardValue) {
  if (cardValue === '') {
    return '0'
  }
  if (cardValue === 'K' || cardValue === 'Q' || cardValue === 'J') {
    return '10'
  }
  if (cardValue === 'A') {
    return '11'
  }
  return cardValue
}

export default changeCardValue
