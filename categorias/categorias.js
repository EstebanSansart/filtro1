const agregarFila = () => {
    document.getElementsByClassName('table').insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td>'
  }
  
  const eliminarFila = () => {
    const table = document.getElementsByClassName('table')
    const rowCount = table.rows.length
    
    if (rowCount <= 1)
      alert('No se puede eliminar el encabezado')
    else
      table.deleteRow(rowCount -1)
  }