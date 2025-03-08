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

    // Add the card to the container
    container.appendChild(card);
}

// Test cases 
addEmployeeCard('Timmy Thick', 'Nurse');
addEmployeeCard('Sabrina Bears', 'Marketing Manager');
