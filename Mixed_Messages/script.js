// 25 Random verbs, nouns, adjectives and adverbiums stored in arrays
const verbArray = ["risk", "flee", "abandon", "wonder", "hate", "grab", "stop", "relax", "rule", "ask", "bother", "record", "conform", "name", "crash", "earn", "adapt", "alert", "criticize", "handle", "cross", "remove","dump", "choose", "educate"];

const nounsArray = ["language", "platform", "anxiety", "friendship", "ambition", "beer", "dealer", "sector", "desk", "city", "maintenance", "election", "highway", "safety", "quality", "alcohol", "math", "property", "payment", "height", "insurance", "introduction", "county", "world", "depression"];

const adjectiveArray = ["left", "pathetic", "irate", "loutish", "regular", "unsuitable", "basic", "nine", "upbeat", "alike", "smooth", "ill", "material", "heavy", "steadfast", "dry", "fine", "tacky", "second-hand", "null", "harsh", "endurable", "ill-fated", "motionless", "joyous"];

const adverbArray = ["absentmindedly", "tightly", "altogether", "normally", "patiently", "generously", "zealously", "selfishly", "quaintly", "merely", "strongly", "tensely", "separately", "thus", "slowly", "loftily", "physically", "lively", "sympathetically", "poorly", "inwardly", "solidly", "awkwardly","youthfully", "judgementally"];

// **************************************************

// Saving HTML elements to variables by Id.
let eventTarget = document.getElementById('message-button');
let returnTarget = document.getElementById('return-button');
let secretMessage = document.getElementById('secret-message');

// Function that changes the actual message.
function buttonClick() {
  let randomIndicesArray = randomNumber();
  const average = randomIndicesArray.reduce((a, b) => a + b, 0)

  secretMessage.hidden = false;
  eventTarget.hidden = true;

  if (average < 25) {
  secretMessage.innerHTML = `The stars are aligning and I foresee a future where you will have a ${adjectiveArray[randomIndicesArray[1]]} ${nounsArray[randomIndicesArray[2]]}! This will make you ${verbArray[randomIndicesArray[3]]} a new life and become ${adverbArray[randomIndicesArray[0]]} ${adjectiveArray[randomIndicesArray[3]]}.`;

  } else if (average > 25 & average <= 50) {
    secretMessage.innerHTML = `You feel ${adverbArray[randomIndicesArray[0]]} about this situation. Perhaps this is because you ${verbArray[randomIndicesArray[3]]} with a ${adjectiveArray[randomIndicesArray[1]]} ${nounsArray[randomIndicesArray[2]]}?`;

  } else if (average > 50 & average <= 75) {
    secretMessage.innerHTML = `Behold... Your future seems to be ${adjectiveArray[randomIndicesArray[1]]} with a slight chance of ${adverbArray[randomIndicesArray[0]]} ${nounsArray[randomIndicesArray[2]]}.`;
  } else if (average > 75) {
    secretMessage.innerHTML = `You should ${verbArray[randomIndicesArray[3]]} a little. Who knows if this prediction will be true?`;
  }
 
  returnTarget.hidden = false;

}

eventTarget.addEventListener('click', buttonClick);

// Return to baseline function.
function returnButtonClick() {
  returnTarget.hidden = true;
  eventTarget.hidden = false;
  secretMessage.hidden = true;
}

returnTarget.addEventListener('click', returnButtonClick);

// Helper function to randomize selection of words from arrays.
const randomNumber = () => {
  let randomIndicesArray = [];
  for (let i = 0; i < 4; i++) {
    randomIndicesArray.push(Math.floor(Math.random() * 25));
  }
  return randomIndicesArray;
}
