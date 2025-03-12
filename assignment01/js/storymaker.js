// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");

// Constants for p tag to display query selectors
const noun1Display = document.getElementById("choosenNoun1");
const verbDisplay = document.getElementById("choosenVerb");
adjectiveDisplay = document.getElementById("choosenAdjective");
const noun2Display = document.getElementById("choosenNoun2");
const settingDisplay = document.getElementById("choosenSetting");
const storyDisplay = document.getElementById("story");

// Constants for final buttons and p tags
const studentIdDisplay = document.getElementById("studentId");
studentIdDisplay.innerText = "Alex Walker - 1263736"; 

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "dosent like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Index = 0;
let verbIndex = 0;
let adjectiveIndex = 0;
let noun2Index = 0;
let settingIndex = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    noun1Display.innerText = nouns1[noun1Index];
    noun1Index = (noun1Index + 1) % nouns1.length;
}

function verb_on_click() {
    verbDisplay.innerText = verbs[verbIndex];
    verbIndex = (verbIndex + 1) % verbs.length;
}

function adjective_on_click() {
    adjectiveDisplay.innerText = adjectives[adjectiveIndex];
    adjectiveIndex = (adjectiveIndex + 1) % adjectives.length;
}

function noun2_on_click() {
    noun2Display.innerText = nouns2[noun2Index];
    noun2Index = (noun2Index + 1) % nouns2.length;
}

function setting_on_click() {
    settingDisplay.innerText = settings[settingIndex];
    settingIndex = (settingIndex + 1) % settings.length;
}

// Concatenate the user story and display
function playback_on_click() {
    const story = `${noun1Display.innerText} ${verbDisplay.innerText} ${adjectiveDisplay.innerText} ${noun2Display.innerText} ${settingDisplay.innerText}.`;
    storyDisplay.innerText = story;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    const story = `${nouns1[Math.floor(Math.random() * nouns1.length)]} ` +
        `${verbs[Math.floor(Math.random() * verbs.length)]} ` +
        `${adjectives[Math.floor(Math.random() * adjectives.length)]} ` +
        `${nouns2[Math.floor(Math.random() * nouns2.length)]} ` +
        `${settings[Math.floor(Math.random() * settings.length)]}.`;
    storyDisplay.innerText = story;
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
