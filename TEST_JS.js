// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке.
let age_2 = 18;
let age_3 = 60;
const checkAge3 = function(age=prompt("How old are you?")) {
    let a = typeof (age) === 'number';
    let b =  Number.parseInt(age);
    if ( a || b ){
    if (age < age_2) {
        alert("You are " + age + " years old . You don’t have access cause your age is less then.")
    }
    else if  (age >= age_2 && age <= age_3) {
        alert("You are " + age + " years old . Welcome!")
    }
    else if (age > age_3) {
    alert("You are " + age + " years old . Keep calm and look Culture channel.")
    }
} else {alert("ERROR! Wrong data type! Enter a number!")}
} 
checkAge3()