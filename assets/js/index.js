"use strict";

const [innerWrapper] = document.getElementsByClassName("inner-wrapper");

const btnsDirection = document.getElementsByClassName("btn");

function btnHandler({ target }) {
  innerWrapper.style.flexDirection = target.dataset.direction;
}

for (const btn of btnsDirection) {
  btn.addEventListener("click", btnHandler);
}
