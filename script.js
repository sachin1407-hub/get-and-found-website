
var form = document.getElementById('lostForm');
var container = document.getElementById('itemsContainer');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var newItem = {
            name: document.getElementById('itemName').value,
            category: document.getElementById('category').value,
            date: document.getElementById('dateLost').value,
            location: document.getElementById('location').value,
            desc: document.getElementById('description').value
        };
        var oldItems = JSON.parse(localStorage.getItem('foundItems')) || [];
        oldItems.push(newItem);
        
        localStorage.setItem('foundItems', JSON.stringify(oldItems));

        alert('Report Submitted!');
        window.location.href = 'items.html';
    });
}

function loadItems() {
    
    if (container) {

        var savedItems = JSON.parse(localStorage.getItem('foundItems')) || [];

        container.innerHTML = '';

        savedItems.forEach(function(item) {
            var card = `
                <div class="item-card">
                    <h4>${item.name}</h4>
                    <p><strong>Category:</strong> ${item.category}</p>
                    <p><strong>Location:</strong> ${item.location}</p>
                    <p><strong>Date:</strong> ${item.date}</p>
                    <p><em>${item.desc}</em></p>
                </div>
            `;
            
            container.innerHTML += card;
        });
    }

}
