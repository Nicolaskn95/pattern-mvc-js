import LoginModel from '../model/loginModel.js';

const login = new LoginModel();
const logged = login
const LoginController = {
  
  getLogin: (req, res) => {
    res.send(`<h1>${logged.isLogged()}</h1>`);
  },

  getIsLogged: (req, res) => {
    res.render('logged', { logged: logged });
  }
};

export default LoginController;



