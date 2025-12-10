// 1. GET THE HTML ELEMENTS
var form = document.getElementById('lostForm');
var container = document.getElementById('itemsContainer');

// ==========================================
// PART A: SAVING DATA (Runs on Report Page)
// ==========================================
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the page from refreshing

        // 1. Create a simplified item object from the form inputs
        var newItem = {
            name: document.getElementById('itemName').value,
            category: document.getElementById('category').value,
            date: document.getElementById('dateLost').value,
            location: document.getElementById('location').value,
            desc: document.getElementById('description').value
        };

        // 2. Get the current list from memory (or start a new empty list)
        var oldItems = JSON.parse(localStorage.getItem('foundItems')) || [];

        // 3. Add the new item to the list
        oldItems.push(newItem);

        // 4. Save the updated list back to memory
        localStorage.setItem('foundItems', JSON.stringify(oldItems));

        // 5. Success message and go to the list page
        alert('Report Submitted!');
        window.location.href = 'items.html';
    });
}

// ==========================================
// PART B: LOADING DATA (Runs on Items Page)
// ==========================================
function loadItems() {
    // Check if we are on the items page (if container exists)
    if (container) {
        // 1. Get the list from memory
        var savedItems = JSON.parse(localStorage.getItem('foundItems')) || [];

        // 2. Clear the screen first
        container.innerHTML = '';

        // 3. Loop through every item and show it
        savedItems.forEach(function(item) {
            // Create a simpler HTML card
            var card = `
                <div class="item-card">
                    <h4>${item.name}</h4>
                    <p><strong>Category:</strong> ${item.category}</p>
                    <p><strong>Location:</strong> ${item.location}</p>
                    <p><strong>Date:</strong> ${item.date}</p>
                    <p><em>${item.desc}</em></p>
                </div>
            `;
            
            // Add the card to the container
            container.innerHTML += card;
        });
    }
}