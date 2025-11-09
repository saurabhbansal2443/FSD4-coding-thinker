const inputTag = document.querySelector("#inputTag");
const submitBtn = document.getElementById("submitBtn");
const container = document.getElementById("container");
const shape = document.getElementById("shape");
const colorInput = document.getElementById("color");

submitBtn.addEventListener("click", function () {
  let number = inputTag.value;

  console.log(colorInput.value);

  container.innerHTML = "";

  for (let i = 1; i <= number; i++) {
    let boxEle = document.createElement("div");

    boxEle.classList.add(shape.value);
    boxEle.style.backgroundColor = colorInput.value;

    container.appendChild(boxEle);
  }
});
