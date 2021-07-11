import "./App.scss";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3 className="pb-3">
            Por favor, preencha o formulário abaixo para demonstrar o seu
            interesse em aprender a programar.
          </h3>
        <div className="blurred-box">
          <div className="student-form">
            <Form
              action="https://formspree.io/andre.emef.montecarlo@gmail.com"
              method="POST"
              name="sentMessage"
              id="contactForm"
              noValidate={false}
            >
              <FormGroup>
                <Label>Nome</Label>
                <Input
                  required={true}
                  type="text"
                  name="contact-name"
                  id="contact-name"
                  placeholder={"Seu nome"}
                />
              </FormGroup>
              <FormGroup>
                <Label>{"Email"}</Label>
                <Input
                  required
                  type="email"
                  name="contact-email"
                  id="contact-email"
                  placeholder={"Seu email"}
                />
              </FormGroup>
              <FormGroup>
                <Label>{"Você tem acesso à um computador?"}</Label>
                <Input
                  required
                  type="textarea"
                  name="contact-personal-computer"
                  id="contact-personal-computer"
                  placeholder={"Sim/Não ou explique"}
                />
              </FormGroup>
              <Button color="primary" className="send-button">
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
