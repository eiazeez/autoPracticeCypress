import { el } from './elements'

class MyAccountPage {

    shouldBeVisible () {
        cy.get(el.greeting)
          .should('be.visible')
    }

    greetingShouldHaveTxt (expectedTxt) {
        cy.get(el.greeting).should(($p) => {
           expect($p.first()).to.contain(expectedTxt)
        })
    }

    goToHome () {
        cy.get(el.goToHome).click()
    }

        

}

export default new MyAccountPage ()