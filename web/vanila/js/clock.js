const clock = document.querySelector("h1#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //원하는 길이가 아니면 0을 앞에 써서 자리를 채워준다
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //setInterval이 없을경우 당시 시간만 나올 뿐 시계처럼 작동하지 않는다