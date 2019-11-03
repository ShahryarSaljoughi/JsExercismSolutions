
export class Triangle {
  constructor(rowNo) {
    this.rowNo = rowNo;
  }

  get lastRow() {
    let rows = this.rows;
    return rows[rows.length -1];
  }

  get rows() {
    let rows = [];
    rows.push([1]);
    for( let i=0; i < this.rowNo - 1; i++) {
      // this loop in each iteration creates and adds a new row
      
      let newRow = [];
      let lastInsertedRow = rows[rows.length - 1];
      
      newRow.push(1);
      for(let j=0; j<lastInsertedRow.length-1; j++) {
        newRow.push( lastInsertedRow[j] + lastInsertedRow[j+1]);
      }
      newRow.push(1);
      rows.push(newRow);
    }
    return rows;
  }
}
