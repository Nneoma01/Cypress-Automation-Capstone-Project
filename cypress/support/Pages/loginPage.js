class LoginPage {
    elements = {
        LoginLogo: () => cy.get('.bg-secondary'),
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        LoginButton: () => cy.get('#loginBtn'),
        emailErrorMessage: () => cy.get('#emailerror'),
        errorMssg: () => cy.get('#errorMsg'),
        parseErrorMssg: () => cy.get('#passerror')
    }

    getLoginLogo() {
        return this.elements.LoginLogo();
    }

    login(username, password){
        this.elements.emailInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.LoginButton().click();
    }

    getErrorMessage() {
        return this.elements.emailErrorMessage();

    }

    getErrorMssg() {
        return this.elements.errorMssg();

    }

    getParseErrorMssg() {
        return this.elements.parseErrorMssg();

    }
}

export default new LoginPage();