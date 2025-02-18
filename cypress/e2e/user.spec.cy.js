import userData from "../fixtures/users/user-data.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    buttonSubmit: "[type='submit']",
    errorAlert: ".oxd-alert--error",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstName: "[name='firstName']",
    middleName: "[name='middleName']",
    lastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
  };

  it.only("User Info Update - success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSucces.username);
    cy.get(selectorsList.passwordField).type(userData.userSucces.password);
    cy.get(selectorsList.buttonSubmit).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstName).clear().type("Leonardo ");
    cy.get(selectorsList.middleName).clear().type("Alves");
    cy.get(selectorsList.lastName).clear().type("de Almeida");
    cy.get(selectorsList.genericField).eq(3).clear().type("EmployeeId");
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherId");
    cy.get(selectorsList.genericField).eq(5).clear().type("DriversLicense");
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-03-10");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.buttonSubmit).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(".oxd-toast-close");
  });

  it("Login - fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.buttonSubmit).click();
    cy.get(selectorsList.errorAlert);
  });
});
