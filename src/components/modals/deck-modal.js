import React from 'react'
import ReactModal from 'react-modal'

import ShowDeck from '../deck/show-deck'

ReactModal.setAppElement('#root')

function DeckModal (props) {
  //Creating styles for the modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '910px',
      backgroundColor: '#427e60',
      border: 'none'
    },
    overlay: {
      backgroundColor: 'rgba(1, 1, 1, 0.75)'
    }
  }

  //Passing the picked card up to parent
  function handleCardSelection (card) {
    props.handleCardSelection(card)
  }

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={() => {
        props.handleModalClose()
      }}
      isOpen={props.modalIsOpen}
    >
      <ShowDeck handleCardSelection={handleCardSelection} />
    </ReactModal>
  )
}

export default DeckModal
