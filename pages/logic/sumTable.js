export function calculateSum(id) {

    const table = document.getElementById(id);
    
    const numRows = table.rows.length;
    const numCols = table.rows[0].cells.length;   //    chat gpt


    let sumArray =[];
    
    for(let col=0; col<numCols; col++){
        let total=0;
        for (let row=0; row< numRows ; row ++){
          const cell = table.rows[row].cells[col]
          
          const cellValue = parseInt(cell.textContent);
          
          total +=cellValue
          
        }
        sumArray[col]=total
    }
    
    sumArray.shift()
    
    return sumArray;
    
  }

