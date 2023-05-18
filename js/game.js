'use strict'

const check = document.querySelector('.check')

let startResult = check.innerHTML;

const audioOne = new Audio('/audio/audio_click.mp3')

const audioLoad = new Audio('audio/audio_load.mp3')

const audioWin = new Audio('audio/audio_win.mp3')
audioWin.volume = 0.1;

const audioLose = new Audio('audio/audio_lose.mp3')


// РАЗДЕЛ МЕНЮ

let optionOne = document.querySelector(".one");
let optionTwo = document.querySelector(".two");
let optionThree = document.querySelector(".three");

const firstDispActive = document.querySelector('.disable')
const secondDispDisable = document.querySelector('.disp')


const pressOneBtn = optionOne.addEventListener("click", chooseLight);

const pressTwoBtn = optionTwo.addEventListener("click", chooseMiddle);
const pressThreeBtn = optionThree.addEventListener("click", chooseHard);



const numberBetween = document.querySelector('.number-between');


// РАЗДЕЛ ИГРЫ

const randomNumber = Math.floor(Math.random() * 20) + 1

const valueInput = document.querySelector('input')




    

const btn = document.querySelector('.press-btn');

const numberMistake = document.querySelector('.text')

const trueNumber = document.querySelector('span')

const showInscription = document.querySelector('.name-title')

const btnUpdatePage = document.querySelector('.button')



const record = document.querySelector('.record')

const displayLoading = document.querySelector('.wrapper')

const header = document.querySelector('header')

const areaEnter = document.querySelector('.area-enter')

const popUpWindow = document.querySelector('.pop-up-window')



let newElem;



// При нажатии на уровень ЛЁГКИЙ скрывает панель меню
function chooseLight() {
    // Функция, которая присваивает класы невидимости, и запукает анимацию загрузки
    updateToNext()
  firstDispActive.classList.toggle('disable')
  secondDispDisable.classList.toggle('disable')
  check.innerHTML = 12;

}



function chooseMiddle() {
    updateToNext()
  firstDispActive.classList.toggle('disable')
  secondDispDisable.classList.toggle('disable')
  check.innerHTML = 8;
}

function chooseHard() {
    updateToNext()
  firstDispActive.classList.toggle('disable')
  secondDispDisable.classList.toggle('disable')
  check.innerHTML = 4;
}


function addTextAfterInput() {
    popUpWindow.innerHTML = 'Введите число'
    
    

    
}

function deleteNewTextAfterInput() {
    popUpWindow.innerHTML = ''
    
    
}


function transfornToNumber(value) {
    return Number(value)
    
}


function updatePage() {
    btnUpdatePage.addEventListener('click', () => {
        // audioOne.play()
        audioLoad.play()
        header.classList.toggle('disable')
        displayLoading.style.display = 'flex'
        setTimeout(() => {
            location.href = 'index.html'
        }, 3000)
        
    })
    
}





function gameOver() {
    header.classList.toggle('disable')
        displayLoading.style.display = 'flex'
        setTimeout(() => {
            location.href = 'game.html'
            // displayLoading.style.display = 'none'
        }, 3000)
}



function updateToNext() {
    header.classList.toggle('disable')
    displayLoading.style.display = 'flex'
    setTimeout(() => {
        header.classList.remove('disable')
        displayLoading.style.display = 'none'
        
        
    }, 1500)
    audioLoad.play()
}



// Добавляет звук при наведении на квадрат со сложностью игры
function addAudio(elem) {
    const audioHover = elem.addEventListener('mouseover', () => {
        let audio = new Audio('audio/two_click.mp3')
        audio.play()
        
        
        
    })
    

    // Добавляете звук, если убираешь курсор

    // const audioNotHover = elem.addEventListener('mouseout', () => {
    //     let audio = new Audio('audio/two_click.mp3')
    //     audio.play()
    // })
}




















// Вызов функций для каждого квадрата со сложностью
addAudio(optionOne)
addAudio(optionTwo)
addAudio(optionThree)












console.log(randomNumber);

const listBtn = btn.addEventListener('click', () => {
    // Звук клика
    audioOne.play()

    if(valueInput.value == randomNumber) {
        // Показываем Верно над квадратом
        showInscription.innerHTML = 'Верно!'

        // Показываем верное число вместо знака вопроса
        trueNumber.innerHTML = valueInput.value
        // Ставим значение в поле инпут на 0
        valueInput.value = 0


        //Меняем сам параметр, чтоб визуально изменился
        check.innerHTML = check.innerHTML - 1;

        //Меняем число в поле РЕКОРД
        record.innerHTML = check.innerHTML

        audioWin.play()

        
        //Блокируем подальшое нажатие кнопки
        btn.classList.add('no-active-btn')
    } else if (valueInput.value === '' || valueInput.value === '0') {
        // Устанавливаем значение в инпуте на 0
        valueInput.value = 0

        // Функция, добавляющая текст под поле инпут
        addTextAfterInput()

        // //Меняем число в поле РЕКОРД
        // record.innerHTML = 13 - check.innerHTML

        // //Меняем сам параметр, что визуально изменился
        // check.innerHTML = check.innerHTML - 1;

    } else if ( transfornToNumber(valueInput.value) < 0 ) {
        // Устанавливаем значение в инпуте на 0
        valueInput.value = 0

        // Меняем название над блоком инпут
        numberMistake.innerHTML = 'Число должно<br>быть положительное!'


        //Меняем число в поле РЕКОРД
        record.innerHTML 

        //Меняем сам параметр, что визуально изменился
        check.innerHTML = check.innerHTML - 1;

        // Функция, убирающая текст под полем инпут, если у нас присутствует какое-то число в инпуте
        deleteNewTextAfterInput()

        // Если кол-во попыток стает 0 - вызываем функцию
        if(check.innerHTML < 1) {
            audioLose.play()
            trueNumber.innerHTML = 'LOSE'

            //Блокируем подальшое нажатие кнопки
            btn.classList.add('no-active-btn')
        };

    } else if (valueInput.value < randomNumber){
        // Устанавливаем значение в инпуте на 0
        valueInput.value = 0

        // Меняем название над блоком инпут
        numberMistake.innerHTML = 'Больше'


        
        

        //Меняем сам параметр, что визуально изменился
        check.innerHTML = check.innerHTML - 1;

        // Функция, убирающая текст под полем инпут, если у нас присутствует какое-то число в инпуте
        deleteNewTextAfterInput()

        // Если кол-во попыток стает 0 - вызываем функцию
        if(check.innerHTML < 1) {
            audioLose.play()
            // Меняем знак в квадрате LOSE вместо ?
            trueNumber.innerHTML = 'LOSE'

            //Блокируем подальшое нажатие кнопки
            btn.classList.add('no-active-btn')

        };
    } else {
        // Устанавливаем значение в инпуте на 0
        valueInput.value = 0

        // Меняем название над блоком инпут
        numberMistake.innerHTML = 'Меньше'


    
        //Меняем сам параметр, что визуально изменился
        check.innerHTML = check.innerHTML - 1;

        // Функция, убирающая текст под полем инпут, если у нас присутствует какое-то число в инпуте
        deleteNewTextAfterInput()

        // Если кол-во попыток стает 0 - вызываем функцию
        if(check.innerHTML < 1) {
            audioLose.play()
            // Функция, останавливающая игру
            // gameOver()

            //Блокируем подальшое нажатие кнопки
            btn.classList.add('no-active-btn')
        };
    }
})




updatePage()





















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