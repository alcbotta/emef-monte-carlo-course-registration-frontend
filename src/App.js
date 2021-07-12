import "./App.scss";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
// import { useForm } from "@formspree/react";
import axios from "axios";
import React, { useEffect } from 'react';

function App() {

  const submit = async () => {
    try{
      const result = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log(result);
    }catch (e){
      console.error(e)
    }
  }

  useEffect(() => {
    
    submit();
  });

  // const [state, ] = useForm("xleawdjb");
  let body = null;
  if (false) {
    body = <p>Formulário submetido!</p>;
  } else {
    body = (
      <>
        <h3 className="pb-3">
          Por favor, preencha o formulário abaixo para demonstrar o seu
          interesse em aprender a programar.
        </h3>
        <div className="blurred-box">
          <div className="student-form">
            <Form
              // onSubmit={handleSubmit}
              // action="https://formspree.io/andre.emef.montecarlo.2021@gmail.com"
              // method="POST"
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
              <Button
                color="primary"
                className="send-button"
                // disabled={state.submitting}
                onClick={submit}
              >
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <header className="App-header">{body}</header>
    </div>
  );
}

export default App;
