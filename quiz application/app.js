var quizStartBtn = document.getElementsByClassName('quizStartBtn');
var quizForm = document.getElementsByClassName('quizForm');
var quizBtn = document.getElementById("quizBtn");


var setUserName = document.getElementById("setUserName")
var setEmail = document.getElementById("setEmail")

function onSubmit() {
    var FormName = document.getElementById('FormName');
    var FormEmail = document.getElementById('FormEmail');
    var FormCell = document.getElementById('FormCell');
    var FormSchool = document.getElementById('FormSchool');
    var FormNameError = document.getElementById("FormNameError")
    var FormEmailError = document.getElementById("FormEmailError")
    var FormCellError = document.getElementById("FormCellError")
    var FormSchoolError = document.getElementById("FormSchoolError")

    if (FormName.value != "") {
        if (!(FormName.value.length < 3)) {
            FormNameError.innerHTML = ""
            FormName.style.borderBottom = "2px solid green"
        }
        else {
            FormNameError.innerHTML = "Please enter a correct Name.."
            FormName.style.borderBottom = "2px solid red"

        }
    }

    else {
        FormNameError.innerHTML = "Please enter  Your Name.."

    }

    var email_valid = /^[a-zA-Z0-9_.]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}$/

    if (FormEmail.value != "") {
        if (FormEmail.value.match(email_valid)) {
            FormEmailError.innerHTML = ""
            FormEmail.style.borderBottom = "2px solid green"
        }
        else {
            FormEmailError.innerHTML = "Please enter a correct Email.."
            FormEmail.style.borderBottom = "2px solid red"

        }
    }

    else {
        FormEmailError.innerHTML = "Please enter  Your Email.."

    }

    if (FormCell.value != "") {
        if (FormCell.value.length == 11) {
            FormCellError.innerHTML = ""
            FormCell.style.borderBottom = "2px solid green"

        }
        else {
            FormCellError.innerHTML = "Please enter a correct Cell #.."
            FormCell.style.borderBottom = "2px solid red"

        }
    }
    else {
        FormCellError.innerHTML = "Please enter a  Cell #.."
        FormCell.style.borderBottom = "2px solid red"

    }

    if (FormSchool.value != "") {
        if (FormSchool.value.length > 2) {
            FormSchoolError.innerHTML = ""
            FormSchool.style.borderBottom = "2px solid green"

        }
        else {
            FormSchoolError.innerHTML = "Please enter a correct Institute Name.."
            FormSchool.style.borderBottom = "2px solid red"

        }
    }
    else {
        FormSchoolError.innerHTML = "Please enter your Institute Name.."
        FormSchool.style.borderBottom = "2px solid red"

    }

    if (FormNameError.innerHTML == "" && FormEmailError.innerHTML == "" && FormCellError.innerHTML == "" && FormSchoolError.innerHTML == "") {
        quizForm[0].classList.add("hide");
        quizStartBtn[0].classList.remove("hide")
        setUserName.innerText = `Name: ${FormName.value}`
        setEmail.innerText = `Email: ${FormEmail.value}`
    }

}




var questions = [
  {
    question: " I like ___ blue T-shirt over there better than ___ red one.",
    option1: "the,the",
    option2: "an,the",
    option3: "X.the",
    corrAnswer: " the,the"
  },
  {
    question: " Their car does 150 miles __ hour.",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "an"
  }, {
    question: " Where's ___  USB drive I lent you last week?",
    option1: "a",
    option2: "X",
    option3: "the",
    corrAnswer: "the"
  }, {
    question: "Do you still live in ___ Bristol?",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "X"
  }, {
    question: "Is your mother working in ___ old office building?",
    option1: "an",
    option2: "a",
    option3: "X",
    corrAnswer: "an"
  }, {
    question: " Carol's father works as __ electrician.",
    option1: "X",
    option2: "a",
    option3: "an",
    corrAnswer: "an"
  }, {
    question: " The tomatoes are 99 pence __ kilo.",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "a"
  }, {
    question: " What do you usually have for __ breakfast? ",
    option1: "a",
    option2: "X",
    option3: "the",
    corrAnswer: "X"
  }, {
    question: " Ben has __ terrible headache.",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "a"
  }, {
    question: "After this tour you have ___ whole afternoon free to explore the city.",
    option1: "a",
    option2: "an",
    option3: "the",
    corrAnswer: "the"
  }
]

var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 2;
var sec = 0;
var timerInterval;

timerInterval = setInterval(function () {
  timer.innerHTML = `${min}:${sec < 10 ? "0" + sec : sec}`;
  --sec;
  if (sec < 0) {
    --min;
    sec = 59;
    if (min < 0) {
      clearInterval(timerInterval);
      min = 2;
      sec = 0;
      nextQuestion();
    }
  }
}, 1000);

function nextQuestion() {
  var getOptions = document.getElementsByName("option");

  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedQues = questions[index - 1].question;
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAnswer = questions[index - 1]["corrAnswer"];

      if (selectedAns == correctAnswer) {
        score++;
      }
    }

    getOptions[i].checked = false;
  }
  btn.disabled = true;

  // if (index > questions.length - 1) {
  //   clearInterval(timerInterval);
  //   Swal.fire({
  //     title: "Good job!",
  //     text: "your percentage is: " + ((score / questions.length) * 100).toFixed(2),
  //     icon: "success",
  //   }).then(() => {
  //     window.location.href = "index.html";
  //   });
  // } else {
  //   ques.innerText = questions[index].question;
  //   opt1.innerText = questions[index].option1;
  //   opt2.innerText = questions[index].option2;
  //   opt3.innerText = questions[index].option3;
  //   index++;
  //   min = 2;
  //   sec = 0;
  // }
  if (index > questions.length - 1) {
    clearInterval(timerInterval);
    const percentage = (score / questions.length) * 100;
    if (percentage >= 30) {
        Swal.fire({
            title: "Good job!",
            text: "Your percentage is: " + percentage.toFixed(2),
            icon: "success",
        }).then(() => {
            window.location.href = "index.html";
        });
    } else {
        Swal.fire({
            title: "Oops!",
            text: "Your percentage is below 30%. You need to study more!",
            icon: "error",
        }).then(() => {
            window.location.href = "retry.html";
        });
    }
} else {
    ques.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
    min = 2;
    sec = 0;
}

  
}

function target() {
  var btn = document.getElementById("btn");

  btn.disabled = false;
}