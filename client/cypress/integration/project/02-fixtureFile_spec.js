describe('Web form', function(){
    beforeEach(() => {
        cy.visit('./form.html')
    })

    

    it('requires firstname and lastname to be filled in', function(){

        cy.get('#nextBtn').click()
        cy.get('[style="display: block;"] > h3').should('have.text', "Name:")
    })

    

    it('requires user email, number and address', function(){

        cy.fixture('fileTest.json').then((user)=>{

            cy.get('#firstName').type(user.firstName)
            cy.get('#lastName').type(user.lastName)
            cy.get('#nextBtn').click()
            cy.get('#nextBtn').click()
            cy.get('[style="display: block;"] > h3').should('have.text', "Contact Info:")
        

        
    })

})



it('requires user language and age are filled out', function(){

    cy.fixture('fileTest.json').then((user)=>{

        cy.get('#firstName').type(user.firstName)
        cy.get('#lastName').type(user.lastName)
        cy.get('#nextBtn').click()

        cy.get('#email').type(user.email)
        cy.get('#phoneNo').type(user.phoneNo)
        cy.get('#address').type(user.address)
        cy.get('#nextBtn').click()

        cy.get('#nextBtn').click()
        cy.get('[style="display: block;"] > h3').should('have.text', "About You:")
    

    
})

})

it('requires user vehicle info filled out', function(){

    cy.fixture('fileTest.json').then((user)=>{

        cy.get('#firstName').type(user.firstName)
        cy.get('#lastName').type(user.lastName)
        cy.get('#nextBtn').click()

        cy.get('#email').type(user.email)
        cy.get('#phoneNo').type(user.phoneNo)
        cy.get('#address').type(user.address)
        cy.get('#nextBtn').click()

        cy.get('#language').type(user.language)
        cy.get('#age').type(user.age)
        cy.get('#nextBtn').click()

        cy.get('#nextBtn').click()
        cy.get('[style="display: block;"] > h3').should('have.text', "Vehicle Info:")
    

    
})

})

it('fills in form successfully', function(){
        
    cy.fixture('fileTest.json').then((user)=>{

        cy.get('#firstName').type(user.firstName)
        cy.get('#lastName').type(user.lastName)
        cy.get('#nextBtn').click()

        cy.get('#email').type(user.email)
        cy.get('#phoneNo').type(user.phoneNo)
        cy.get('#address').type(user.address)
        cy.get('#nextBtn').click()


        cy.get('#language').type(user.language)
        cy.get('#age').type(user.age)
        cy.get('#nextBtn').click()

        cy.get('#car').type(user.car)
        cy.get('#nextBtn').click()
        cy.get('#nextBtn')
        cy.get('[style="display: block;"] > h3').should('have.text', "Name:")

        




        

        

        

    })

    

    
})

    

})


