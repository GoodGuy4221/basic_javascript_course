'use strict';

// 1. Получите ссылку на .scrollCheck
let scrollCheck = document.querySelector('.scrollCheck');

/**
 * Инициализация. При открытии страницы вставляем несколько постов
 * на страницу
 */
function init() {
    // 4. Если условие истинно, то вызывайте insertPosts и рекурсивно вызывайте
    // init.
    if (window.innerHeight === document.body.offsetHeight) {
        insertPosts();
        init();
    }
}

init();

document.addEventListener('scroll', function (event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        // 5. Если условие истинно вызывайте insertPosts.
        insertPosts();
    }
});

/**
 * Функция вставляет несколько постов на страницу.
 */
function insertPosts() {
    // 3. в postsMarkup вам надо будет в цикле дописывать с помощью конкатенации
    // разметку, возвращаемую getPostMarkup.
    let postsMarkup = '';
    for (let i = 0; i < 2; i++) {
        postsMarkup += getPostMarkup(i);
    }

    // 3.1 в getPostMarkup в качестве аргумента передавайте счетчик цикла


    // 3.2 Перед scrollCheck вставьте записанную в postsMarkup разметку
    scrollCheck.insertAdjacentHTML('beforebegin', postsMarkup);
}

/**
 * Функция возвращает html-разметку для одного поста, который будет
 * вставляться на страницу.
 * @param {number} counter число, для того, чтобы прибавить его ко времени unix.
 * @returns {string} html-разметка одного поста
 */
function getPostMarkup(counter) {
    /* 2. Сделайте, чтобы в num записывалось текущее время unix (https://mzl.la/3iMz2Jr)
    плюс counter
    */

    let num = new Date().getTime() + counter;
    const stringArray = [
        'Нравственность крепнет, когда дряхлеет плоть.',
        'Целомудренна та, которую никто не пожелал.',
        'Лучше когда тебя потом простят, чем не заметят.',
        'Хороший поцелуй стоит еще одного.',
        'Один хороший поворот приносит большую часть одеяла.',
        'Любовь, деньги и заботы скрыть невозможно.',
        'Из близких отношений происходят дети.',
    ];
    const randomNumberText = Math.floor(Math.random() * stringArray.length);
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        ${stringArray[randomNumberText]}
    </div>`;
}
