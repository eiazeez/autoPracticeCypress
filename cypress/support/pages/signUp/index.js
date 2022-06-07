import { el } from './elements'

class SignUpPage {

    form (user) {

        cy.get(el.genderOptions)
          .then(($li) => {
          const items = $li.toArray()
          return Cypress._.sample(items)
      })  .click()   

        cy.get(el.firstName).type(user.firstName)
        cy.get(el.lastName).type(user.lastName)
        cy.get(el.email).should('have.attr', 'value', user.email)
        cy.get(el.password).type(user.password)
        
        cy.get(el.day).select(user.birthday.day)
        cy.get(el.month).select(user.birthday.month)
        cy.get(el.year).select(user.birthday.year)

        cy.get(el.newsletter).click()
        cy.get(el.specialOffers).click()

     // Comentei essa parte do código pois estes campos já vem pré preenchidos neste fluxo.
     // Mas fica aqui como opção para caso seja usado:
     // cy.get(el.addressFirstName).clear().type(user.firstName)
     // cy.get(el.addressLastName).clear().type(user.lastName)
    
        cy.get(el.company).type(user.company)
        cy.get(el.address1).type(user.address1)
        cy.get(el.address2).type(user.complement)
        cy.get(el.city).type(user.city)
        cy.get(el.state).select(user.state)
        cy.get(el.postalCode).type(user.postalCode)
        cy.get(el.addInfos).type(user.message)
        cy.get(el.phone).type(user.phone)
        cy.get(el.mobile).type(user.mobile)
        cy.get(el.addressName).clear().type(user.addressName)

        cy.get(el.submitAccount).click()
    }

}

export default new SignUpPage ()