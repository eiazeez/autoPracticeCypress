import { el } from './elements'

class HomePage {

    go () {
        cy.visit('/') 

        cy.get(el.mainColun)
          .should('be.visible')        
    }

    goToAuth () {
        cy.get(el.signIn)
          .click()
        cy.get(el.mainColun)
          .should('be.visible')
    }

    signOut () {
        cy.get(el.signOut).click()
    }

    chooseFeaturedHome () {
      cy.get(el.featuredHome)
        .then(($li) => {
      const items = $li.toArray()
      return Cypress._.sample(items)
  }).click()
}

    getRandonProduct () {
      return cy.get(el.products).find('h5')
      .then(($li) => {
        const items = $li.toArray()
        return Cypress._.sample(items)
      })
      .then(($li) => {
        expect(Cypress.dom.isJquery($li), 'jQuery element').to.be.true
        cy.log(`you picked "${$li.text()}"`) 
      .siblings(el.addToCart)
      .find (el.addToCartBtn)
      .click( { force: true } )

      cy.get(el.productsAdded, { timeout: 10000 } ).should(($h2) => {
        expect($h2.first()).to.contain('Product successfully added')
      })
    })
  }

    goToCart () {
      cy.get(el.goToCheckout).click()
    }

}

export default new HomePage ()