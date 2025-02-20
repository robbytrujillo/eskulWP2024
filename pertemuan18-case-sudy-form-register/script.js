document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let address = document.getElementById('address').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi';
        isValid = false;
    }
    
    if (email === '' || !email.includes('@')) {
        document.getElementById('emailError').textContent = 'Email tidak valid';
        isValid = false;
    }
    
    if (address === '') {
        document.getElementById('addressError').textContent = 'Alamat harus diisi';
        isValid = false;
    }
    
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password minimal 6 karakter';
        isValid = false;
    }
    
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Konfirmasi password tidak cocok';
        isValid = false;
    }
    
    if (isValid) {
        alert('Registrasi berhasil!');
    }
});