import HomePage from '../support/pages/home'
import MyAccountPage from '../support/pages/myAccount'
import CheckoutPage from '../support/pages/cart'


describe ('Caso de Teste 01', function () {

    context ('Para criar uma conta', function () {

        before(function () {
            HomePage.go ()
            HomePage.goToAuth ()
        })

        it('deve realizar o cadastro', function () {
            cy.signUp ()
            MyAccountPage.goToHome ()
            HomePage.signOut ()
        })
    })

    context ('Para fazer login com a conta criada', function () {

        before(function () {
            HomePage.go ()
            HomePage.goToAuth ()
        })

        it('deve realizar o login normalmente', function () {
            cy.login()
            MyAccountPage.goToHome ()  
            HomePage.signOut ()   
        })
    })

    context ('Para fazer uma compra na conta criada', function () {

        before(function () {
            HomePage.go ()
            HomePage.goToAuth ()
            cy.login()
            MyAccountPage.goToHome ()  
        })

        it('deve adicionar um dos produtos ao carrinho, estando logado na conta criada', function () {
            HomePage.chooseFeaturedHome ()
            HomePage.getRandonProduct ()
            HomePage.goToCart ()

            CheckoutPage.shouldHaveProduct()
        })
    })
})