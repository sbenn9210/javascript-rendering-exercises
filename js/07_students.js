;(function () {
  // convert a student JavaScript object to an HTML string
  function buildStudentHTML (student) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <div style="
              width: 300px;
              height: 300px;
              background: red;
            ">
            <p>${student.name}</p>
            <p>${student.isPresent}</p>
            </div>
        </div>
    `
  }

  // here we have five students, each represented by a JavaScript Object,
  // all collected into an Array.
  const studentsData = [
    {
      name: 'Kamilah',
      isPresent: true
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

  let content = document.getElementById('content')
  let btn = document.getElementById('studentsBtn')

  btn.addEventListener('click', studentFunction)
  function studentFunction () {
    let data = studentsData.map(student => {
       return buildStudentHTML(student)
    })
    content.innerHTML = data.join('')
  }

})()
