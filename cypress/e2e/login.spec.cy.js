import LoginPage from "../pages/loginPage";
import userData from "../fixtures/users/user-data.json";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Orange HRM Tests", () => {
  it("Login - fail", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    loginPage.checkAcessInvalid();
  });

  it("Login - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkDashboardPage();
  });
});
