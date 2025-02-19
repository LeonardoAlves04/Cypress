import userData from "../fixtures/users/user-data.json";

class LoginFailPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[type='password']",
      loginButton: "[type='submit']",
      errorAlert: ".oxd-alert--error",
    };
    return selectors;
  }

  loginFailPageTest() {
    cy.visit("/auth/login");
    cy.get(this.selectorsList().usernameField).type(userData.userFail.username);
    cy.get(this.selectorsList().passwordField).type(userData.userFail.password);
    cy.get(this.selectorsList().loginButton).click();
    cy.get(this.selectorsList().errorAlert);
  }
}

export default LoginFailPage;
