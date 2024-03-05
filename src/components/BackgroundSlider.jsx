import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import "./components.css";

export const BackgroundSlider = () => {
  return (
    <div className="containerSlider">
      <div className="sliderContent">
        <div className="contentS">
          <div className="login">
            <div className="loginHeader">
              <h1>Bem vindo ao Mirai!</h1>
            </div>
            <div className="inputContainer">
              <h2>Login</h2>
              <input
                className="loginInput"
                type="text"
                placeholder="Insira seu nick"
              />
            </div>
            <div className="inputContainer">
              <h2>Senha</h2>
              <input
                className="loginInput"
                type="text"
                placeholder="Insira sua senha"
              />
              <h5><Link className="forgot" to="/esqueci">Esqueci minha senha...</Link></h5>
            </div>
            <Button
              sx={{
                bgcolor: "#074431",
                fontFamily: 'KodeMono-Bold',
                width: 150,
                height: 40,
                fontSize: 16,
                margin: 0.8
              }}
              variant="contained"
              endIcon={<LoginIcon />}
            >
              Entrar
            </Button>
            <div className="loginExtra">
              <h4>Novo por aqui?</h4>
              <h4><Link className="forgot" to="/cadastro">Cadastre-se</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
