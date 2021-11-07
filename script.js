let i = (j = 0);
const taskList = document.querySelector(".listActive");
const doneList = document.querySelector(".listDone");

function addActiveList() {
  let todovalue = document.querySelector(".addToDoInfo").value;
  let li = document.createElement("li");
  let button = document.createElement("button");
  button.className = "doneBtn" + i;
  li.innerHTML = todovalue;
  button.innerHTML = "Done";
  li.appendChild(button);
  document.querySelector(".listActive").appendChild(li);
  document.querySelector(".doneBtn" + i).addEventListener("click", doneActive);
  document.querySelector(".addToDoInfo").value = "";
  i++;
  return false;
}

function doneActive() {
  let content = this.parentNode;
  this.innerHTML = "delete";
  this.className = "deleteBtn" + j;
  document
    .querySelector(".deleteBtn" + j)
    .addEventListener("click", deleteDone);
  j++;
  document.querySelector(".listDone").appendChild(content);
}

function deleteDone() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
//전체 삭제 버튼
const taskDelBtn = document.querySelector(".deleteActive");
const doneDelBtn = document.querySelector(".deleteDone");

taskDelBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
});
doneDelBtn.addEventListener("click", function () {
  doneList.innerHTML = "";
});

function setClock() {
  var dateInfo = new Date();
  var hour = modifyNumber(dateInfo.getHours());
  var min = modifyNumber(dateInfo.getMinutes());
  var sec = modifyNumber(dateInfo.getSeconds());
  var year = dateInfo.getFullYear();
  var month = dateInfo.getMonth() + 1; //monthIndex를 반환해주기 때문에 1을 더해준다.
  var date = dateInfo.getDate();
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
  document.getElementById("date").innerHTML =
    year + "년 " + month + "월 " + date + "일";
}
function modifyNumber(time) {
  if (parseInt(time) < 10) {
    return "0" + time;
  } else return time;
}
window.onload = function () {
  setClock();
  setInterval(setClock, 1000); //1초마다 setClock 함수 실행
};
