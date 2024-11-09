describe('Тестирование', function () {

  beforeEach('Старт', function () {
    cy.visit('/');});

  it('Успешная авторизация', function () {
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })

it('Успешное восстановление пароля', function () {
  cy.get('#forgotEmailButton').click();
  cy.get('#mailForgot').should('be.visible');
  cy.get('#mailForgot').type('german@dolnikov.ru');
  cy.get('#restoreEmailButton').click();
  cy.get('#messageHeader').should('be.visible');
  cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
})

it('Верный логин, неверный пароль', function () {
  cy.get('#mail').type('german@dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio');
  cy.get('#loginButton').click();
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
})

it('Неверный логин, верный пароль', function () {
  cy.get('#mail').type('german@dolnikoff.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
})

it('Логин без собачки', function () {
  cy.get('#mail').type('germandolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
  cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
})

it('Строчные буквы в логине', function () {
  cy.get('#mail').type('GerMan@Dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
})

})