function materia() { 
    var materias = parseFloat(document.getElementById('subject').value);
    switch (materias) {
        case 1:
            document.getElementById('resultado').value = 'Biblia';
            break;
        case 2:
            document.getElementById('resultado').value = 'Biologia';
            break;
        case 3:
            document.getElementById('resultado').value = 'Programacion';
            break;
        case 4:
            document.getElementById('resultado').value = 'Redes Informatica';
            break;
        case 5:
            document.getElementById('resultado').value = 'Math';
            break;
        case 6:
            document.getElementById('resultado').value = 'Fisica Elemental';
            break;
        case 7:
            document.getElementById('resultado').value = 'Diseno Web';
            break;
        case 8:
            document.getElementById('resultado').value = 'Quimica';
            break;
        case 9:
            document.getElementById('resultado').value = 'Mantenimiento';
            break;
        case 10:
            document.getElementById('resultado').value = 'Laboratorio';
            break;
        case 11:
            document.getElementById('resultado').value = 'Contabilidad';
            break;
        default:
           alert('No definido en la lista');
            break;
    }

}
