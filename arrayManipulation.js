function processArray(numbers) {
    return numbers.map(number => {
      if (number % 2 === 0) {
        return number * number;
      } else {
        return number * 3;
      }
    });
  }
  
  const mynumbers = [15, 16, 17, 18, 19];
  const processedNumbers = processArray(mynumbers);
  console.log(processedNumbers); 
  
