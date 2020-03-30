;(function () {
  // convert a pokerhand JavaScript object to an HTML string
  function buildPokerHandHTML (pokerHand) {
    // TODO: Your code goes here.
    // HINT: utilize the (conveniently named) images in the ./images/cards/
    //       directory to render each card in the hand.
    return `
        <div class="text-center mt-5">
            <img src=../images/cards/${pokerHand.value + pokerHand.suit}.png>
        </div>
    `
  }

  // here we have a pokerHand, represented by a JavaScript Array,
  // each card represented by an Object.
  const pokerHandData = [
    {
      value: 'K',
      suit: 'C'
    },
    {
      value: 'K',
      suit: 'D'
    },
    {
      value: '9',
      suit: 'S'
    },
    {
      value: '2',
      suit: 'H'
    },
    {
      value: '9',
      suit: 'H'
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  let pokerHandBtn = document.getElementById('pokerHandsBtn')
  let content = document.getElementById('content')

  pokerHandBtn.addEventListener('click', function() {
    let data = pokerHandData.map(hand => {
      return buildPokerHandHTML(hand)
    })

    content.innerHTML = data.join('')
  })

})()
