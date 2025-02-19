import userData from "../fixtures/users/user-data.json";
import DashboardPage from "../pages/dashboardPage";
import LoginFailPage from "../pages/loginFailPage";
import LoginPage from "../pages/loginPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();
const loginFailPage = new LoginFailPage();

describe("Orange HRM Tests", () => {
  it("User Info Update - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSucces.username,
      userData.userSucces.password
    );
    dashboardPage.checkDashboardPage();
    menuPage.acessMyInfo();
    myInfoPage.NameCamp("First Name", "Last Name", "Nickname");
    myInfoPage.Idcamp("EmployeeId", "OtherId", "2004-02-21", "2004-02-21");
    myInfoPage.AdditionalInformation("2004-02-21");
    myInfoPage.saveForm();
  });

  it("Login - fail", () => {
    loginFailPage.loginFailPageTest();
  });
});
