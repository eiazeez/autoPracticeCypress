// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import AuthPage from '../support/pages/Auth'
import SignUpPage from '../support/pages/signUp'
import MyAccountPage from '../support/pages/myAccount'

    const message = 'Welcome to your account.'

Cypress.Commands.add('signUp', function () {

          AuthPage.email2NewUser (user)
          AuthPage.submitCreate ()

          SignUpPage.form (user)

          MyAccountPage.shouldBeVisible ()
          MyAccountPage.greetingShouldHaveTxt (message)
    
})

Cypress.Commands.add('login', function () {

        AuthPage.loginForm (user)
        AuthPage.submitLogin ()

        MyAccountPage.shouldBeVisible ()
        MyAccountPage.greetingShouldHaveTxt (message) 

})

function userID_Alpha () {
    var email = ""
    var text = "";
    
    var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
    
    for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    var value = email + text.concat('@test.com')
    return value;
    }

    const randonEmail = userID_Alpha()

        const user = {
            email: randonEmail,
            firstName: 'Will',
            lastName: 'Byers',
            password: 'pwd123',
            birthday: {
                day: '24',
                month: 'August',
                year: '2000'
            },
            company: 'Hawkins National Laborator',
            address1: 'Rua de Exemplo, 100',
            complement: 'Byers House',
            city: 'Hawkins',
            state: 'Indiana',
            postalCode: '32644',
            message: 'Be careful with the Vecna',
            phone: '907-206-7700',
            mobile: '618-625-8313',
            addressName: 'Byers House',
          }