
let questions = [
  {
    id: 1,
    question: "How did you hear about our website?",
    options: [
      "Television",
      "Newspaper",
      "Radio",
      "Other"
    ]
  },
  {
    id: 2,
    question: "Please select your age group.",
    options: [
      "Under 18",
      "18-24",
      "24-50",
      "Above 50"
    ]
  },
  {
    id: 3,
    question: "How would you rate your experience with our product?",
    options: [
      "Satisfied",
      "very Satisfied",
      "Disatisfied",
      "very Disatisfied"
    ]
  },
  {
    id: 4,
    question: "I'm satisfied with the investment my organisation makes in education.",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "very Disagree"
    ]
  }
];

let question_count = 0;

window.onload = function() {
  show(question_count);

};

function next() {   
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }
  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
