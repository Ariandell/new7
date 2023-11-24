const Sphere = document.createElement('div');
Sphere.id = 'sphere';
const AnsBlock = document.createElement('div');
AnsBlock.id = 'dm';
const answer = document.createElement('p');
answer.id = 'answer';
const divblock = document.createElement('div');
divblock.id = 'block';
const image = document.createElement('img');
image.src = './img/yyy.png';
const video = document.createElement('video');
video.src = '../1122.mp4';
const MegaBlock = document.createElement('div');
MegaBlock.id = 'MegaBlock';

let attemptCount = 0; // Лічильник спроб

const h1 = document.createElement('h1');
h1.textContent = 'Безкоштовна магічна Куля';

const quest = document.createElement('input');
quest.setAttribute('type', 'text');
quest.setAttribute('placeholder', 'Ваші питанння?');
quest.id = 'question';
const sphereContainer = document.createElement('div');
sphereContainer.id = 'sphere-container';

const button = document.createElement('button');
button.textContent = '$5';
button.onclick = () => {
    ask();
    rot();
};
MegaBlock.appendChild(divblock)
divblock.appendChild(h1);
divblock.appendChild(quest);
divblock.appendChild(button);
MegaBlock.appendChild(divblock)
Sphere.appendChild(image);
AnsBlock.appendChild(answer);
sphereContainer.appendChild(Sphere);
document.body.appendChild(MegaBlock);
document.body.appendChild(sphereContainer);
document.body.appendChild(AnsBlock);

const useless = [
    "ТАК :)",
    "НІ :(",
    "ЩО?",
    "можливо",
    "..."
];

function ask() {
    attemptCount++;
    const answerElement = document.getElementById('answer');

    if (attemptCount <= 10) {
        const randomValue = Math.random() * 100;
        if (randomValue < 20) {
            const ans = useless[Math.floor(Math.random() * useless.length)];
            answerElement.innerHTML = `<strong>${ans}</strong>`;
        } else {
            answerElement.innerHTML = 'Спробуй ще раз :)';
        }
    } else {
        answerElement.innerHTML = 'Закінчились кошти :(';
        button.disabled = true;
    }
}

let rotated = false;

function rot() {
    const currentRotation = getComputedStyle(Sphere).getPropertyValue("transform");
    if (currentRotation === "none" || rotated === false) {
        Sphere.style.transform = "rotate(360deg)";
        rotated = true;
    } else {
        Sphere.style.transform = "rotate(0deg)";
        rotated = false;
    }
}
