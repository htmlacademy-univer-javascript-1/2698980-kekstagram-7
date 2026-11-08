// Проверка длины строки
const checkStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};

// Проверка строки на палиндром
const isPalindrome = function (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};

// Извлечение цифр из строки или числа
const extractDigits = function (value) {
  const string = value.toString();
  let digits = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      digits += string[i];
    }
  }

  return parseInt(digits, 10);
};
checkStringLength('проверяемая строка', 20);
isPalindrome('топот');
extractDigits('2023 год');
