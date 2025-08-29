const name = prompt("Ваше имя")
const birthyear = +prompt("Ваш год рождения")
const yearnow = +prompt("Введите нынишни год")

function getage(name, birthyear, yearnow) {
    let age = yearnow - birthyear;
    return `${name}: Ваш возраст ${age}`;
}

const result = getage(name, birthyear, yearnow)
alert(result)



function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomOperator() {
  const operators = ['+', '-', '*', '/'];
  return operators[Math.floor(Math.random() * operators.length)];
}

function generator(count) {
  for (let i = 0; i < count; i++) {
    const num1 = RandomInt(1, 20);
    const num2 = RandomInt(1, 20);
    const operator = RandomOperator();

    // Генерируем пример как строку
    const example = `${num1} ${operator} ${num2}`;
    // Вычисляем правильный ответ
    const correctAnswer = eval(example);

    // Спрашиваем ответ у пользователя
    const userAnswer = +prompt(`Решите пример: ${example}`);

    // Проверяем правильность
    if (userAnswer === correctAnswer) {
      alert(`Ваш ответ верный: ${userAnswer}`);
    } else {
      alert(`Ваш ответ не верный:  ${userAnswer}. Правильный ответ:  ${correctAnswer}`);
    }
  }
}

// Запрос у пользователя количества примеров
const count = +prompt("Сколько примеров вы хотите решить?");
generator(count);
