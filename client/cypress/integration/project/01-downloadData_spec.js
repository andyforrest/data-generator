describe('Data Generator', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Checks if first name has been added', () => {
        cy.get('#select-key-drop-basic').select('firstName')
        cy.get('#btn-add-prop').click()
        cy.get('#object-props > ul').should('contain.text', 'firstName')
    })

    it('Check if it generates and arranges a CSV available for download', () => {
        cy.get('#entries-input').type("1")
        cy.get('#select-key-drop-basic').select('First Name')
        cy.get('#btn-add-prop').click()
        cy.get('#select-key-drop-basic').select('Last Name')
        cy.get('#btn-add-prop').click()
        cy.get('#select-key-drop-basic').select('Email')
        cy.get('#btn-add-prop').click()

        
        cy.get('#select-key-drop-basic').select('Age')
        cy.get('#select-key-drop-age').select('Any Adult')
        cy.get('#btn-add-prop').click()


        cy.get('#select-key-drop-basic').select('Address')
        cy.get('#btn-add-prop').click()
        cy.get('#select-key-drop-basic').select('Yes/No')
        cy.get('#btn-add-prop').click()
        cy.get('#select-key-drop-basic').select('Language')
        cy.get('#btn-add-prop').click()
        cy.get('#select-key-drop-basic').select('Phone No')
        cy.get('#btn-add-prop').click()


        cy.get('#custom-input').type('car')
        cy.get('#value-select-custom').select('Vehicle')
        cy.get('#select-key-drop-car-custom').select('Car')
        cy.get('#btn-add-custom').click()

        cy.contains('Generate CSV').click()
        cy.contains('Arrange CSV').click()
        cy.contains('Download CSV').click()
    })

    it('Executes convert csv2json script', () => {
        cy.exec('cd /Users/andrewforrest/Github/data-generator-csv-master/data-generator/client/cypress/integration/project/')
        cy.exec('node csv2json.js')
        
    })
})