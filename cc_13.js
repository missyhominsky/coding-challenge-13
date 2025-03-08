//Task 2-Employee Cards Dynamic Addition

// Function to create and add an employee card
function addEmployeeCard(name, position) {
    const container = document.getElementById('employeeContainer');

    // Create card
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');

    // Create heading for employee name
    const nameElement = document.createElement('h2');
    nameElement.textContent = name;

    // Create paragraph for employee position
    const positionElement = document.createElement('p');
    positionElement.textContent = position;
    
    //"Remove" button for deleting the card 
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        container.removeChild(card); // Remove the card when clicked
    };

    // Add elements to the card
    card.appendChild(nameElement);
    card.appendChild(positionElement);
    card.appendChild(removeButton);

    //Task 5- Inline Editing 
      // Add double-click event listener to allow editing
      card.addEventListener('dblclick', () => {
        const nameInput = document.createElement('input');
        nameInput.value = nameElement.textContent;  // Pre-populate the name input
        const positionInput = document.createElement('input');
        positionInput.value = positionElement.textContent;  // Pre-populate the position input

        // Create a "Save" button to update the card
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        // Event listener for the "Save" button
        saveButton.addEventListener('click', () => {

            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;

            // Remove the inputs and Save button, returning to static content
            card.removeChild(nameInput);
            card.removeChild(positionInput);
            card.removeChild(saveButton);
        });

    
        card.appendChild(nameInput);
        card.appendChild(positionInput);
        card.appendChild(saveButton);
    });

    // Add the card to the container
    container.appendChild(card);
}

// Test cases 
addEmployeeCard('Timmy Thick', 'Nurse');
addEmployeeCard('Sabrina Bears', 'Marketing Manager');


//Task 3- Bulk Update on Employee Cards
function addEmployeeCard(name, position) {
    const container = document.getElementById('employeeContainer');

    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');

    const nameElement = document.createElement('h2');
    nameElement.textContent = name;

    const positionElement = document.createElement('p');
    positionElement.textContent = position;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    // Add event to remove the employee card when the button is clicked
    removeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // prevents the click event from bubbling (task 4)
        container.removeChild(card);
        console.log(`Removed card for ${name}`);
    });
    

    // Append name, position, and button to the card
    card.appendChild(nameElement);
    card.appendChild(positionElement);
    card.appendChild(removeButton);

    // Append the card to the container
    container.appendChild(card);
}

// Task 4- Event Bubbling
const container = document.getElementById('employeeContainer');
container.addEventListener('click', (event) => {
    // Check if the clicked element is a card
    if (event.target.classList.contains('employee-card')) {
        console.log(`Employee card clicked: ${event.target.querySelector('h2').textContent}`);
    }
});

addEmployeeCard('Emily Johnson', 'Dancer');

// Function for Bulk Update
function highlightAllEmployeeCards() {

    const nodeList = document.querySelectorAll('.employee-card');

    // Convert to an array using Array.from
    const employeeCards = Array.from(nodeList);

    // Use forEach to apply a style update to each card
    employeeCards.forEach(card => {
        card.style.backgroundColor = '#ffeb3b'; // Highlight with yellow background
        card.style.border = '2px solid #ff9800'; // Add an orange border
    });
}

// Test case
setTimeout(highlightAllEmployeeCards, 2000);
