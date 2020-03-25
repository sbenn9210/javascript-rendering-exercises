;(function () {
  // convert a rectangle JavaScript object to an HTML string
  function buildRectangleHTML (rectangle) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <div style="
              width: ${rectangle.width}px;
              height: ${rectangle.height}px;
              background-color: ${rectangle.color};
            ">
            </div>
        </div>
    `
  }

  // here we have two rectangles, each represented by a JavaScript Object
  const orangeRectangle = {
    width: 100,
    height: 200,
    color: '#ffa500'
  }

  const blueRectangle = {
    width: 200,
    height: 100,
    color: '#4731d9'
  }

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('twoRectanglesBtn')

  function clickRectanglesBtn () {
    // using the buildRectangleHTML function, create the HTML for the orangeRectangle and blueRectangle
    // and then put them into the <div id=content> element
    var orangeRecHTML = buildRectangleHTML(orangeRectangle)
    var blueRecHTML = buildRectangleHTML(blueRectangle)
    // TODO: your code goes here

    contentElement.innerHTML = (orangeRecHTML + blueRecHTML)
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickRectanglesBtn)
})()
