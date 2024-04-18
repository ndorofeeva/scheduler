const date = new Date()
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const currentMonthIndex = date.getMonth()
const prevMonth = months[currentMonthIndex === 0 ? 11 : currentMonthIndex - 1]

describe('Calendar month view', () => {
  it('switches to previous month', () => {
    cy.visit('/')
    cy.contains(months[currentMonthIndex])
    cy.get('[data-cy="prev-month"]').click()
    cy.contains(prevMonth)
    cy.get('[data-cy="next-month"]').click()
    cy.contains(months[currentMonthIndex])
  })
})
