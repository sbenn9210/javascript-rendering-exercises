;(function () {
  // convert a rectangle JavaScript object to an HTML string
  function buildRectangleHTML (rectangle) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5" style="
          width: ${rectangle.width}px;
          height: ${rectangle.height}px;
          background-color: ${rectangle.color};
        ">
        </div>
    `
  }

  // here we have a rectangle, represented by a JavaScript Object
  const rectangleData = {
    width: 200,
    height: 100,
    color: '#FF00FF'
  }

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('rectangleBtn')

  function clickRectangleBtn () {
    
    // using the buildRectangleHTML function, create the HTML for the rectangleData
    let rectangleHTML = buildRectangleHTML(rectangleData)
    // and then put them into the <div id=content> element
    contentElement.innerHTML = rectangleHTML
    // TODO: your code goes here
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickRectangleBtn)
})()
