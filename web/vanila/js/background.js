const images = [ "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"]; //이미지 저장명과 동일하게 적용

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //createElement로 html에 element를 추가한다. 

bgImage.src = `./img/${chosenImage}`; //src를 이용하여 img폴더를 지정
bgImage.style.width = "100vw"
bgImage.style.height = "100vh"

document.body.appendChild(bgImage); //appendChild(prepend)로 html에 이미지를 추가해준다.
