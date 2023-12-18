import { Column, Content, Row } from "../personalData/style";

export default function AccessData() {
  return (
    <Content>
      <Row>
        <Column id="email-column">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="e-mail" />
        </Column>
      </Row>

      <Row>
        <Column>
          <label>Senha</label>
          <input type="password" placeholder="senha" />
        </Column>
        <Column>
          <label>Confirmar senha</label>
          <input type="password" placeholder="confirmar senha" />
        </Column>
      </Row>

      <Row>
        <button>Salvar</button>
      </Row>
    </Content>
  );
}
