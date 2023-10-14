//variable

let btn = document.querySelector("#new-qoute");
let qoute = document.querySelector("#lol");
let person = document.querySelector(".person");

//qoute list with person
const qoutes = [
  {
    qoute: `A rose by any other name would smell as sweet.`,
    person: `William Shakepear`,
  },
  {
    qoute: `Eighty percent of success is showing up.`,
    person: `Woody Allen`,
  },
  {
    qoute: `For those to whom much is given, much is required.`,
    person: `the Bible`,
  },
  {
    qoute: `Frankly, my dear, I don't give a damn.`,
    person: `Rhett Butler (character)`,
  },
  {
    qoute: `He travels the fastest who travels alone.`,
    person: `William Shakepear`,
  },
  {
    qoute: `A rose by any other name would smell as sweet.`,
    person: `Rudyard Kipling`,
  },
  {
    qoute: `I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.`,
    person: `Martin Luther King`,
  },
  {
    qoute: `I think therefore I am.`,
    person: `Rene Descartes`,
  },
  {
    qoute: `If you want something said, ask a man; if you want something done, ask a woman.`,
    person: `Margaret Thatcher`,
  },
  {
    qoute: `I'm gonna make him an offer he can't refuse.`,
    person: `Vito Corleone (character)`,
  },
  {
    qoute: `I've got a feeling we're not in Kansas anymore.`,
    person: `Dorothy (character)`,
  },
  {
    qoute: `Life is like a box of chocolates. You never know what you’re gonna get.`,
    person: `Forrest Gump (character)`,
  },
];

//function

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * qoutes.length);
  qoute.innerText = qoutes[random].qoute;
  person.innerText = qoutes[random].person;
});
