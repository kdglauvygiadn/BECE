
        const quizData = [
    {
        Num:"1",
    question: "Amina mange …………arachides",
    a: "des",
    b: "de",
    c: "l'",
    d: "du",
    correct: "a",
    },
    {
        Num:"2",
    question: " ………… filles sont dans la salle de classe ?",
    a: "à la",
    b: "Aux",
    c: "Le",
    d: "Les",
    correct: "d",
    },
    {
        Num:"3",
    question: "Ma sœur va …………. marché tous les jours.",
    a: "à la",
    b: "aux",
    c: "le",
    d: "au",
    correct: "d",
    },
    {
        Num:"4",
    question: "Donne-moi ………..règle, Kofi.",
    a: "une",
    b: "un",
    c: "du",
    d: "le",
    correct: "a",
    },
    {
        Num:"5",
    question: "Il y a beaucoup……………..poissons dans le filet",
    a: "de",
    b: "un",
    c: "du",
    d: "le",
    correct: "a",
    },
    {
        Num:"6",
    question: "Papa Kwame …………… une belle maison",
    a: "ai",
    b: "a",
    c: "as",
    d: "ont",
    correct: "b",
    },
    {
        Num:"7",
    question: " ……………… professeur est gentil",
    a: "Ma",
    b: "Nos",
    c: "Mes",
    d: "Ton",
    correct: "d",
    },
    {
        Num:"8",
    question: "Monsieur Mensah………………. le chef du village",
    a: "est",
    b: "suis",
    c: "es",
    d: "sommes",
    correct: "a",
    },
    {
        Num:"9",
    question: "J’irai à la plage …………",
    a: "hier",
    b: " la semaine dernière",
    c: "demain",
    d: "l’année passée",
    correct: "c",
    },
    {
        Num:"10",
    question: "Quelle………….. dame !",
    a: "viel",
    b: "vieux",
    c: "vielles",
    d: "vielle",
    correct: "d",
    },
    {
        Num:"11",
    question: "Il a faim, il veut……………….",
    a: "manger",
    b: "sortir",
    c: "marcher",
    d: "boire",
    correct: "a",
    },
    {
        Num:"12",
    question: "Ils habitent…………… Abidjan.",
    a: "sur",
    b: "au",
    c: "à",
    d: "du",
    correct: "c",
    },
    {
        Num:"13",
    question: "Comment vas-tu ? …………..",
    a: "Je regarde la télévision",
    b: "Je mange des fruits",
    c: "Je vais bien, merci",
    d: "Je vais à la gare",
    correct: "c",
    },
    {
        Num:"14",
    question: ". …………… achète du riz.",
    a: "Ils",
    b: "Il",
    c: "Elles",
    d: "Nous",
    correct: "b",
    },
    {
        Num:"15",
    question: "Voici le livre. Je ………….donne à l’élève.",
    a: "le",
    b: "lui",
    c: "la",
    d: "les",
    correct: "a",
    },
    {
        Num:"16",
    question: "Où êtes-…………….. ?",
    a: "nous",
    b: "toi",
    c: "vous",
    d: "tu",
    correct: "c",
    },
    {
        Num:"17",
    question: "……………… avons une belle voiture.",
    a: "Vous",
    b: "Tu",
    c: "Il",
    d: "Nous",
    correct: "d",
    },
    {
        Num:"18",
    question: "La ……………. fille dort.",
    a: "grand",
    b: "petite",
    c: "petit",
    d: "gros",
    correct: "b",
    },
    {
        Num:"19",
    question: "…………. mère est très gentille.",
    a: "Son",
    b: "Ton",
    c: "Mon",
    d: "Ma",
    correct: "d",
    },
    {
        Num:"20",
    question: "Je travaille ………………champs",
    a: "dans",
    b: "en",
    c: "aux",
    d: "à",
    correct: "c",
    },
    {
        Num:"21",
    question: " Ibrahim …………… dans la cours",
    a: "jouent",
    b: "joues",
    c: "jouons",
    d: "joue ",
    correct: "d",
    },
    {
        Num:"22",
    question: ". …………. fille est malade.",
    a: "Celle",
    b: "Cet",
    c: "Ce",
    d: "Cette",
    correct: "d",
    },
    {
        Num:"23",
    question: "Pourquoi tu …………. dors pas ?",
    a: "le",
    b: "te",
    c: "lui",
    d: "ne",
    correct: "d",
    },
    {
        Num:"24",
    question: "Vous écrivez avec un …………",
    a: "sac",
    b: "crayon",
    c: "livre",
    d: "cahier",
    correct: "b",
    },
    {
        Num:"25",
    question: "Ama est très …………..",
    a: " fatigué",
    b: " fatiguée",
    c: " fatigue",
    d: " fatigués",
    correct: "b",
    },
    {
        Num:"26",
    question: "Il ……………. lève de bonne heure.",
    a: "se",
    b: "ce",
    c: "te",
    d: "me",
    correct: "a",
    },
    {
        Num:"27",
    question: " ………………… orange est très douce.",
    a: "De",
    b: "La",
    c: "Le",
    d: "L'",
    correct: "d",
    },
    {
        Num:"28",
    question: "Je prends …………… chocolat.",
    a: "du",
    b: "des",
    c: "de",
    d: "de la",
    correct: "a",
    },
    {
        Num:"29",
    question: " …………… revoir, à demain",
    a: "Du",
    b: "Pour",
    c: "Au",
    d: "Où",
    correct: "c",
    },
    {
        Num:"30",
    question: "Les élèves ne travaillent pas bien ; ils sont ………….",
    a: "gentils",
    b: "intelligents",
    c: "sérieux",
    d: "paresseux",
    correct: "d",
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

    /**const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
    };**/
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
        answer = answerElement.id;
        //var element1=document.getElementById("answer");
        //element1.style.color='red';   
        document.getElementById(answer).style.color = 'pink'; 
    }
    });
    return answer;

    };
    const loadQuiz = () => {
    //deselectAnswers();
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
   



