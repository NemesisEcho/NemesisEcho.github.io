const h2 = document.querySelector("header h2");

function type(text) {
    h2.innerText = "";

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            h2.innerText = text.substring(0, (i + 1));
        }, 150 * i);
    };
};

const statuses = ["gamer", "web developer", "java developer", "javascript developer", "NodeJS developer", "ExpressJS developer", "student Cyber Security"];

setInterval(() => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    type(status)
}, 4000);