const quizData = [
    {
        question: "What is the primary goal of artificial intelligence (AI)?",
        a: "To create machines that can perform tasks that typically require human intelligence.",
        b: "To design algorithms that can solve complex mathematical problems.",
        c: "To develop hardware that can process data at high speeds.",
        d: "To build user-friendly interfaces for software applications.",
        correct: "a",
    },
    {
        question: "Which of the following is NOT a type of machine learning?",
        a: "Supervised Learning",
        b: " Unsupervised Learning",
        c: "Reinforcement Learning",
        d: "Interactive Learning",
        correct: "d",
    },
    {
        question: "In supervised learning, what are the two main types of tasks?",
        a: "Clustering and Classification",
        b: "Classification and Regression",
        c: "Regression and Clustering",
        d: " Dimensionality Reduction and Classification",
        correct: "b",
    },
    {
        question: "Which of the following algorithms is used for classification?",
        a: "Linear Regression",
        b: "K-Means",
        c: "Decision Trees",
        d: "Apriori",
        correct: "c",
    },
    {
        question: "Which of the following best describes reinforcement learning?",
        a: "Learning from a teacher who provides the correct answers.",
        b: "Learning from unlabeled data.",
        c: "Learning by interacting with an environment and receiving rewards or penalties.",
        d: "Learning by comparing data points to a known output.",
        correct: "c",
    },
    {
        question: "What is a neural network?",
        a: "A computing system inspired by the biological neural networks of animal brains.",
        b: "A network protocol used for data transfer.",
        c: "A type of database management system.",
        d: "A framework for developing web applications.",
        correct: "a",
    },
    {
        question: "Which of the following techniques is used to prevent overfitting in a machine learning model?",
        a: " Increasing the number of features",
        b: "Reducing the training dataset size",
        c: "Cross-validation",
        d: "Using linear activation functions",
        correct: "c",
    },
    {
        question: "What does the term 'hyperparameter' refer to in machine learning?",
        a: "Parameters that are learned from the training data.",
        b: "Parameters that are set before the learning process begins.",
        c: "Parameters that change dynamically during training.",
        d: "Parameters that are optimized during the training process.",
        correct: "b",
    },
    {
        question: "Which machine learning algorithm is used for both classification and regression tasks?",
        a: "Support Vector Machines (SVM)",
        b: "K-Means Clustering",
        c: " Principal Component Analysis (PCA)",
        d: " Linear Discriminant Analysis (LDA)",
        correct: "a",
    },
    {
        question: "In the context of natural language processing, what does the term 'tokenization refer to?",
        a: "The process of converting text into lowercase.",
        b: "The process of splitting text into individual words or phrases.",
        c: "The process of removing stopwords from text.",
        d: "The process of translating text from one language to another.",
        correct: "b",
    },
    {
        question: "What is the purpose of the activation function in a neural network?",
        a: "To initialize the weights of the network.",
        b: " To introduce non-linearity into the network.",
        c: "To update the weights during training.",
        d: "To optimize the learning rate of the network.",
        correct: "b",
    },
    {
        question: "Which of the following is an example of an ensemble learning technique?",
        a: "Linear Regression",
        b: "Decision Trees",
        c: "Random Forest",
        d: "K-Nearest Neighbors",
        correct: "c",
    },
    {
        question: "What does the term 'backpropagation' refer to in the context of neural networks?",
        a: "The process of initializing network weights.",
        b: "The algorithm used for optimizing the network architecture.",
        c: " The method used for adjusting weights based on error rates.",
        d: "The technique for splitting the dataset into training and testing sets.",
        correct: "c",
    },
    {
        question: "Which of the following is a common technique for dimensionality reduction?",
        a: "Random Forest",
        b: "Gradient Boosting",
        c: "Principal Component Analysis (PCA)",
        d: "Decision Trees",
        correct: "c",
    },
    {
        question: "In the context of convolutional neural networks (CNNs), what does 'pooling' refer to?",
        a: "Combining multiple models into a single model.",
        b: "Reducing the spatial dimensions of the input feature maps.",
        c: "Increasing the number of layers in the network.",
        d: "Applying activation functions to the network layers.",
        correct: "b",
    },
    {
        question: "Which of the following is a common evaluation metric for classification algorithms?",
        a: "Mean Absolute Error (MAE)",
        b: " R-squared",
        c: "F1 Score",
        d: "Sum of Squared Errors (SSE)",
        correct: "c",
    },
    {
        question: "In which scenario would you use a Recurrent Neural Network (RNN)?",
        a: "Image classification",
        b: "Time series prediction",
        c: "Linear regression",
        d: " Clustering analysis",
        correct: "b",
    },
    {
        question: "What is overfitting in machine learning?",
        a: "When the model performs well on the training data but poorly on new, unseen data.",
        b: "When the model underperforms on both the training and test data.",
        c: "When the model has a high bias and a low variance.",
        d: " When the model uses too few features to make predictions.",
        correct: "a",
    },
    {
        question: "Which technique is used to handle missing data in a dataset?",
        a: "Normalization",
        b: "Imputation",
        c: "One-hot encoding",
        d: " Feature scaling",
        correct: "b",
    },
    {
        question: "To measure how well the model performs on unseen data.",
        a: "To measure how well the model performs on unseen data.",
        b: " To optimize the performance of the algorithm.",
        c: "To evaluate the difference between the predicted output and the actual output.",
        d: "To determine the number of layers in a neural network.",
        correct: "c",
    },
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});