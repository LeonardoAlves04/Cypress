import userData from "../fixtures/users/user-data.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    buttonSubmit: "[type='submit']",
    errorAlert: ".oxd-alert--error",
    dashboardGrid: ".orangehrm-dashboard-grid",
  };

  it("Login - success", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type(userData.userSucces.username);
    cy.get(selectorsList.passwordField).type(userData.userSucces.password);
    cy.get(selectorsList.buttonSubmit).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
  });
  it("Login - fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.buttonSubmit).click();
    cy.get(selectorsList.errorAlert);
  });
});
