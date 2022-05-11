function question() {
  const min = 1;
  const max = 9;
  const left = Math.floor(Math.random() * (max + 1 - min) + min);
  console.log(left);
  const leftnum = document.getElementById("leftNum");
  leftnum.innerText = left;
  console.log(left);
  const right = document.getElementById("rightNum");
  const anser = 10 - left;
  right.innerText = anser;
}

const btn = document.getElementById("sayAnser");
btn.addEventListener("click", () => {
  document.querySelector("#rightNum").classList.add("newRight");
});

question();
const btnNext = document.getElementById("newQuestion");
btnNext.addEventListener("click", () => {
  const nowQ = document.getElementById("rightNum");
  nowQ.classList.remove("newRight");
  console.log(nowQ);
  question();
});
