import userData from "../fixtures/users/user-data.json";
import DashboardPage from "../pages/dashboardPage";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Orange HRM Tests", () => {
  const selectorsList = {};

  it.only("User Info Update - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSucces.username,
      userData.userSucces.password
    );
    dashboardPage.checkDashboardPage();

    cy.get(selectorsList.firstName).clear().type("Leonardo ");
    cy.get(selectorsList.middleName).clear().type("Alves");
    cy.get(selectorsList.lastName).clear().type("de Almeida");
    cy.get(selectorsList.genericField).eq(3).clear().type("EmployeeId");
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherId");
    cy.get(selectorsList.genericField).eq(5).clear().type("DriversLicense");
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-03-10");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.textInput).eq(0).click();
    cy.get(selectorsList.optionsNationality).click();
    cy.get(selectorsList.textInput).eq(1).click();
    cy.get(selectorsList.optionsMarried).click();
    cy.get(selectorsList.genericField).eq(8).clear().type("2004-02-21");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.selectGender).eq(1).click();
    cy.get(selectorsList.saveButton).eq(0).click();
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
