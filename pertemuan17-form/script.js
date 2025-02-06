document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validasi sederhana
    if (username === 'user' && password === 'password') {
        errorMessage.style.display = 'none';
        alert('Login berhasil!');
        // Redirect atau lakukan sesuatu setelah login berhasil
    } else {
        errorMessage.textContent = 'Username atau password salah!';
        errorMessage.style.display = 'block';
    }
});