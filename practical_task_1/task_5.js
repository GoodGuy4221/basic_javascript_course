'use strict';

/*
   5*. Пользователь, с помощью команды prompt, вводит номер билета - 6 цифр. Программа определяет является
   ли счастливым данный билетик и выводит соответствующее сообщение в консоль. Счастливый билет - билет,
   у которого сумма первых трех цифр равна сумме последних трех цифр номера билета.
   Для выполнения задания необходимо использовать оператор % и ветвление.
   Чтобы сравнить два значения, можно использовать if и else (курс основ программирования), например:

   const a = 1;
   const b = 1;
   if (a === b) {
     console.log('Две переменные a и b равны.');
   }
   */

let ticket_number = +prompt('номер билета 6 цифр');

let number_6 = ticket_number % 10
let number_5 = Math.floor(ticket_number / 10) % 10
let number_4 = Math.floor(ticket_number / 100) % 10
let number_3 = Math.floor(ticket_number / 1000) % 10
let number_2 = Math.floor(ticket_number / 10000) % 10
let number_1 = Math.floor(ticket_number / 100000) % 10

let the_sum_of_the_first_three_digits = number_1 + number_2 + number_3;
let the_sum_of_the_last_three_digits = number_4 + number_5 + number_6;

let message = 'обычный билет';

if (the_sum_of_the_first_three_digits === the_sum_of_the_last_three_digits) {
    message = 'счастливый билет';
}

console.log(message);
