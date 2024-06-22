function toggleMenu() {
    // Aquí iría el código para mostrar/ocultar el menú
    alert('Menú desplegable');
}

function searchBook() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('resultsContainer');

    // Aquí iría el código para buscar el libro, por ahora simula la búsqueda
    resultsContainer.innerHTML = `
        <h2>Resultados</h2>
        <p>${searchInput}, Autor: Miguel de Cervantes Saavedra</p>
        <button class="request-button">Solicitar</button>
    `;
}
