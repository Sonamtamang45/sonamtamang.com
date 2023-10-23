var greeting = document.querySelector('.greeting');
var name = document.querySelector('.Name-type');

function changeGreeting() {
  // Fade out the greeting text
  greeting.style.transition = 'opacity 1s';
  greeting.style.opacity = 0;

  setTimeout(function () {
    var currentText = greeting.innerText;

    // Change the text color based on the current text
    if (currentText === 'Hi') {
      greeting.style.color = 'black';
    } else if (currentText === 'नमस्ते') {
      greeting.style.color = 'green';
    } else if (currentText === 'Hello') {
      greeting.style.color = 'red';
    }

    // Change the text of the greeting element
    greeting.innerText =
      currentText === 'Hi'
        ? 'नमस्ते'
        : currentText === 'नमस्ते'
        ? 'Hello'
        : 'Hi';

    // Fade in the greeting text
    setTimeout(function () {
      greeting.style.transition = 'opacity 0.5s';
      greeting.style.opacity = 1;
    }, 1000); // Change this delay to match the transition duration (1 second in this example)
  }, 1000); // Change this delay to match the transition duration
}

setInterval(changeGreeting, 2500);
