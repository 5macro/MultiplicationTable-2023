import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should return null when the start less then 1', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 100

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })

  it('should return null when the start greater then 1000', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2000
    const end = 100

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })

  it('should return null when the start greater then end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBeNull()
  })

  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    // when
    const rendered = table.renderMultiplicationTable(start, end)

    // then
    expect(rendered).toBe(`2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`)
  })
})
