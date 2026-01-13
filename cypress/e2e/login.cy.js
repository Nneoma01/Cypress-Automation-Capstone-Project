import LoginPage from "../support/Pages/loginPage";
import homePage from "../support/Pages/homePage";

describe("Login Page Tests", function () {
  beforeEach(function () {
    cy.visit("https://shop.qaautomationlabs.com/index.php");
    cy.fixture("login.json").as("loginData");
  });

  it("Verify user cannot login in with invalid credentials", function () {
    LoginPage.getLoginLogo().should("exist");
    LoginPage.login(
      this.loginData.userData.invalidEmail,
      this.loginData.userData.invalidPassword
    );
    LoginPage.getErrorMessage()
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Please enter a valid email address.");
      });
  });

  it("Verify user cannot login in with invalid username and valid password", function () {
    LoginPage.getLoginLogo().should("exist");
    LoginPage.login(
      this.loginData.userData.invalidEmail,
      this.loginData.userData.validPassword
    );
    LoginPage.getErrorMessage()
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Please enter a valid email address.");
      });
  });

  it("Verify user cannot login in with valid username and invalid password", function () {
    LoginPage.getLoginLogo().should("exist");
    LoginPage.login(
      this.loginData.userData.validEmail,
      this.loginData.userData.invalidPassword
    );
    LoginPage.getErrorMssg()
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Invalid email or password!");
      });
  });

  it("Verify user cannot login with empty email and empty password", function () {
    LoginPage.getLoginLogo().should("exist");
    LoginPage.elements.LoginButton().click();
    LoginPage.getErrorMessage()
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Please enter your email.");
      });
  });

  it("Verify user cannot login with empty email and valid password", function () {
    LoginPage.getLoginLogo().should("exist");
    LoginPage.elements.passwordInput().type(this.loginData.userData.validPassword);
    LoginPage.elements.LoginButton().click();
    LoginPage.getErrorMessage()
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Please enter your email.");
      });
  });

  it("Verify user cannot login with valid email and empty password", function () {
    LoginPage.getLoginLogo().should("exist");
    LoginPage.elements.emailInput().type(this.loginData.userData.validEmail);
    LoginPage.elements.LoginButton().click();
    LoginPage.getParseErrorMssg()
      .invoke("text")
      .then((text) => {
        expect(text).to.include("Please enter your password.");
      });
  });

  it("Verify user can login in with vaild credentials", function () {
    LoginPage.getLoginLogo().should("exist");
    LoginPage.login(
      this.loginData.userData.validEmail,
      this.loginData.userData.validPassword
    );
    homePage.getHomePageLogo().should("exist");
  });
});
