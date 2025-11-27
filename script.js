function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array.from({ length: 5 }, () => generateElement());
}

function generateContainer() {
  const div = document.createElement("div");
  div.classList.add("step-row");
  return div;
}

function fillArrContainer(container, arr) {
  container.innerHTML = "";
  arr.forEach((num) => {
    const span = document.createElement("span");
    span.classList.add("cell");
    span.textContent = num;
    container.appendChild(span);
  });
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const tmp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = tmp;
  }
}

function highlightCurrentEls(container, index) {
  const children = container.children;
  if (index < 0 || index >= children.length - 1) return;

  Array.from(children).forEach((child) => {
    child.style.border = "none";
  });

  const current = children[index];
  const next = children[index + 1];

  const style = "3px dashed red";
  current.style.border = style;
  next.style.border = style;
}

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArrayEl = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

let currentArray = [];

function resetArrayContainer() {
  Array.from(arrayContainer.children).forEach((child) => {
    if (child.id !== "starting-array") {
      child.remove();
    }
  });
}

generateBtn.addEventListener("click", () => {
  currentArray = generateArray();
  resetArrayContainer();
  fillArrContainer(startingArrayEl, currentArray);
  highlightCurrentEls(startingArrayEl, 0);
});

function visualizeBubbleSort(arr) {
  resetArrayContainer();

  fillArrContainer(startingArrayEl, arr);
  highlightCurrentEls(startingArrayEl, 0);

  const working = [...arr];
  const n = working.length;

  for (let pass = 0; pass < n - 1; pass++) {
    let swapped = false;

    for (let i = 0; i < n - 1 - pass; i++) {
      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, working);
      highlightCurrentEls(stepDiv, i);
      arrayContainer.appendChild(stepDiv);

      if (!isOrdered(working[i], working[i + 1])) {
        swapElements(working, i);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  const finalDiv = generateContainer();
  fillArrContainer(finalDiv, working);
  arrayContainer.appendChild(finalDiv);
}

sortBtn.addEventListener("click", () => {
  if (!startingArrayEl.children.length) return;

  const arrFromDom = Array.from(startingArrayEl.children).map((span) =>
    Number(span.textContent)
  );

  visualizeBubbleSort(arrFromDom);
});
