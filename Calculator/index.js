// Get the input element where results and inputs will be displayed
let screen = document.getElementById('screen');

// Get all the button elements
buttons = document.querySelectorAll('button');

// Initialize an empty string to store the current input or expression
let screenValue = '';

// Loop through all buttons to add click event listeners
for (item of buttons) {
    item.addEventListener('click', (e) => {

        // Get the text inside the clicked button
        buttonText = e.target.innerText;
        console.log(buttonText); // Log the button text for debugging

        // Handle multiplication (replace 'X' with '*')
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        // Handle Clear (C) button — clears the entire screen
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }

        // Handle Backspace (B) button — removes the last character
        else if (buttonText == 'B') {
            screen.value = screen.value.substring(0, screen.value.length - 1);
            // Update screenValue too, to keep them in sync
            screenValue = screen.value;
        }

        // Handle Equals (=) button — evaluate the current expression
        else if (buttonText == '=') {
            try {
                // Use eval() to calculate the result of the expression
                screen.value = eval(screenValue);
                // Update screenValue to the result, allowing further operations
                screenValue = screen.value;
            } catch (error) {
                // Handle invalid mathematical expressions
                screen.value = "Error";
                screenValue = "";
            }
        }

        // Handle all other button inputs (numbers, operators, etc.)
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

