const h3 = document.querySelector("header h3");

function type(text) {
    h3.innerText = "";

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            h3.innerText = text.substring(0, (i + 1));
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