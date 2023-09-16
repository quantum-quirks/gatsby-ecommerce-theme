describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2')
    .contains("Accessibility is not just a buzzword, it's a human right");
  })
}) 
