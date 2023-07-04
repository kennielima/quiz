const questions = [
  {
    question: "Who is the finest girl in Nosimot",
    options: [
      { answer: "Goodness" },
      { answer: "Kennielima", isCorrect: true },
      { answer: "Kiki" },
    ],
  },
  {
    question: "What is my favourite meal",
    options: [
      { answer: "Plantain" },
      { answer: "Amala" },
      { answer: "Pussy", isCorrect: true },
    ],
  },
  {
    question: "What is my worst nightmare",
    options: [
      { answer: "Failure" },
      { answer: "Stress" },
      { answer: "Poverty", isCorrect: true },
    ],
  }
];

let section = document.getElementById("quiz")
const quizOL = document.createElement("ol");
const next = document.getElementById("button");

let currentQ = 0;
next.addEventListener('click', showQ)

function showQ() {
        const questionLi = document.createElement("li");
        questionLi.textContent = questions[currentQ].question;


        const answersUl = document.createElement("ul");
        for (let option of questions[currentQ].options) {
            const optionli = document.createElement("li");
            optionli.textContent = option.answer;
            answersUl.appendChild(optionli);
            const clickButton = document.createElement("button");
            clickButton.textContent = "select";
            clickButton.className = "clickid"
            optionli.appendChild(clickButton);
        let allbuttons = document.getElementsByClassName("clickid");

            clickButton.addEventListener('click',() =>{
                for (let button of allbuttons){
                    // for (let i=0; i<allbuttons.length; i++){
                    button.disabled = true;
                    // console.log(allbuttons[3])
                }
                if (option.isCorrect === true){
                    const answer = document.createElement("span");
                    answer.textContent = "✅";
                    optionli.appendChild(answer);
                } else {
                    const answer = document.createElement("span");
                    answer.textContent = "❌";
                    optionli.appendChild(answer);
                }
            })
        }

        questionLi.appendChild(answersUl);
        quizOL.appendChild(questionLi);
        // section.innerHTML = "";
        section.lastChild.remove()
        // debugger
        section.appendChild(quizOL);
        currentQ++;
    };

showQ();

