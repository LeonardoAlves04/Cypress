describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    buttonSubmit: "[type='submit']",
    errorAlert: ".oxd-alert--error",
    dashboardTitle: ".oxd-topbar-header-breadcrumb > .oxd-text",
  };

  it("Login - success", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin123");
    cy.get(selectorsList.buttonSubmit).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardTitle).contains("Dashboard");
  });
  it("Login - fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("Test");
    cy.get(selectorsList.passwordField).type("Test");
    cy.get(selectorsList.buttonSubmit).click();
    cy.get(selectorsList.errorAlert);
  });
});
