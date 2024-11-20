let screen = document.getElementById("display-data");

document.getElementById('buttons').addEventListener('click', function(event) {
    // Ensure the clicked element is a button
    if (event.target.classList.contains('btn')) {
        let buttonValue = event.target.getAttribute('data-value');
        
        // Check if the button value is a number or an operator
        if (buttonValue === 'C') {
            screen.innerHTML = '0'; // Clear screen if C is clicked
        } else if (buttonValue === '=') {
            try {
                screen.innerHTML = eval(screen.innerHTML); // Calculate result if '=' is clicked
            } catch (e) {
                screen.innerHTML = 'Error'; // Handle invalid expressions
            }
        } else {
            // Handle appending numbers/operators
            if (screen.innerHTML === '0' && buttonValue !== '.') {
                screen.innerHTML = buttonValue; // Replace 0 with the clicked value
            } else {
                screen.innerHTML += buttonValue; // Append clicked value
            }
        }
    }
});
