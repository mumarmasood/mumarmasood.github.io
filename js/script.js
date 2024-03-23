document.addEventListener('DOMContentLoaded', function () {
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            let html = '<table class="table">';
            rows.forEach((row, index) => {
                const columns = row.split(',');
                if (index === 0) {
                    html += '<tr>';
                    columns.forEach(column => html += `<th>${column}</th>`);
                    html += '</tr>';
                } else {
                    html += '<tr>';
                    columns.forEach(column => html += `<td>${column}</td>`);
                    html += '</tr>';
                }
            });
            html += '</table>';
            document.getElementById('csv-data').innerHTML = html;
        })
        .catch(error => console.error('Error loading CSV data:', error));
});
