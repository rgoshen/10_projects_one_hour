const autoTextInput = document.getElementById("text-box");
const writeArea = document.querySelector(".write-area");
const speed = 100;
let index = 0;

function autoWriter() {
  const text = autoTextInput.value;
  writeArea.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(autoWriter, speed);
