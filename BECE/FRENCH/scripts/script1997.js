
        const quizData = [
    {
        Num:"1",
    question: " Je veux savoir l’heure, montre-moi ta …………..",
    a: "cloche",
    b: "montre",
    c: "règle",
    d: "chaine",
    correct: "b",
    },
    {
        Num:"2",
    question: "Les cheveux sont sur ………….",
    a: "la langue",
    b: "la main",
    c: "les dents",
    d: "la tête",
    correct: "d",
    },
    {
        Num:"3",
    question: "Les enfants ……….. lentement.",
    a: "marche",
    b: "marches",
    c: "marchent",
    d: "marcher",
    correct: "c",
    },
    {
        Num:"4",
    question: "Regardez les filles, elles ………….. contentes.",
    a: "ont",
    b: "sont",
    c: "êtes",
    d: "sommes",
    correct: "b",
    },
    {
        Num:"5",
    question: "Tu ………….. un beau stylo ! Donne- le moi",
    a: "as",
    b: "à",
    c: "est",
    d: "es",
    correct: "a",
    },
    {
        Num:"6",
    question: "Est-ce que vous ………… vos devoir.",
    a: "fais",
    b: "fait",
    c: "faites",
    d: "font",
    correct: "c",
    },
    {
        Num:"7",
    question: "Les élèves ………. à haute voix.",
    a: "parles",
    b: "parlent",
    c: "parlons",
    d: "parle",
    correct: "b",
    },
    {
        Num:"8",
    question: "L’enfant ………….. bonjour à ses parents.",
    a: "dis",
    b: "dites",
    c: "dit",
    d: "disent",
    correct: "c",
    },
    {
        Num:"9",
    question: "Nous ………….. un bon repas.",
    a: "mangeons",
    b: "mangent",
    c: "mange",
    d: "manges",
    correct: "a",
    },
    {
        Num:"10",
    question: "Les ………….. filles ont de belles robes",
    a: "petits",
    b: "petite",
    c: "petites",
    d: "petit",
    correct: "c",
    },
    {
        Num:"11",
    question: "La voiture de mon père est…………….",
    a: "vert",
    b: "vertes",
    c: "verts",
    d: "verte",
    correct: "d",
    },
    {
        Num:"12",
    question: "Kofi frappe son petit frère parce qu’il ne ………. aime pas.",
    a: "les",
    b: "le",
    c: "l'",
    d: "la",
    correct: "c",
    },
    {
        Num:"13",
    question: "Où est mon livre de français ? Je ne ……….. trouve pas",
    a: "la",
    b: "le",
    c: "lui",
    d: "les",
    correct: "b",
    },
    {
        Num:"14",
    question: "Maman parle à ses enfants. Elle ………. parle.",
    a: "les",
    b: "leur",
    c: "la",
    d: "lui",
    correct: "b",
    },
    {
        Num:"15",
    question: "Les enfants jouent …………football.",
    a: "aux",
    b: "en",
    c: "du",
    d: "au",
    correct: "d",
    },
    {
        Num:"16",
    question: "Combien de stylos avez-vous, mes élèves ? Nous ……….. avons deux",
    a: "y",
    b: "les",
    c: "en",
    d: "des",
    correct: "c",
    },
    {
        Num:"17",
    question: "S’il te plait, donne-moi ………… règle.",
    a: "son",
    b: "ta",
    c: "en",
    d: "ton",
    correct: "b",
    },
    {
        Num:"18",
    question: "………………… pantalon est sale. ",
    a: "Ton",
    b: "Sa",
    c: "Ma",
    d: "Ta",
    correct: "a",
    },
    {
        Num:"19",
    question: "Quel temps fait-il ? Il fait ………….temps",
    a: "joli",
    b: "beau",
    c: "sale",
    d: "l'heure",
    correct: "b",
    },
    {
        Num:"20",
    question: "Kwame à mal à la tête. Il doit prendre …………",
    a: "de la bière",
    b: "des comprimés",
    c: "de l'eau",
    d: "du sirop",
    correct: "b",
    },
    {
        Num:"21",
    question: "Le cultivateur prend son coupe-coupe et va……………",
    a: "à l’école",
    b: "à la plage",
    c: "à l’hôpital",
    d: "au champ",
    correct: "d",
    },
    {
        Num:"22",
    question: "Serwaa mange beaucoup. Elle est ………..",
    a: "gourmante",
    b: "intelligente",
    c: "bavarde",
    d: "sérieuse",
    correct: "a",
    },
    {
        Num:"23",
    question: "Ama parle très ……… parce qu’elle est malade",
    a: "gentiment",
    b: "doucemnt",
    c: "bien",
    d: "poliment",
    correct: "b",
    },
    {
        Num:"24",
    question: "Le frère de mon père est mon …………",
    a: "cousin",
    b: "neveu",
    c: "père",
    d: "oncle",
    correct: "d",
    },
    {
        Num:"25",
    question: " Paul prend le petit déjeuner ……………",
    a: "le soir",
    b: "à midi",
    c: "le matin",
    d: "la soirée",
    correct: "c",
    },
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const questionNumber = document.getElementById("questionNumber");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;

    const deselectAnswers = () => {
        answerElements.forEach((answer) => (answer.checked = false));
        };
        const getSelected = () => {
        let answer;
        answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
        });
        return answer;
        };
        const loadQuiz = () => {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
        questionNumber.innerText = currentQuizData.Num;
        };
        loadQuiz();
        submitButton.addEventListener("click", () => {
        const answer = getSelected();
        if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="history.go(0)">Play Again</button>
        ` 
        //location.reload(true);
        setTimeout(function () { location.reload(true); }, 50000);
        }
    
        }
        });
   



