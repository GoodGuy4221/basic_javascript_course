'use strict';

/*
6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx

 */

for (let s = 'x'; s.length <= 20; s += 'x') {
    console.log(s);
}
