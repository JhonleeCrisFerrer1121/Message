/* =====================================
   ROMANTIC WEBSITE INTERACTIONS
===================================== */

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const button = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const loveTitle = document.getElementById("loveTitle");
const message = document.getElementById("message");

/* Create the stars */

function createStars() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {
        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            2 + Math.random() * 3 + "s";

        fragment.appendChild(star);
    }

    stars.appendChild(fragment);
}

/* Create floating hearts */

function createHeart() {
    const heart = document.createElement("span");

    const symbols = ["💗", "💕", "♡", "💖", "✨"];

    heart.className = "heart";

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        12 + Math.random() * 18 + "px";

    const duration = 4 + Math.random() * 4;

    heart.style.animationDuration = duration + "s";

    hearts.appendChild(heart);

    window.setTimeout(() => {
        heart.remove();
    }, duration * 1000 + 200);
}

/* Add stars and background hearts */

createStars();

const heartInterval = window.setInterval(createHeart, 850);

/* Open and close the surprise letter */

function toggleLetter() {
    const isOpen = letter.classList.contains("show");

    if (isOpen) {
        letter.classList.remove("show");
        letter.setAttribute("aria-hidden", "true");
        letter.inert = true;

        button.setAttribute("aria-expanded", "false");
        button.textContent = "Open my little surprise 💌";

        return;
    }

    letter.classList.add("show");
    letter.setAttribute("aria-hidden", "false");
    letter.inert = false;

    button.setAttribute("aria-expanded", "true");
    button.textContent = "Close my little letter ♡";

    /* Reveal the romantic messages */

    title.textContent =
        "You Make Life More Beautiful ♡";

    subtitle.textContent =
        "And this little garden is just for you.";

    loveTitle.textContent =
        "If flowers could talk... 🌷";

    message.textContent =
        "They would probably tell you what I wish I could say.";

    /* Create a little shower of hearts */

    for (let i = 0; i < 25; i++) {
        window.setTimeout(createHeart, i * 100);
    }

    /* Bring the letter into view */

    window.setTimeout(() => {
        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 150);
}

button.addEventListener("click", toggleLetter);