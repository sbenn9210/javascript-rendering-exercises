;(function () {
  // convert a nametag JavaScript object to an HTML string
  function buildNametagHTML (nametag) {
    // TODO: Your code goes here.
    return `
        <div class="d-flex align-items-center text-center mt-5">
            <div style="
            width: 200px;
            height: 100px;
            background-color: #FF00FF;
            ">
            <p>${nametag}</p>
            </div>
        </div>
    `
  }

  // here we have five nametags, each represented by a JavaScript String,
  // all collected into an Array.
  const nametagsData = [
    'Kamilah',
    'Kim',
    'Stuart',
    'Ron',
    'Krissy'
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.
  let content = document.getElementById('content')
  let nametagBtn = document.getElementById('nametagsBtn')

  function clickNametagsBtn () {
    content.innerHTML =`<div class="d-flex flex-column align-items-center">
      ${nametagsData.map(name => buildNametagHTML(name)).join('')}
      </div>` 
  }

  nametagBtn.addEventListener('click', clickNametagsBtn)
})()
