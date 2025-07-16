

document.getElementById('signInForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (!email || !password) {
    message.textContent = 'Please fill in both fields.';
    return;
  }

  // Simulate sign-in success
  message.style.color = 'green';
  message.textContent = 'Sign-in successful! 🎉';

  // TODO: Replace with actual authentication logic
});