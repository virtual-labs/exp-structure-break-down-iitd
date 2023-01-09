/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Which code is used for seismic design  of the structure?", ///// Write the question inside double quotes
            answers: {
                a: "IS 1893 (Part 1)", ///// Write the option 1 inside double quotes
                b: "IS 456-200", ///// Write the option 2 inside double quotes
                c: "IS 875 (Part 1)", ///// Write the option 1 inside double quotes
                d: "IS 875 (Part 3)", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "2. Method that cannot be used to determine the forces in the members of frames is", ///// Write the question inside double quotes
            answers: {
                a: "Moment Distribution method", ///// Write the option 1 inside double quotes
                b: "Method of sections", ///// Write the option 2 inside double quotes
                c: "Graphical method", ///// Write the option 1 inside double quotes
                d: "Method of joints", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "3. In a Linear elastic structural element the stiffness is _____ .", ///// Write the question inside double quotes
            answers: {
                a: "Directly proportional to flexibility", ///// Write the option 1 inside double quotes
                b: "Inversely proportional to flexibility", ///// Write the option 2 inside double quotes
                c: "Equal to flexibility", ///// Write the option 1 inside double quotes
                d: "Stiffness and flexibility are not related", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "4. Which of the following assumptions is not made while analysis of a perfect frame ", ///// Write the question inside double quotes
            answers: {
                a: "All the members are pin jointed", ///// Write the option 1 inside double quotes
                b: "Self weight of the member is neglected", ///// Write the option 2 inside double quotes
                c: "All members are loaded at the centre ", ///// Write the option 1 inside double quotes
                d: " All members are subjected to either compression  or tension", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "5. The Ratio of Shear stress to shear strain is known as", ///// Write the question inside double quotes
            answers: {
                a: "Modulus of Elasticity", ///// Write the option 1 inside double quotes
                b: "Bulk Modulus", ///// Write the option 2 inside double quotes
                c: "Poisson's Ratio", ///// Write the option 1 inside double quotes
                d: "Modulus of Rigidity", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
