function question() {
  const min0 = 6;
  const max0 = 10;
  const origin = Math.floor(Math.random() * (max0 + 1 - min0) + min0);
  const originNum = origin;
  const finalGoal = document.getElementById("goalNum");
  finalGoal.innerText = originNum;
  console.log(originNum);
  const min = 1;
  const max = originNum - 1;
  const left = Math.floor(Math.random() * (max + 1 - min) + min);
  const leftnum = document.getElementById("leftNum");
  leftnum.innerText = left;

  const right = document.getElementById("rightNum");
  const anser = originNum - left;
  right.innerText = anser;
  const tellMe = document.getElementById("tellMe");
  tellMe.innerText = `${originNum}は${left}と${anser}`;
}

const btn = document.getElementById("sayAnser");
btn.addEventListener("click", () => {
  document.querySelector("#rightNum").classList.add("newRight");
  document.querySelector("#tellMe").classList.add("tellMeChange");
});

question();
const btnNext = document.getElementById("newQuestion");
btnNext.addEventListener("click", () => {
  const nowQ = document.getElementById("rightNum");
  const tellAll = document.getElementById("tellMe");
  nowQ.classList.remove("newRight");
  tellAll.classList.remove("tellMeChange");
  question();
});
