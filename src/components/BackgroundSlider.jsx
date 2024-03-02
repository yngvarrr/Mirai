import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import "./components.css";

const styles = {

};

export const BackgroundSlider = () => {
  return (
    <div className="containerSlider">
      <div className="sliderContent">
        <div className="contentS">
          <div className="login">
            <h1>Bem vindo ao Mirai!</h1>
            <div>
              <h2>Login</h2>
              <input
                className="loginInput"
                type="text"
                placeholder="Insira seu nick"
              />
            </div>
            <div>
              <h2>Senha</h2>
              <input
                className="loginInput"
                type="text"
                placeholder="Insira sua senha"
              />
            </div>
            <Button sx={{
                bgcolor: '#074431'
            }} variant="contained" endIcon={<LoginIcon />}>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
