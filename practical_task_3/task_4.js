'use strict';

/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.

 */

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

function check_photo(el) {
    if (el['photos']) {
        return Boolean(el['photos'][0])
    }
    return false;
}


let products_photos = products.filter(check_photo);
console.log(products_photos)


products.sort(function (el_1, el_2) {
    return el_1['price'] - el_2['price'];
})
console.log(products)
