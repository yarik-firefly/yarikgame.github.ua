"use strict";

const check = document.querySelector(".check");

let startResult = check.innerHTML;

let newElem;

const audioOne = new Audio("audio/audio_click.mp3");

const audioLoad = new Audio("audio/audio_load.mp3");

const audioWin = new Audio("audio/audio_victory.mp3");
audioWin.volume = 0.5;

const audioLose = new Audio("audio/audio_lose.mp3");

// РАЗДЕЛ МЕНЮ

let optionOne = document.querySelector(".one");
let optionTwo = document.querySelector(".two");
let optionThree = document.querySelector(".three");

const firstDispActive = document.querySelector(".disable");
const secondDispDisable = document.querySelector(".disp");

// let desktop = window.matchMedia("(max-width:)")
// const pressOneBtn = optionOne.addEventListener("click", chooseLight);

// const pressTwoBtn = optionTwo.addEventListener("click", chooseMiddle);
// const pressThreeBtn = optionThree.addEventListener("click", chooseHard);

// const numberBetween = document.querySelector(".number-between");

// РАЗДЕЛ ИГРЫ

const randomNumber = Math.floor(Math.random() * 20) + 1;

const valueInput = document.querySelector("input");

const btn = document.querySelector(".press-btn");

const numberMistake = document.querySelector(".text");

const trueNumber = document.querySelector("span");

const showInscription = document.querySelector(".name-title");

const btnUpdatePage = document.querySelector(".button");

const record = document.querySelector(".record");

const displayLoading = document.querySelector(".wrapper");

const header = document.querySelector("header");

const areaEnter = document.querySelector(".area-enter");

const popUpWindow = document.querySelector(".pop-up-window");

const squareOptionOne = document.querySelector(".option.one");
const squareOptionTwo = document.querySelector(".option.two");
const squareOptionThree = document.querySelector(".option.three");

const dropDownMenuOne = document.querySelector(".ddm.one");
const dropDownMenuTwo = document.querySelector(".ddm.two");
const dropDownMenuThree = document.querySelector(".ddm.three");

const colorFillingGreen = document.querySelector(".level.L");
const colorFillingYellow = document.querySelector('.level.M')
const colorFillingRed = document.querySelector('.level.H')

// Передаём параметры в функцию
DropDown(squareOptionOne, dropDownMenuOne);
DropDown(squareOptionTwo, dropDownMenuTwo);
DropDown(squareOptionThree, dropDownMenuThree);


// Добавляет классы, котоыре выкатывают полоску сложности под большим квадратом сложности
function addColor(elemOne, elemTwo, elemThree) {

  elemOne.classList.add('animGreen')
  elemTwo.classList.add('animYellow')
  elemThree.classList.add('animRed')
}

// Удаляет эти же классы
function removeColor(elemOne, elemTwo, elemThree) {
  elemOne.classList.remove('animGreen')
  elemTwo.classList.remove('animYellow')
  elemThree.classList.remove('animRed')
}





// Разрешает задачу с выдвижной панелью из квадратика
function DropDown(elemOne, elemTwo) {
  elemOne.addEventListener("mouseover", () => {
    elemTwo.classList.add("down");
    
    // Передаём в функцию к каким классам надо добавлять анимацию
    addColor(colorFillingGreen, colorFillingYellow, colorFillingRed)
    elemOne.addEventListener("mouseout", () => {
      elemTwo.classList.remove("down");

      // Передаём теже параметры что бы удалить эти
      removeColor(colorFillingGreen, colorFillingYellow, colorFillingRed)
    });
  });
}






// При нажатии на уровень ЛЁГКИЙ скрывает панель меню
function chooseLight() {
  // Функция, которая присваивает класы невидимости, и запукает анимацию загрузки
  updateToNext();
  
  firstDispActive.classList.toggle("disable");
  secondDispDisable.classList.toggle("disable");
  check.innerHTML = 12;

}

function chooseMiddle() {
  updateToNext();
  firstDispActive.classList.toggle("disable");
  secondDispDisable.classList.toggle("disable");
  check.innerHTML = 8;
}

function chooseHard() {
  updateToNext();
  firstDispActive.classList.toggle("disable");
  secondDispDisable.classList.toggle("disable");
  check.innerHTML = 4;
}

function addTextAfterInput() {
  numberMistake.classList.add('pop-up-window')
  numberMistake.innerHTML = "Enter The Number";

}

// function deleteNewTextAfterInput() {
//   popUpWindow.innerHTML = "";
// }

function transfornToNumber(value) {
  return Number(value);
}

function updatePage() {
  btnUpdatePage.addEventListener("click", () => {
    // audioOne.play()
    audioLoad.play();
    header.classList.toggle("disable");
    displayLoading.style.display = "flex";
    setTimeout(() => {
      location.href = "index.html";
    }, 2050);
  });
}

function gameOver() {
  header.classList.toggle("disable");
  displayLoading.style.display = "flex";
  // onUpdateGsap()
  setTimeout(() => {
    location.href = "index.html";
    // displayLoading.style.display = 'none'
  }, 2050);
}

function updateToNext() {
  header.classList.toggle("disable");
  displayLoading.style.display = "flex";
  // onUpdateGsap()
  setTimeout(() => {
    header.classList.remove("disable");
    displayLoading.style.display = "none";
  }, 2050);
  audioLoad.play();
}

// Добавляет звук при наведении на квадрат со сложностью игры
function addAudio(elem) {
  const audioHover = elem.addEventListener("mouseover", () => {
    let audio = new Audio("audio/audio_neon.mp3");
    audio.play();
  });

  // Добавляете звук, если убираешь курсор

  // const audioNotHover = elem.addEventListener('mouseout', () => {
  //     let audio = new Audio('audio/two_click.mp3')
  //     audio.play()
  // })
}

// Вызов функций для каждого квадрата со сложностью
addAudio(optionOne);
addAudio(optionTwo);
addAudio(optionThree);

console.log(randomNumber);

const listBtn = btn.addEventListener("click", () => {
  // Звук клика
  audioOne.play();

  if (valueInput.value === String(randomNumber)) {
    // Показываем Верно над квадратом
    showInscription.innerHTML = "Right!";

    // Показываем верное число вместо знака вопроса
    trueNumber.innerHTML = valueInput.value;
    // Ставим значение в поле инпут на 0
    valueInput.value = 0;

    //Меняем сам параметр, чтоб визуально изменился
    check.innerHTML = check.innerHTML - 1;

    //Меняем число в поле РЕКОРД
    record.innerHTML = check.innerHTML;

    audioWin.play();

    //Блокируем подальшое нажатие кнопки
    btn.classList.add("no-active-btn");
  } else if (valueInput.value === "" || valueInput.value === "0") {
    // Устанавливаем значение в инпуте на 0
    valueInput.value = 0;

    // Функция, добавляющая текст под поле инпут
    addTextAfterInput();

    // //Меняем число в поле РЕКОРД
    // record.innerHTML = 13 - check.innerHTML

    // //Меняем сам параметр, что визуально изменился
    // check.innerHTML = check.innerHTML - 1;
  } else if (transfornToNumber(valueInput.value) < 0) {
    // Устанавливаем значение в инпуте на 0
    valueInput.value = 0;

    // Меняем название над блоком инпут
    numberMistake.innerHTML = "Number must be positive!";
    numberMistake.classList.remove('pop-up-window')

    //Меняем число в поле РЕКОРД
    record.innerHTML;

    //Меняем сам параметр, что визуально изменился
    check.innerHTML = check.innerHTML - 1;

    // Функция, убирающая текст под полем инпут, если у нас присутствует какое-то число в инпуте
    // deleteNewTextAfterInput();

    // Если кол-во попыток стает 0 - вызываем функцию
    if (check.innerHTML < 1) {
      audioLose.play();
      trueNumber.innerHTML = "LOSE";

      //Блокируем подальшое нажатие кнопки
      btn.classList.add("no-active-btn");
    }
  } else if (valueInput.value < randomNumber) {
    // Устанавливаем значение в инпуте на 0
    valueInput.value = 0;

    // Меняем название над блоком инпут
    numberMistake.innerHTML = "More";
    numberMistake.classList.remove('pop-up-window')

    //Меняем сам параметр, что визуально изменился
    check.innerHTML = check.innerHTML - 1;

    // Функция, убирающая текст под полем инпут, если у нас присутствует какое-то число в инпуте
    // deleteNewTextAfterInput();

    // Если кол-во попыток стает 0 - вызываем функцию
    if (check.innerHTML < 1) {
      audioLose.play();
      // Меняем знак в квадрате LOSE вместо ?
      trueNumber.innerHTML = "LOSE";

      //Блокируем подальшое нажатие кнопки
      btn.classList.add("no-active-btn");
    }
  } else {
    // Устанавливаем значение в инпуте на 0
    valueInput.value = 0;

    // Меняем название над блоком инпут
    numberMistake.innerHTML = "Less";
    numberMistake.classList.remove('pop-up-window')

    //Меняем сам параметр, что визуально изменился
    check.innerHTML = check.innerHTML - 1;

    // Функция, убирающая текст под полем инпут, если у нас присутствует какое-то число в инпуте
    // deleteNewTextAfterInput();

    // Если кол-во попыток стает 0 - вызываем функцию
    if (check.innerHTML < 1) {
      audioLose.play();
      // Функция, останавливающая игру
      // gameOver()

      //Блокируем подальшое нажатие кнопки
      btn.classList.add("no-active-btn");
    }
  }
});

updatePage();


// Не мой код, из видео
// const percentNode = document.querySelector('.progressbar__percent tspan');
// const infoNode = document.querySelector('.progressbar__info tspan');
// const svgNode = document.querySelector('.progressbar');

// function onUpdateGsap() {

// 	const percent = gsap.getProperty(svgNode, '--percent');

	

//   percentNode.textContent = Math.round(percent);
  
  
//   const tl = gsap.timeline()
//   .to(svgNode, { '--opacityThumb': 1, duration: 0.2 })
//   .to(svgNode, { '--percent': 100, duration:0.5, ease: 'linear', onUpdateGsap})
  
  

  
// }




// function fillCircle() {
  
// }



// if(valueInput.value == randomNumber) {
//     showInscription.innerHTML = 'Верно!'
//     trueNumber.innerHTML = valueInput.value
//     valueInput.value = 0
//     record.innerHTML = check.innerHTML - startResult
//     check.innerHTML = startResult
//     btn.classList.add('no-active-btn')

// } else if (valueInput.value === '' || valueInput.value === '0') {
//     valueInput.value = 0
//     addTextAfterInput()
// } else if (transfornToNumber(valueInput.value) < 0 ) {
//     deleteNewTextAfterInput()
//     numberMistake.innerHTML = 'Число должно<br>быть положительное!'
//     check.innerHTML = startResult - 1;
//     startResult = startResult - 1;
//     valueInput.value = 0
//     if(startResult < 1) {
//         gameOver()
//     };
// } else if (valueInput.value < randomNumber) {
//     deleteNewTextAfterInput()
//     check.innerHTML = startResult - 1;
//     startResult = startResult - 1;
//     numberMistake.innerHTML = 'Больше'
//     valueInput.value = 0
//     if(startResult < 1) {
//         gameOver()
//     };

// } else {
//     deleteNewTextAfterInput()
//     numberMistake.innerHTML = 'Меньше'
//     check.innerHTML = startResult - 1;
//     startResult = startResult - 1;
//     valueInput.value = 0

// }
// }
