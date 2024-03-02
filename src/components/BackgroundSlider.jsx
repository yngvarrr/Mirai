import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./components.css";

export const BackgroundSlider = () => {
  return (
    <div className="containerSlider">
      <div className="sliderContent">
        <div className="contentS">
          <div className="login">
            <h1>Bem vindo ao Mirai!</h1>
            <div>
              <h2>Login</h2>
              <input className="loginInput" type="text" placeholder="Insira seu nick" />
            </div>
            <div>
              <h2>Senha</h2>
              <input className="loginInput" type="text" placeholder="Insira sua senha" />
            </div>

            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
