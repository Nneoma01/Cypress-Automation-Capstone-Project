import LoginPage from "../support/Pages/loginPage";
import loginData from "../fixtures/login.json"

class LoginUtil {
    login(condition) {
        switch(condition) {
            case "valid_login":
                LoginPage.login(loginData.userData.validEmail, loginData.userData.validPassword);
                break;
            case "invalid_login":
                LoginPage.login(loginData.userData.invalidEmail, loginData.userData.invalidUsername);
                break;
                default: throw new Error(`The condition does not exist ${condition}`);

        }
    }
} 

export default new LoginUtil();