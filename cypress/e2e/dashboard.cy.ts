describe('DashboardPage', () => {
  describe('DashboardPage', () => {
    Cypress.Commands.add('login', (email, password) => {
      cy.visit('/login');
      cy.get('[name="email"]').type(email);
      cy.get('[name="password"]').type(password);
      cy.get('button').contains('Entrar').click();

      cy.url().should('eq', `${Cypress.config().baseUrl}login#/`);
    });

    describe('deve fazer login e validar o Dashboard', () => {
      beforeEach(() => {
        cy.login('test@caju.com', '123');
      });

      it('deve renderizar a barra de pesquisa', () => {
        cy.get('[data-testid="SearchBar"]').should('be.visible');
      });

      it('deve carregar as colunas com registros', () => {
        cy.get('[data-testid="CollumnItem"]').should('have.length', 3);
      });

      it('deve navegar para a tela de novo registro', () => {
        cy.get('button').contains('Nova Admissão').click();
      });
    });
  });

  describe('deve Cadastrar novo registro', () => {
    beforeEach(() => {
      cy.login('test@caju.com', '123');
      cy.visit('/#/new-user');
    });

    it('deve navegar para a tela de novo registro', () => {
      cy.get('button').contains('Cadastrar').click();
      cy.get('input').next().should('have.length', 4);
    });

    it('deve adicionar um novo registro', () => {
      cy.get('[name="cpf"]').type('05833011779');
      cy.get('[name="admissionDate"]').type('2000-02-28');
      cy.get('[name="employeeName"]').type('Joaquim Ramiz');
      cy.get('[name="status"]').select('REVIEW');
      cy.get('[name="email"]').type('bqX9Z@example.com');

      cy.get('button').contains('Cadastrar').click();
    });
  });

  describe('deve buscar pelo cpf do registro', () => {
    beforeEach(() => {
      cy.login('test@caju.com', '123');
      cy.visit('/');
    });

    it('deve navegar para a tela de novo registro', () => {
      cy.get('input[aria-label="serarchCPF"]').type('05833011779');

      cy.get('[data-testid="CollumnItem"]:first-child')
        .contains('bqx9z@example.com')
        .should('be.exist');
    });
  });

  describe('deve mover o registro', () => {
    beforeEach(() => {
      cy.login('test@caju.com', '123');
      cy.visit('/');
    });

    it('deve conter o novo registro na coluna "review"', () => {
      cy.get('[data-testid="RegistrationCard"]')
        .contains('bqx9z@example.com')
        .should('be.exist');
    });

    it('deve mover para coluna "reproved"', () => {
      cy.get('[data-testid="RegistrationCard"]')
        .contains('bqx9z@example.com')
        .get('button')
        .contains('Reprovar')
        .click();

      cy.get('[data-testid="CollumnItem"]:nth-child(3)')
        .contains('bqx9z@example.com')
        .should('be.exist');
    });

    it('deve conter o novo registro na coluna "Aproved"', () => {
      cy.get('[data-testid="RegistrationCard"]')
        .contains('bqx9z@example.com')
        .get('button')
        .contains('Aprovar')
        .click();

      cy.get('[data-testid="CollumnItem"]:nth-child(2)')
        .contains('bqx9z@example.com')
        .should('be.exist');
    });

    it('deve remover registro', () => {
      cy.get('[data-testid="RegistrationCard"]')
        .contains('bqx9z@example.com')
        .get('button[aria-label="delete"]')
        .click();

      cy.get('button').contains('Sim').click();

      cy.get('[data-testid="CollumnItem"]:nth-child(2)')
        .contains('bqx9z@example.com')
        .should('not.exist');
    });
  });
});
