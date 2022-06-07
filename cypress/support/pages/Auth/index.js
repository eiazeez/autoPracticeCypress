import { el } from './elements'

class AuthPage {

    email2NewUser (user) {  
        cy.get(el.email)
          .clear()
          .type(user.email)
    }

    submitCreate () {
        cy.get(el.submitCreateBtn)
          .click()
    }

    loginForm (user) {
        cy.get(el.emailLogin).clear().type(user.email)
        cy.get(el.passwordLogin).clear().type(user.password)

        
    }

    submitLogin () {
        cy.get(el.submitLogin).click()
    }

}

export default new AuthPage ()