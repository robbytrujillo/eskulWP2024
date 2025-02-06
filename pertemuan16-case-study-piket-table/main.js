function highlightToday() {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"];
    const today = new Date().getDay();
    const rows = document.querySelectorAll("#jadwal-body tr");
    
    rows.forEach(row => {
        if (row.cells[0].innerText === days[today]) {
            row.classList.add("highlight");
        }
    });
}

highlightToday();