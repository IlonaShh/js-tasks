//task 1
function createArray(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
      return "Обидва параметри повинні бути числовими значеннями";
    }
  
    if (start > end) {
      return "Початкове значення повинно бути меншим або рівним кінцевому значенню";
    }
  
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

   let arr = createArray(2, 9);

  // Виводимо результат у консоль
  console.log(arr);

  //task 2
  function printSequence(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = a; j <= i; j++) {
        console.log(i);
      }
    }
  }
  printSequence(1, 7);

  //task 3
  function randArray(k) {
    const result = [];
    for (let i = 0; i < k; i++) {
      const randomValue = Math.floor(Math.random() * 500) + 1;
      result.push(randomValue);
    }
    return result;
  }
  
  const randomNumbers = randArray(5);
  console.log(randomNumbers);

  //task 4
  function compact(arr) {
    const result = [];
  
    for (const item of arr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  
    return result;
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2); // [5, 3, 4, 6, 7]

  //task 5
  function separateByType(arr) {
    const numberArray = [];
    const stringArray = [];
  
    for (const item of arr) {
      if (typeof item === 'number') {
        numberArray.push(item);
      } else if (typeof item === 'string') {
        stringArray.push(item);
      }
    }
  
    return [numberArray, stringArray];
  }
  
  const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  const [numberArray, stringArray] = separateByType(arr);
  
  console.log(numberArray);
  console.log(stringArray);
  
  //Task 6
  function calc(a, b, op) {
    if (op === 1) {
      return a - b; 
    } else if (op === 2) {
      return a * b; 
    } else if (op === 3) {
      if (b !== 0) {
        return a / b; 
      } else {
        return "Помилка: Ділення на нуль";
      }
    } else {
      return a + b; // Додавання (за замовчуванням)
    }
  }
  
  console.log(calc(10, 3, 1)); 
  console.log(calc(10, 3, 2)); 
  console.log(calc(10, 3, 3)); 
  console.log(calc(10, 3, 4));

  //task 7
  function findUnique(arr) {
    const uniqueSet = new Set(arr); 
    return uniqueSet.size === arr.length; 
  }
  
  console.log(findUnique([1, 2, 3, 5, 3]));  
  console.log(findUnique([1, 2, 3, 5, 11])); 
  
  
  
  