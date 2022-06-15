// i tried browserify, jsdom, htmlparser and I couldn't figure it out

// formating the html page
const htmlFormat = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
    <header class="mb-5">
        <nav class=" navbar navbar-light bg-danger">
            <span class="navbar-brand mb-0 h1 mx-auto text-white"><h1>Navbar</h1></span>
        </nav>
    </header>

    <div class="row justify-content-center" id="content">

    </div>
    <script src="index.js"></script>
</body>
</html>`;

// adding the content to the html page
// manager
function addingManager() {
    const managerDiv = document.createElement("div");
      managerDiv.className = 'col-3 mb-5 mt-5';
      managerDiv.innerHTML = `
      <h2 class="bg-primary">${data.managerName} <br> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16"><path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/></svg>Manager</h2>
      <h2 class="bg-light">ID: ${data.managerID} <br> Email: ${data.managerEmail} <br> ${data.officeNumber} </h2>
      `;
      document.getElementById('content').appendChild(managerDiv);
  }
  // engineer
  function addingEngineer() {
    const engineerDiv = document.createElement('div');
      engineerDiv.className = 'col-3 mb-5 mt-5';
      engineerDiv.innerHTML = `
      <h2 class="bg-primary">${engineerAnswers.engineerName} <br> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/></svg>Engineer</h2>
      <h2 class="bg-light">ID: ${engineerAnswers.engineerID} <br> Email: ${engineerAnswers.engineerEmail} <br> Github: ${engineerAnswers.github}</h2>
      `;
      document.getElementById('content').appendChild(engineerDiv);
  }
  // intern
  function addingIntern() {
    const internDiv = document.createElement('div');
      internDiv.className = 'col-3 mb-5 mt-5';
      internDiv.innerHTML = `
      <h2 class="bg-primary">${internAnswers.internName} <br> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/></svg>Intern</h2>
      <h2 class="bg-light">ID: ${internAnswers.internID} <br> Email: ${internAnswers.internEmail} <br> School: ${internAnswers.school} </h2>
      `;
      document.getElementById('content').appendChild(internDiv);
  }

module.exports = {htmlFormat, addingManager, addingEngineer, addingIntern};