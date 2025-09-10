//your JS code here. If required.
document.getElementById("calculate").addEventListener("click", function() {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      let operator = document.getElementById("operator").value;
      let result;

      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
      } else {
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
          default:
            result = "Invalid operation!";
        }
      }

      document.getElementById("result").innerText = "Result: " + result;
    });

    // Change text functionality
    document.getElementById("change_text").addEventListener("click", function() {
      const newText = ["Bye", "Good Bye", "To", "Your", "Class"];
      const divisions = document.getElementsByClassName("division");
      for (let i = 0; i < divisions.length; i++) {
        divisions[i].innerText = newText[i];
      }
    });