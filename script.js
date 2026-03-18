const quotes = [
  {
    act: "Act 1, Scene 1",
    text: "\"Fair is foul, and {{gap}} is fair.\"",
    answer: "foul",
    context: "Witches open with a paradox, framing disorder and moral confusion.",
    inference: "Shakespeare signals a world where appearances are unreliable.",
    translation: "What seems good is bad, and what seems bad is good."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"So {{gap}} and fair a day I have not seen.\"",
    answer: "foul",
    context: "Macbeth echoes the witches, showing their influence taking hold.",
    inference: "Macbeth is already adopting their twisted worldview.",
    translation: "I've never seen a day so bad and so good at once."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"All hail, Macbeth, that shalt be {{gap}} hereafter!\"",
    answer: "king",
    context: "The prophecy sparks Macbeth's ambition.",
    inference: "Power is presented as destiny, tempting Macbeth to act.",
    translation: "All hail, Macbeth, you will be king in the future!"
  },
  {
    act: "Act 1, Scene 4",
    text: "\"{{gap}}, hide your fires; let not light see my black and deep desires.\"",
    answer: "stars",
    context: "Macbeth hides his ambition from Duncan.",
    inference: "He recognizes his desires are morally corrupt.",
    translation: "Stars, hide your light so no one sees my dark desires."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Look like the innocent flower, but be the {{gap}} under't.\"",
    answer: "serpent",
    context: "Lady Macbeth advises deception to secure power.",
    inference: "Appearance vs reality becomes the couple's strategy.",
    translation: "Look innocent, but be deadly underneath."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Come, you spirits that tend on mortal thoughts, {{gap}} me here.\"",
    answer: "unsex",
    context: "Lady Macbeth rejects traditional femininity.",
    inference: "She sees compassion as weakness that must be stripped away.",
    translation: "Spirits, take away my femininity and make me ruthless."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"I have no spur to prick the sides of my intent, but only {{gap}} ambition.\"",
    answer: "vaulting",
    context: "Macbeth identifies ambition as his main motive.",
    inference: "He knows his desire for power is irrational and dangerous.",
    translation: "I have no motive except reckless ambition."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"We will {{gap}} no further in this business.\"",
    answer: "proceed",
    context: "Macbeth hesitates before murdering Duncan.",
    inference: "His conscience briefly resists ambition.",
    translation: "We will not go any further with this plan."
  },
  {
    act: "Act 2, Scene 1",
    text: "\"Is this a {{gap}} which I see before me, the handle toward my hand?\"",
    answer: "dagger",
    context: "Macbeth hallucinates before the murder.",
    inference: "Guilt and desire blur reality and push him toward violence.",
    translation: "Is that a dagger I'm seeing, pointing me to the murder?"
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Macbeth does murder {{gap}}.\"",
    answer: "sleep",
    context: "After killing Duncan, Macbeth feels cursed.",
    inference: "He believes he has destroyed his own peace and innocence.",
    translation: "Macbeth has killed his own ability to rest in peace."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Will all great Neptune's ocean wash this {{gap}} clean from my hand?\"",
    answer: "blood",
    context: "Macbeth is overwhelmed by guilt.",
    inference: "His crime feels permanent and unforgivable.",
    translation: "Can all the oceans wash away my guilt?"
  },
  {
    act: "Act 2, Scene 3",
    text: "\"There's {{gap}} in men's smiles.\"",
    answer: "daggers",
    context: "Donalbain recognizes danger after Duncan's death.",
    inference: "The court is full of hidden threats and betrayal.",
    translation: "Smiles can hide deadly intentions."
  },
  {
    act: "Act 3, Scene 2",
    text: "\"O, full of {{gap}} is my mind, dear wife!\"",
    answer: "scorpions",
    context: "Macbeth becomes paranoid after gaining power.",
    inference: "Kingship brings fear, not security.",
    translation: "My mind is full of poisonous, disturbing thoughts."
  },
  {
    act: "Act 3, Scene 4",
    text: "\"Never shake thy {{gap}} locks at me!\"",
    answer: "gory",
    context: "Macbeth sees Banquo's ghost at the banquet.",
    inference: "Public collapse reveals his private guilt.",
    translation: "Don't shake your bloody hair at me!"
  },
  {
    act: "Act 4, Scene 1",
    text: "\"{{gap}}, double toil and trouble; fire burn and cauldron bubble.\"",
    answer: "double",
    context: "Witches intensify the chaos with their spell.",
    inference: "Their power fuels Macbeth's false confidence.",
    translation: "Trouble is doubled; the witches stir up more chaos."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"None of woman {{gap}} shall harm Macbeth.\"",
    answer: "born",
    context: "A prophecy gives Macbeth misleading safety.",
    inference: "He trusts fate and ignores the moral consequences.",
    translation: "No one born from a woman will hurt Macbeth."
  },
  {
    act: "Act 5, Scene 1",
    text: "\"{{gap}}, damned spot! Out, I say!\"",
    answer: "out",
    context: "Lady Macbeth sleepwalks, haunted by guilt.",
    inference: "The stain of murder is psychological and inescapable.",
    translation: "Get out, cursed stain! I want it gone!"
  },
  {
    act: "Act 5, Scene 5",
    text: "\"I looked toward Birnam, and anon, methought, the wood began to {{gap}}.\"",
    answer: "move",
    context: "Malcolm's army advances with branches as camouflage.",
    inference: "Prophecy unravels and Macbeth's fate closes in.",
    translation: "I thought the forest started moving toward us."
  },
  {
    act: "Act 5, Scene 5",
    text: "\"{{gap}}, and tomorrow, and tomorrow, creeps in this petty pace from day to day.\"",
    answer: "tomorrow",
    context: "Macbeth reflects after hearing of Lady Macbeth's death.",
    inference: "Life feels meaningless and repetitive to him.",
    translation: "Tomorrow and tomorrow keep dragging on in a dull routine."
  },
  {
    act: "Act 5, Scene 5",
    text: "\"It is a tale told by an idiot, full of sound and fury, signifying {{gap}}.\"",
    answer: "nothing",
    context: "Macbeth reaches the height of nihilism.",
    inference: "He believes his ambition has led to emptiness.",
    translation: "Life is just noise and chaos with no real meaning."
  }
];

const countEl = document.getElementById('count');
const barFill = document.getElementById('barFill');
const actSceneEl = document.getElementById('actScene');
const quoteTextEl = document.getElementById('quoteText');
const feedbackEl = document.getElementById('feedback');
const contextText = document.getElementById('contextText');
const inferenceText = document.getElementById('inferenceText');
const translationText = document.getElementById('translationText');
const summaryEl = document.getElementById('summary');
const scoreLine = document.getElementById('scoreLine');
const summaryList = document.getElementById('summaryList');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const checkBtn = document.getElementById('checkBtn');
const revealBtn = document.getElementById('revealBtn');
const resetBtn = document.getElementById('resetBtn');

let index = 0;
const userAnswers = Array(quotes.length).fill('');

function normalize(value) {
  return value.trim().toLowerCase();
}

function getInput() {
  return document.getElementById('gapInput');
}

function renderQuote() {
  const item = quotes[index];
  actSceneEl.textContent = item.act;
  quoteTextEl.innerHTML = item.text.replace('{{gap}}', '<input type="text" placeholder="gap" id="gapInput" />');

  feedbackEl.textContent = '';
  feedbackEl.classList.remove('correct', 'incorrect');
  contextText.textContent = item.context;
  inferenceText.textContent = item.inference;
  translationText.textContent = item.translation;

  const input = getInput();
  input.value = userAnswers[index] || '';
  input.addEventListener('input', () => {
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('correct', 'incorrect');
    userAnswers[index] = input.value;
  });
  input.select();

  countEl.textContent = `${index + 1} / ${quotes.length}`;
  barFill.style.width = `${((index + 1) / quotes.length) * 100}%`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = false;
  nextBtn.textContent = index === quotes.length - 1 ? 'Finish' : 'Next';
}

function showSummary() {
  let correctCount = 0;
  summaryList.innerHTML = '';

  quotes.forEach((item, i) => {
    const user = (userAnswers[i] || '').trim();
    const isCorrect = normalize(user) === normalize(item.answer);
    if (isCorrect) correctCount += 1;

    const li = document.createElement('li');
    li.className = isCorrect ? 'correct' : 'incorrect';

    const wordSpan = isCorrect
      ? `<span class="word-correct">${item.answer}</span>`
      : `<span class="word-incorrect">${user || '(blank)'}</span> <span class="word-correct">(correct: ${item.answer})</span>`;

    const quoteHtml = item.text.replace('{{gap}}', wordSpan);
    li.innerHTML = `${item.act} — ${quoteHtml}`;
    summaryList.appendChild(li);
  });

  scoreLine.textContent = `Score: ${correctCount} / ${quotes.length}`;
  summaryEl.style.display = 'block';
  summaryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

checkBtn.addEventListener('click', () => {
  const input = getInput();
  const answer = quotes[index].answer;
  const isCorrect = normalize(input.value) === normalize(answer);
  userAnswers[index] = input.value;
  feedbackEl.textContent = isCorrect ? 'Correct.' : `Not quite. You want "${answer}".`;
  feedbackEl.classList.remove('correct', 'incorrect');
  feedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');
});

revealBtn.addEventListener('click', () => {
  const input = getInput();
  const answer = quotes[index].answer;
  input.value = answer;
  userAnswers[index] = answer;
  feedbackEl.textContent = 'Revealed.';
  feedbackEl.classList.remove('incorrect');
  feedbackEl.classList.add('correct');
});

resetBtn.addEventListener('click', () => {
  const input = getInput();
  input.value = '';
  userAnswers[index] = '';
  feedbackEl.textContent = '';
  feedbackEl.classList.remove('correct', 'incorrect');
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index -= 1;
  renderQuote();
});

nextBtn.addEventListener('click', () => {
  if (index < quotes.length - 1) {
    index += 1;
    renderQuote();
  } else {
    showSummary();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  const input = getInput();
  if (!input || document.activeElement !== input) return;
  event.preventDefault();
  const answer = quotes[index].answer;
  const isCorrect = normalize(input.value) === normalize(answer);
  userAnswers[index] = input.value;
  feedbackEl.textContent = isCorrect ? 'Correct.' : `Not quite. You want "${answer}".`;
  feedbackEl.classList.remove('correct', 'incorrect');
  feedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');

  if (index < quotes.length - 1) {
    index += 1;
    renderQuote();
  } else {
    showSummary();
    input.select();
  }
});

renderQuote();
