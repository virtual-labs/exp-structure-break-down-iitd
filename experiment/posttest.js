
(function() {
    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");







    /////////////// MCQ below  ///////////////


    const myQuestions = [{
            question: "1. Unit Weight of concrete used is", 
            answers: {
                a: "25 KN/m3", 
                b: "25 KN ", 
                c: "2500 KN",
                d: "0.25 KG/m2", 
            },
            correctAnswer: "a" 
        },
                         
//       

        {
            question: "2. Maximum force at the centre of the trapezoidal slab", 
            answers: {
                a: "Weight of trapezoidal slab x (width of slab / 2)", 
                b: "Weight of trapezoidal slab x (Length of slab / 2)",
                c: "Weight of trapezoidal slab x (width of slab / 3)", 
                d: "Weight of trapezoidal slab x (width of slab / 1.2)",
            },
            correctAnswer: "a" 
        },
                         
        {
            question: "3. Value for seismic zone used for 'moderate' and 'severe' earthquake", 
            answers: {
                a: "0.36 & 0.10", 
                b: "0.16 & 0.36", 
                c: "0.16 & 0.24", 
                d: "0.24 & 0.10", 
            },
            correctAnswer: "c" 
        },                 

        {
            question: "4. Response Reduction Factor considered for 'special moment resisting frames'" , 

            answers: {
                a: "5.0", 
                b: "3.2", 
                c: "5.5", 
                d: "3.0", 
            },
            correctAnswer: "d" 
        }, 

        {
            question: "5. For calculation of base shear 'W' is" , 

            answers: {
                a: "Weight of all the Slab + Columns", 
                b: "Total weight of the structure", 
                c: "Total weight of the Slabs", 
                d: "Seismic load of the structure", 
            },
            correctAnswer: "b" 
        }, 
        

         


        
    ];




    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();


