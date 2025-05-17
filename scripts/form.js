// Format and display last modified date and time
const lastMod = new Date(document.lastModified);
document.getElementById('lastModified').textContent =
  lastMod.toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'medium' });

// Handle form submission
document.forms['form'].addEventListener('submit', function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const entries = Object.fromEntries(data.entries());
  entries.features = data.getAll('features');

  console.log("Submitted Review:", entries);
  alert("Thank you for your review!");
  this.reset();
});
