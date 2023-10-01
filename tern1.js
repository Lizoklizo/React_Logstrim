// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с помощью console.log()

let a = Math.floor(Math.random() * 100);
let result;

if (a > 10) {
    result = a;
  } else {
    result = a * 2;
  }
  
  if (result > 5) {
    console.log(2 * a + 1);
  } else {
    if (a < 3) {
      result = 1;
    } else {
      result = 2 * (a - 2);
    }
  
    switch (true) { 
      case result > 4:
        console.log(5);
        break;
      case a % 2 === 0:
        console.log(6);
        break;
      default:
        console.log(7);
    }
  }
  
