import userData from "../fixtures/users/user-data.json";
import DashboardPage from "../pages/dashboardPage";
import LoginPage from "../pages/loginPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const Chance = require("chance");

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
  it("User Info Update - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkDashboardPage();
    menuPage.acessMyInfo();
    myInfoPage.NameCamp(chance.first(), chance.last(), chance, string());
    myInfoPage.Idcamp("EmployeeId", "OtherId", "2004-02-21", "2004-02-21");
    myInfoPage.AdditionalInformation("2004-02-21");
    myInfoPage.saveForm();
  });
});
