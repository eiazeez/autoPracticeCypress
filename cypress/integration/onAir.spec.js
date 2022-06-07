

// Esse teste é destinado a verificar se a página principal do teste está no Ar.

it('Site deve estar no Ar', function () {
    cy.visit('http://automationpractice.com/index.php') 

    // Para validação de que a página está Ok, a vitrine principal deve estar visível.
    cy.get('#center_column')
      .should('be.visible')
})