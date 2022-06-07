import { el } from './elements'

class CheckoutPage {

    shouldHaveProduct () {
        cy.get(el.productName).invoke('text').then(($value) => {
        cy.get(el.productName)
          .should('have.text', $value)
      })   
    }

}

export default new CheckoutPage ()