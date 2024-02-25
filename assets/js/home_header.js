const h2 = document.querySelector("header h2");

function type(text) {
    h2.innerText = "";

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            h2.innerText = text.substring(0, (i + 1));
        }, 100 * i);
    };
};

const statuses = ["Gamer", "Web developer", "Java developer", "Javascript developer", "NodeJS developer", "ExpressJS developer", "Student Cyber Security"];

let latestStatus = statuses[Math.floor(Math.random() * statuses.length)];

type(latestStatus)

setInterval(() => {
    let status = statuses[Math.floor(Math.random() * statuses.length)];

    while (status === latestStatus) {
        status = statuses[Math.floor(Math.random() * statuses.length)];
    };

    type(status);

    latestStatus = status;
}, 5000);