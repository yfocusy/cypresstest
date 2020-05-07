
describe('Check Password generator', () => {
    it('finds the content "type"', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
            })
        cy.visit('https://mysterious-forest-66057.herokuapp.com/password/english')
        cy.get('#num_of_word').should('be.visible').clear().type('10').should('have.value', '10');
        cy.get('#language').should('be.visible').select('english').should('have.value', 'words');
        cy.get('#special_char').should('be.visible').select('false').should('have.value', 'false')
        cy.get('#submit').should('be.visible').click();
        cy.get('#password')
          .should('be.visible')
          .should('not.be.empty');
    })
  })