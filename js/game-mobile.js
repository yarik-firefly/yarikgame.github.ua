// РАЗДЕЛ МЕНЮ
// Кнопка, которая доступна только на смартфонах
const buttonMobile = document.querySelectorAll(".mobile-btn");
// Медиа запрос когда макс. ширина 1000px
let tablet = window.matchMedia("(max-width:1000px)");

const body = document.querySelector('body').addEventListener('touchend', () => {
  dropDownMenuOne.classList.remove("down");
  dropDownMenuTwo.classList.remove("down");
  dropDownMenuThree.classList.remove("down");
})

// В коде сделано два таких условия. Это для того,что бы изначально у нас при подгрузке страницы сразу же или
// убиралась или добавлялась прослушка событий
if (tablet.matches === true) {
  optionOne.removeEventListener("click", chooseLight);
  optionTwo.removeEventListener("click", chooseMiddle);
  optionThree.removeEventListener("click", chooseHard);
} else {
  optionOne.addEventListener("click", chooseLight);
  optionTwo.addEventListener("click", chooseMiddle);
  optionThree.addEventListener("click", chooseHard);
}

// Если у нас есть запрос matchMedia, то вешаем обработчик событий на изменения
if (matchMedia) {
  tablet.addEventListener("change", Tablet);
}

// Если екран больше 1000, кнопка не видна. Если меньше, то появляется
function Tablet() {
  // И тут же мы опять или вешаем или убираем обработчик событий
  if (tablet.matches === true) {
    optionOne.removeEventListener("click", chooseLight);
    optionTwo.removeEventListener("click", chooseMiddle);
    optionThree.removeEventListener("click", chooseHard);
  } else {
    optionOne.addEventListener("click", chooseLight);
    optionTwo.addEventListener("click", chooseMiddle);
    optionThree.addEventListener("click", chooseHard);
  }
}

// Перебрасіваем на соответствующую сложность
for (let i of buttonMobile) {
  i.addEventListener("touchend", () => {
    if (i.id == "1") {
      chooseLight();
    } else if (i.id == "2") {
      chooseMiddle();
    } else {
      chooseHard();
    }
  });
}

DropDownMobile(squareOptionOne, dropDownMenuOne);
DropDownMobile(squareOptionTwo, dropDownMenuTwo);
DropDownMobile(squareOptionThree, dropDownMenuThree);

function addAudioMobile(elem) {
  elem.addEventListener("touchend", () => {
    let audio = new Audio("audio/audio_neon.mp3");
    audio.play();
  });
}

addAudioMobile(optionOne)
addAudioMobile(optionTwo)
addAudioMobile(optionThree)

// То же для мобильных устройств
function DropDownMobile(elemOne, elemTwo) {
  elemOne.addEventListener("touchend", () => {
    elemTwo.classList.add("down");
    // Передаём в функцию к каким классам надо добавлять анимацию
    addColor(colorFillingGreen, colorFillingYellow, colorFillingRed);
    elemOne.addEventListener("touchend", () => {
      elemTwo.classList.remove("down");

      // Передаём теже параметры что бы удалить эти
      removeColor(colorFillingGreen, colorFillingYellow, colorFillingRed);
    });
  });
}
