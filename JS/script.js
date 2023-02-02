// Selecting body
let body = document.querySelector("body");

// Create <span> for timer on top of viewport
let span = document.createElement("span");
// Set attribute for span
span.setAttribute("id", "timer");
// Appending <span> to body
body.appendChild(span);

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// ---> Creating login form
// Create <div> tag
let loginBox = document.createElement("div");
// Set class for loginBox
loginBox.classList.add("loginBox");
// Appending loginBox to body
body.appendChild(loginBox);

// Create <h2> for title
let h2 = document.createElement("h2");
// Set text for title
h2.innerText = "IQ TEST";
// Appendig <h2> tag to loginBox
loginBox.appendChild(h2);

// Craeting <form> tag
let form = document.createElement("form");
// Set attribute for form
form.setAttribute("action", "#");
// Appending form to loginBox
loginBox.appendChild(form);

// Create <div> tag for user information
let userBox = document.createElement("div");
// Set class for userBox
userBox.classList.add("userBox");
// Appending userBox to form
form.appendChild(userBox);

// Creating <input> tag
let input = document.createElement("input");
// Set class for input
input.classList.add("userName");
// Set attribute for input
input.setAttribute("type", "text");
// Appending input to userBox
userBox.appendChild(input);

// Creating label for input
let label = document.createElement("label");
// Set text for label
label.innerText = "Name";
// Appending label to userBox
userBox.appendChild(label);

// Craeting <a> tag for submit button animation
let a = document.createElement("a");
// Craeting 4 spans for animation with loop
for (let x = 0; x < 4; x++) {
  let span = document.createElement("span");
  // Appending span to a
  a.appendChild(span);
}

// Creating submit button
let submit = document.createElement("input");
// Set attribute for submit button
submit.setAttribute("type", "submit");
// Appending submit button to a
a.appendChild(submit);

// Appending a to form
form.appendChild(a);

// Creating <p> tag
let p = document.createElement("p");
// Set text for p
p.innerText = "* IQ test will start after submitting name *";
// Appending p to loginBox
loginBox.appendChild(p);

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Create <section> tag for test
let testSection = document.createElement("section");
// Adding testSection to body
body.appendChild(testSection);
// Create loop to create 30 container page
for (let i = 1; i <= 30; i++) {
  // Create <div> tag for container
  let testContainer = document.createElement("div");
  // Set class for All testContainer
  testContainer.classList.add("testContainer");
  // Set class for testContainer one by one
  testContainer.classList.add("container" + [i]);

  // Appending testContainer to testSection
  testSection.appendChild(testContainer);

  // Create <div> tag for counter pages
  let pageCounter = document.createElement("div");
  // Set class for pageCounter
  pageCounter.classList.add("pageCounter");

  // Appending pageCounter to testContainer
  testContainer.appendChild(pageCounter);

  // Create span for pageCounter
  let pageCounterSpan = document.createElement("span");
  // Appending pageCounterSpan to pageCounter
  pageCounter.appendChild(pageCounterSpan);
  // Append span counter
  pageCounterSpan.append(i + "/30");

  // Create <div> tag for question test
  let questionTest = document.createElement("div");
  // Set class for All questionTest
  questionTest.classList.add("questionTest");
  // Set class for questionTest one by one
  questionTest.classList.add("test" + i);
  // Appending questionTest to testContainer
  testContainer.appendChild(questionTest);

  // Create <img> for test question
  let testImg = document.createElement("img");
  // Set attributes for one by one of <img> tag
  testImg.setAttribute("src", "Images/" + [i] + "/test" + [i] + ".png");
  // Appending testImg to questionTest
  questionTest.appendChild(testImg);

  // Create <div> tag for answer box
  let answerBox = document.createElement("div");
  // Set class for answer box
  answerBox.classList.add("answerBox");
  // Set class for test answer one by one
  answerBox.classList.add("answerBox" + [i]);
  // Appending answerBox to testContainer
  testContainer.appendChild(answerBox);

  // Create conditional command for test answer
  if (i <= 12) {
    // loop for question one to twelve
    for (let j = 1; j <= 6; j++) {
      // Creating <img> tag for test answer
      let option = document.createElement("img");
      option.classList.add("option");
      option.setAttribute(
        "src",
        "Images/" + [i] + "/" + [i] + "-" + [j] + ".png"
      );
      answerBox.appendChild(option);
    }
  } else {
    for (let j = 1; j <= 8; j++) {
      let option = document.createElement("img");
      option.classList.add("option");
      option.setAttribute(
        "src",
        "Images/" + [i] + "/" + [i] + "-" + [j] + ".png"
      );
      answerBox.appendChild(option);
    }
  }
}

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Create <section> tag for end page
let endPage = document.createElement("div");
// Set class for section
endPage.classList.add("endPage");
// Apending endTime to body
testSection.appendChild(endPage);

// Create <h3> tag
let h3 = document.createElement("h3");
// Appending <h3> to end page
endPage.appendChild(h3);
// Adding text to h3
h3.innerHTML = "Your Time Is Up !";

// Create <img> tag
let image = document.createElement("img");
// Set attributes to image
image.setAttribute("src", "../Images/Time-Up.png");
// Apending image to endTime
endPage.appendChild(image);

let scoreMessage = document.createElement("span");
endPage.appendChild(scoreMessage);

// endTime assumption style
endPage.style.display = "none";

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Selecting and adding class to corroct answer
// Test 1
document
  .querySelector(".answerBox1 img:nth-child(3)")
  .classList.add("correctAnswer");
// Test 2
document
  .querySelector(".answerBox2 img:nth-child(1)")
  .classList.add("correctAnswer");
// Test 3
document
  .querySelector(".answerBox3 img:nth-child(5)")
  .classList.add("correctAnswer");
// Test 4
document
  .querySelector(".answerBox4 img:nth-child(5)")
  .classList.add("correctAnswer");
// Test 5
document
  .querySelector(".answerBox5 img:nth-child(2)")
  .classList.add("correctAnswer");
// Test 6
document
  .querySelector(".answerBox6 img:nth-child(1)")
  .classList.add("correctAnswer");
// Test 7
document
  .querySelector(".answerBox7 img:nth-child(2)")
  .classList.add("correctAnswer");
// Test 8
document
  .querySelector(".answerBox8 img:nth-child(2)")
  .classList.add("correctAnswer");
// Test 9
document
  .querySelector(".answerBox9 img:nth-child(2)")
  .classList.add("correctAnswer");
// Test 10
document
  .querySelector(".answerBox10 img:nth-child(6)")
  .classList.add("correctAnswer");
// Test 11
document
  .querySelector(".answerBox11 img:nth-child(4)")
  .classList.add("correctAnswer");
// Test 12
document
  .querySelector(".answerBox12 img:nth-child(1)")
  .classList.add("correctAnswer");
// Test 13
document
  .querySelector(".answerBox13 img:nth-child(4)")
  .classList.add("correctAnswer");
// Test 14
document
  .querySelector(".answerBox14 img:nth-child(7)")
  .classList.add("correctAnswer");
// Test 15
document
  .querySelector(".answerBox15 img:nth-child(2)")
  .classList.add("correctAnswer");
// Test 16
document
  .querySelector(".answerBox16 img:nth-child(3)")
  .classList.add("correctAnswer");
// Test 17
document
  .querySelector(".answerBox17 img:nth-child(1)")
  .classList.add("correctAnswer");
// Test 18
document
  .querySelector(".answerBox18 img:nth-child(6)")
  .classList.add("correctAnswer");
// Test 19
document
  .querySelector(".answerBox19 img:nth-child(5)")
  .classList.add("correctAnswer");
// Test 20
document
  .querySelector(".answerBox20 img:nth-child(8)")
  .classList.add("correctAnswer");
// Test 21
document
  .querySelector(".answerBox21 img:nth-child(4)")
  .classList.add("correctAnswer");
// Test 22
document
  .querySelector(".answerBox22 img:nth-child(4)")
  .classList.add("correctAnswer");
// Test 23
document
  .querySelector(".answerBox23 img:nth-child(7)")
  .classList.add("correctAnswer");
// Test 24
document
  .querySelector(".answerBox24 img:nth-child(6)")
  .classList.add("correctAnswer");
// Test 25
document
  .querySelector(".answerBox25 img:nth-child(4)")
  .classList.add("correctAnswer");
// Test 26
document
  .querySelector(".answerBox26 img:nth-child(7)")
  .classList.add("correctAnswer");
// Test 27
document
  .querySelector(".answerBox27 img:nth-child(7)")
  .classList.add("correctAnswer");
// Test 28
document
  .querySelector(".answerBox28 img:nth-child(3)")
  .classList.add("correctAnswer");
// Test 29
document
  .querySelector(".answerBox29 img:nth-child(2)")
  .classList.add("correctAnswer");
// Test 30
document
  .querySelector(".answerBox30 img:nth-child(8)")
  .classList.add("correctAnswer");

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// ---> Events
a.addEventListener("click", questionPage);

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// add variable to get submitted name
let submittedName;
//add event listener to get name change
document.querySelector(".userName").addEventListener("change", user);
// Get submitted name when name input changes
function user(event) {
  submittedName = event.target.value;
  localStorage.setItem("name", submittedName);
}

// Function for when form is submitted change display!
function questionPage(e) {
  e.preventDefault();
  document.querySelector(".loginBox").style.display = "none";
  document.querySelector(".container1").style.display = "flex";

  // Create timer for page
  // Selecting time according to secend
  let sec = 500;
  let time = setInterval(timer, 1000);

  function timer() {
    let timer = document.getElementById("timer");
    timer.innerHTML = "Time left : " + sec + "sec";
    sec--;

    for (let z = 0; z < 30; z++) {
      testBox = document.querySelectorAll(".testContainer");
      if (sec == -1) {
        clearInterval(time);
        testBox[z].style.display = "none";
        endPage.style.display = "flex";
      }
    }
  }
}
// Selecting answer image
let testAnswer = document.querySelectorAll(".answerBox img");
let score;
let output = [];
// loop for next container
for (let x = 0; x < testAnswer.length; x++) {
  // addEventListener to when click at answer goes to next page
  testAnswer[x].addEventListener("click", nextContainer);
  // Function to 'display: none' previous page and 'display: flex' next page
  function nextContainer() {
    // Varibale for selecting test answer parent element
    let container = testAnswer[x].parentElement;
    // 'display: none' previous page
    container.parentElement.style.display = "none";
    // Varibale for selecting next element of container
    let nextContainer = container.parentElement.nextElementSibling;
    // 'display: flex' next page
    nextContainer.style.display = "flex";
  }
}
// Selecting correct test answer
let correctAnswer = document.querySelectorAll(".correctAnswer");
// Adding correct test answer to one array
let correctArray = Array.from(correctAnswer);

testAnswer.forEach(function (img) {
  clickedItem = img.addEventListener("click", check);
});

// Clicked item
matchingAnswer = [];
let result;
let calc = [];
function check(clickedItem) {
  output.push(clickedItem.srcElement);

  matchingAnswer = correctArray.filter((e) => output.includes(e));

  localStorage.setItem("result", matchingAnswer.length);

  if (endPage.style.display == "flex") {
    let h4 = document.createElement("h4");
    h4.innerText = "Your Final Score!";
    endPage.appendChild(h4);
    h3.style.display = "none";
    image.style.display = "none";
    result = localStorage.getItem("result");
    submittedName = localStorage.getItem("name");
    calc = (20 * result) / 3;
    score = Math.round(calc);
    scoreMessage.append(
      "Dear " + submittedName + ", you scored  " + score + ",  "
    );
    if (score <= 90) {
      scoreMessage.append("Your IQ score is lower than average!");
    } else if (90 < score <= 109) {
      scoreMessage.append("You are in the middle class of intelligence.");
    } else if (109 < score <= 119) {
      score;
      scoreMessage.append("Your intelligence is higher than average.");
    } else if (119 < score <= 129) {
      scoreMessage.append("Congratulations! you are smart");
    } else if (129 < score <= 144) {
      scoreMessage.append("The world needs brilliant people like you");
    } else if (144 < score) {
      scoreMessage.append("Wonderful! you are a gifted");
    }
  }
}
