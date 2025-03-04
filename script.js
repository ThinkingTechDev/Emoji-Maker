const title = document.querySelector("h2");
const buttonsContainer = document.querySelector(".buttons-container");
const emojiContainer = document.querySelector("#emoji-container");

const colors = ["#4bff81", "#4bb4ff", "#ff702e", "#b88cff", "#ffd21f"];

const emojiParts = {
    eyebrows: 4,
    eyes: 5,
    mouth: 5,
};

const counters = { color: 0, eyes: 0, eyebrows: 0, mouth: 0 };

document.addEventListener("DOMContentLoaded", () => {
    title.textContent = "Emoji Maker";

    Object.keys(emojiParts).forEach((part) => {
        const img = document.createElement("img");
        img.classList.add(part);
        img.src = `./images/${part}-0.svg`;
        emojiContainer.appendChild(img);
    });

    ["color", ...Object.keys(emojiParts)].forEach((part) => {
        const button = document.createElement("button");
        button.textContent = `${part}`;
        button.addEventListener("click", () => updateEmoji(part));
        buttonsContainer.appendChild(button);
    });
});

const updateEmoji = (part) => {
    if (part === "color") {
        emojiContainer.style.backgroundColor = colors[counters.color];
        counters.color = (counters.color + 1) % colors.length;
    } else {
        const partElement = document.querySelector(`.${part}`);
        if (partElement) {
            partElement.src = `./images/${part}-${counters[part]}.svg`;
            counters[part] = (counters[part] + 1) % emojiParts[part];
        }
    }
};
