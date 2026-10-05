const resultContent = document.querySelector("#result-content");
const resultError = document.querySelector("#result-error");

const validAnswers = {
    q1: ["ski", "sightseeing"],
    q2: ["beginner", "advanced"],
    q3: ["family", "solo"]
};

const recommendationMap = {
    "ski|beginner|family": "naeba",
    "ski|advanced|family": "naeba",
    "sightseeing|beginner|family": "gala",
    "sightseeing|advanced|family": "naeba",
    "ski|beginner|solo": "ishiuchi",
    "ski|advanced|solo": "kagura",
    "sightseeing|beginner|solo": "ishiuchi",
    "sightseeing|advanced|solo": "kandatsu"
};

const params = new URLSearchParams(window.location.search);
const answers = {
    q1: params.get("q1"),
    q2: params.get("q2"),
    q3: params.get("q3")
};

const answersAreValid = Object.entries(answers).every(([question, answer]) => {
    return validAnswers[question].includes(answer);
});

if (!answersAreValid) {
    resultError.hidden = false;
} else {
    const recommendationKey = `${answers.q1}|${answers.q2}|${answers.q3}`;
    const resort = resorts[recommendationMap[recommendationKey]];

    if (!resort) {
        resultError.hidden = false;
    } else {
        const hero = document.querySelector(".result-hero");
        const title = document.querySelector("#result-title");
        const logo = document.querySelector("#result-logo");
        const target = document.querySelector("#result-target");
        const description = document.querySelector("#result-description");
        const link = document.querySelector("#result-link");

        hero.style.backgroundImage = `linear-gradient(rgba(10, 14, 20, 0.45), rgba(10, 14, 20, 0.55)), url("${resort.image}")`;
        title.textContent = resort.name;
        logo.src = resort.logo;
        logo.alt = resort.name;
        target.textContent = resort.target;
        description.textContent = resort.description;
        link.href = resort.link;

        resultContent.hidden = false;
    }
}
