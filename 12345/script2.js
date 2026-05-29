const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('button');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1', '#FFBD33', '#A133FF', '#33FFF3', '#FF3333', '#F3FF33'];

// Перемещение div и кнопок в случайные позиции
boxes.forEach(box => {
    box.style.left = Math.random() * (window.innerWidth - box.offsetWidth) + 'px';
    box.style.top = Math.random() * (window.innerHeight - box.offsetHeight) + 'px';
});

buttons.forEach(button => {
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
});

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        boxes[index].style.backgroundColor = randomColor;
    });
});
