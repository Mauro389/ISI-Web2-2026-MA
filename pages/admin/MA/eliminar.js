import TeamsService from '../../../shared/services/teams.service.js';

const teamsService = new TeamsService();

const inputId     = document.getElementById('input-id');
const btnEliminar = document.getElementById('btn-eliminar');
const resultado   = document.getElementById('resultado');

btnEliminar.addEventListener('click', async () => {
    const id = inputId.value.trim();
    if (!id) {
        resultado.textContent = 'Por favor ingresa un ID.';
        return;
    }

    const confirmar = confirm(`¿Seguro que deseas eliminar el equipo con ID: ${id}?`);
    if (!confirmar) return;

    try {
        await teamsService.deleteById(id);
        resultado.textContent = `Equipo con ID ${id} eliminado correctamente.`;
    } catch (error) {
        resultado.textContent = `Error: ${error.message}`;
    }
   
});