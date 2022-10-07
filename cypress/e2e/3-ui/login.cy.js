/// <reference types="cypress" />

describe('Funcionalidade: Tela de Login', () => {

    beforeEach(() => {
        cy.visit('login');
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input')
            .type('marcelajatai@dojocypress.com');
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input')
            .type('teste@123');
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="dashboard-welcome"]')
            .should('contain', 'Bem-vindo Marcela Holanda Jataí');
    });

    it('Deve fazer login com sucesso - Usando Custom Commands', () => {
        cy.login('marcelajatai@dojocypress.com', 'teste@123');
        cy.get('[data-test="dashboard-welcome"]')
            .should('contain', 'Bem-vindo Marcela Holanda Jataí');
    });

    it('Deve fazer login com sucesso - Massa de dados Fixture', () => {
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha);
        });
        cy.get('[data-test="dashboard-welcome"]')
            .should('contain', 'Bem-vindo Marcela Holanda Jataí');
    });

    it('Quando digitar um usuário inválido deve aparecer uma mensagem de erro', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input')
            .type('marcelajatai@dojocypress.com.br');
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input')
            .type('teste@123');
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="alert"]').should('be.visible').and('contain', 'Credenciais inválidas');
    });

    it('Quando digitar uma senha inválida deve aparecer uma mensagem de erro', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input')
            .type('marcelajatai@dojocypress.com');
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input')
            .type('teste123');
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="alert"]').should('be.visible').and('contain', 'Credenciais inválidas');
    });
})
