// Increment review counter in localStorage
let count = localStorage.getItem('reviewCount') || 0;
count = parseInt(count) + 1;
localStorage.setItem('reviewCount', count);

// Display count
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reviewCount').textContent = `You have submitted ${count} review(s).`;
});
