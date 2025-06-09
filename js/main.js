// Navigation Functions
function navigateToOrders() {
    if (!isLoggedIn) {
        toggleLoginModal();
        return;
    }
    window.location.href = '/orders';
}

function navigateToCart() {
    if (!isLoggedIn) {
        toggleLoginModal();
        return;
    }
    window.location.href = '/cart';
}

function updateLocation() {
    // Show location picker modal
    document.getElementById('locationModal').style.display = 'block';
}

function handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.querySelector('.search_box input').value;
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
}

// Category Navigation
function navigateToCategory(category) {
    window.location.href = `/category/${category}`;
}