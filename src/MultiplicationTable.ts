export type Multiplication = [number, number, number]

export class MultiplicationTable {
  public renderMultiplicationTable(start: number, end: number): string|null {
    if(!this.isValid(start, end)) {
      return null
    }
    const table: Multiplication[][] = this.generateMultiplicationTable(start, end)
    const tableString: string = this.render(table)
    return tableString
  }

  private isValid(start: number, end: number): boolean {
    return Number.isInteger(start) && Number.isInteger(end)
        && this.isValidNumber(start) && this.isValidNumber(end)
        && this.isEndGreaterOrEqualThanStart(start, end)
  }

  private isValidNumber(num: number): boolean {
    return num>=1 && num<=1000
  }
  private isEndGreaterOrEqualThanStart(start: number, end: number): boolean {
    return start <= end
  }

  private generateMultiplicationTable(start: number, end: number): Multiplication[][] {
    const result: Multiplication[][] = []
    for(let row = start; row<=end; row++) {
      const line = this.generateMultiplicationRow(start, row)
      result.push(line)
    }
    return result
  }

  private generateMultiplicationRow(start: number, row: number): Multiplication[]{
    const line: Multiplication[] = []
    for(let column=start; column <= row; column++) {
      line.push([column, row, column*row])
    }
    return line
  }


  private render(table: Multiplication[][]): string {
    return table.map(
      row => row.map(equ => `${equ[0]}*${equ[1]}=${equ[2]}`).join('  ')
    ).join('\n')
  }
}
