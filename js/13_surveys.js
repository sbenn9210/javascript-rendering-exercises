;(function () {
  // convert a survey JavaScript object to an HTML string
  function buildSurveyHTML (survey) {
    // TODO: Your code goes here.
    return `
       <div>
        <h2>${survey.title}</h2>
        <span>${buildSurveyInputs(survey.fields)}</span>
        <button class='btn btn-primary render-button mt-1'>${survey.submitButtonText}</button>
       </div>
    `
  }

  function buildSurveyInputs (fields) {
    return fields.map(field => {
      return `
      <p>${field.label}</p>
      ${field.options ?  buildSurveyOptions(field.options, field.type) : 
      `<input type=${field.type}>`
      }
      
      `
    }).join('')
  }

  function buildSurveyOptions (options, type) {
    return options.map(option => {
      return `
      <span>
      <input type=${type}>
      <label>${option}</label>
      </span>
      `
    }).join('')
  }



  // here we have four surveys, each represented by a JavaScript Object,
  // all collected into an Array.
  const surveysData = [
    {
      title: 'Movie Goer Survey',
      fields: [
        {
          label: 'Have you gone to the movies in the last month?',
          type: 'radio',
          options: [
            'yes',
            'no'
          ]
        },
        {
          label: 'On a scale of 1 to 5, Did you enjoy your last theater experience?',
          type: 'radio',
          options: [
            1,
            2,
            3,
            4,
            5
          ]
        }
      ],
      submitButtonText: 'Submit Survey'
    },
    {
      title: 'DigitalCrafts Survey',
      fields: [
        {
          label: 'Are you currently enrolled in a DigitalCrafts class?',
          type: 'radio',
          options: [
            'yes',
            'no'
          ]
        },
        {
          label: "In 3000 words or more, explain what's so great about Adam?",
          type: 'text'
        }
      ],
      submitButtonText: "I'm Done"
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  let btn = document.getElementById('surveysBtn')
  let content = document.getElementById('content')

  btn.addEventListener('click', () => {
    content.innerHTML = surveysData.map(survey => 
      buildSurveyHTML(survey)
    ).join('')
  })
})()
