/// <reference types="cypress" />
const faker = require('faker-br');

describe('Funcionalidade: Tela de Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar');
    });

    it('Deve fazer um cadastro com sucesso', () => {
        let nome = faker.name.findName()
        let email  = faker.internet.email()

        cy.get('[data-test="register-name"]').type(nome);
        cy.get('[data-test="register-email"]').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123');
        cy.get('[data-test="register-submit"]').click();
        cy.get('[data-test="dashboard-welcome"]')
            .should('contain', 'Bem-vindo ' + nome);
    });

    
});