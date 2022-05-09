// JS. HW_2
// Напишите валидационный скрипт используя функции 
//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой
let lett = /[a-zA-Zа-яА-Я]/;
let num = /[0-9]/;
let CapLet = /[A-ZА-Я]/;
const validScript = function(str) { 
typeof (str) ==='string';
if (str.length ===0){
        console.log("String cannot be empty")  
    }
    else if (str.length < 5 || str.length > 64) {
        console.log("You must enter at least 5 and no more than 64 characters.");
    } 
    else if (!lett.test(str)) {
        console.log("You must to enter letters.");
    } 
    else if (!CapLet.test(str)) {
        console.log("You must to enter at least one capital letter.");
    } 
    else if (!num.test(str)) {
        console.log("You must enter at least one number.");
    } 
    else if (!str.includes('@')){
        console.log("You must enter at least one @.")
    
    }
else {console.log('WELCOME')}
};
validScript("@1w2A131")